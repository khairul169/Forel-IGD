import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import makeStyles from '@material-ui/core/styles/makeStyles';

// Components
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

// Section
import DataPasien, { defaultValues as defPasien } from './DataPasien';
import PenanggungJawab, { defaultValues as defPj } from './PenanggungJawab';

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
  spacing: {
    marginTop: 32,
  },
  namaRegistrar: {
    fontSize: '1.2em',
    marginBottom: 24,
  },
});

const DaftarBaru = ({ userData, match, authToken }) => {
  const styles = useStyles();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState();

  const formPasien = useForm({ defaultValues: defPasien });
  const formPj = useForm({ defaultValues: defPj });

  const onReset = () => {
    formPasien.reset(defPasien);
    formPj.reset(defPj);
  };

  const onSubmit = async () => {
    setLoading(true);

    const formData = {
      pasien: formPasien.getValues(),
      pj: formPj.getValues(),
    };

    const result = await API.pasienBaru(formData);
    setLoading(false);

    if (!result || result.error) {
      if (typeof result.error === 'string') {
        setMessage(result.error);
      } else {
        setMessage('Gagal menyimpan data.');
      }
    } else {
      setMessage('Data telah ditambahkan.');
      onReset();
    }
  };

  const onLoaded = () => {
    (async () => {
      const { id } = match.params;

      if (id && authToken) {
        setLoading(true);
        const data = await API.getPendaftaranById(id);
        setLoading(false);

        // Set form data
        formPasien.reset(data.pasien);
        formPj.reset(data.pj);
      }
    })();
  };

  // Effects
  useEffect(onLoaded, [authToken]);

  return (
    <Paper className={styles.root} square>
      <Typography variant="h6" gutterBottom>Identifikasi Pasien</Typography>

      <DataPasien styles={styles} form={formPasien} />
      <PenanggungJawab styles={styles} form={formPj} />

      <div className={styles.spacing} />

      <Grid container spacing={2}>
        <Grid item xs={7}>
          <Typography variant="body2" gutterBottom>
      Semua informasi adalah benar dan valid yang telah disampaikan penanggung jawab.
          </Typography>
          <Typography variant="body2" gutterBottom>1. Data sesuai dengan KTP/KK/Passport.</Typography>
          <Typography variant="body2" gutterBottom>
      2. Periksa kembali data yang telah anda isikan dan pastikan sudah sesuai
      dengan KTP/KK/Passport.
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="h6" gutterBottom align="center" className={styles.namaRegistrar}>
            {userData && userData.nama}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                onClick={onSubmit}
                disabled={loading}
              >
              Simpan
              </Button>
            </Grid>
            <Grid item xs>
              <Button
                fullWidth
                variant="contained"
                size="large"
                onClick={onReset}
                disabled={loading}
              >
                Bersihkan
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Dialog title="Konfirmasi" content={message} onClose={() => setMessage(null)} />
    </Paper>
  );
};

const mapStateToProps = ({ authToken, userData }) => ({
  authToken,
  userData,
});

export default connect(mapStateToProps)(DaftarBaru);
