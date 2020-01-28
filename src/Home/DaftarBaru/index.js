import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import makeStyles from '@material-ui/core/styles/makeStyles';

// Components
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

// Section
import DataPasien from './DataPasien';
import PenanggungJawab from './PenanggungJawab';

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

const DaftarBaru = ({ userData }) => {
  const styles = useStyles();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState();

  const defaultValues = {
    pasien: {
      rm: '',
      nama: '',
      nik: '',
      kelamin: '0',
      ttl: '',
      kebangsaan: '0',
      alamat: '',
      telp: '',
      agama: '0',
      perkawinan: '0',
      pekerjaan: '0',
      pendidikan: '0',
      jenis: '0',
    },
    pj: {
      nama: '',
      nik: '',
      kelamin: '0',
      hubungan: '',
      alamat: '',
      telp: '',
      pekerjaan: '0',
      pendidikan: '0',
      wali: '',
      telpWali: '',
    },
  };

  const formPasien = useForm({ defaultValues: defaultValues.pasien });
  const formPj = useForm({ defaultValues: defaultValues.pj });

  const resetForm = () => {
    formPasien.reset(defaultValues.pasien);
    formPj.reset(defaultValues.pj);
  };

  const onSubmit = async () => {
    setLoading(true);

    const formValues = {
      pasien: formPasien.getValues(),
      pj: formPj.getValues(),
    };

    const formData = {
      ...formValues,
      jenis: formValues.pasien.jenis,
    };

    const result = await API.pasienBaru(formData);
    setLoading(false);

    if (!result || result.error) {
      if (typeof result.error === 'string') setMessage(result.error);
    } else {
      setMessage('Data telah ditambahkan.');
      resetForm();
    }
  };

  return (
    <Paper className={styles.root} square>
      <Dialog title="Konfirmasi" content={message} onClose={() => setMessage(null)} />

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
                disabled={loading}
                onClick={onSubmit}
              >
              Simpan
              </Button>
            </Grid>
            <Grid item xs>
              <Button
                fullWidth
                variant="contained"
                size="large"
                onClick={resetForm}
              >
                Bersihkan
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

const mapStateToProps = ({ userData }) => ({
  userData,
});

export default connect(mapStateToProps)(DaftarBaru);
