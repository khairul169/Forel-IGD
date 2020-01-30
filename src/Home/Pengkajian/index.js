import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import makeStyles from '@material-ui/core/styles/makeStyles';

// Components
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

// Section
import CariPasien from '../CariPasien';
import Anamnesa, { defaultValues as defAnamnesa } from './Anamnesa';
import Medis, { defaultValues as defMedis } from './Medis';
import Nyeri, { defaultValues as defNyeri } from './Nyeri';
import Fisik, { defaultValues as defFisik } from './Fisik';
import Terapi, { defaultValues as defTerapi } from './Terapi';

import Dialog from '../../Components/Dialog';
import API from '../../API';

const useStyles = makeStyles({
  root: {
    padding: 16,
  },
  section: {
    padding: 16,
    paddingTop: 2,
    marginTop: 32,
  },
});

const defaultValues = {
  ...defAnamnesa,
  ...defMedis,
  ...defNyeri,
  ...defFisik,
  ...defTerapi,
};

const Pengkajian = ({ authToken, match }) => {
  const styles = useStyles();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState();
  const [pendaftaranId, setPendaftaranId] = useState();

  const form = useForm({ defaultValues });

  const onReset = () => {
    form.reset(defaultValues);
  };

  const onSubmit = async () => {
    if (!pendaftaranId) {
      return;
    }

    setLoading(true);
    const formData = form.getValues();
    const result = await API.setPengkajian(pendaftaranId, formData);
    setLoading(false);

    if (!result || result.error) {
      if (typeof result.error === 'string') {
        setMessage(result.error);
      } else {
        setMessage('Gagal menyimpan data.');
      }
    } else {
      setMessage('Data telah disimpan.');
    }
  };

  const onLoaded = () => {
    (async () => {
      const { id } = match.params;
      setPendaftaranId(id);

      if (id && authToken) {
        setLoading(true);
        const data = await API.getPengkajian(id);
        setLoading(false);

        if (data) {
          // Set form data
          form.reset(data);
        }
      }
    })();
  };

  // Effects
  useEffect(onLoaded, [authToken]);

  if (!match.params.id) {
    return <CariPasien next="pengkajian" />;
  }

  return (
    <Paper className={styles.root} square>
      <Typography variant="h6" gutterBottom>Pengkajian Medis Pasien Instalasi Gawat Darurat</Typography>
      <Divider />

      <Grid container spacing={2}>
        <Grid item xs={12} lg={6}>
          <Anamnesa styles={styles} form={form} />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Medis styles={styles} form={form} />
        </Grid>
      </Grid>

      <Nyeri styles={styles} form={form} />
      <Fisik styles={styles} form={form} />
      <Terapi styles={styles} form={form} onSubmit={onSubmit} onReset={onReset} loading={loading} />

      <Dialog title="Konfirmasi" content={message} onClose={() => setMessage(null)} />
    </Paper>
  );
};

const mapStateToProps = ({ authToken }) => ({
  authToken,
});


export default connect(mapStateToProps)(Pengkajian);
