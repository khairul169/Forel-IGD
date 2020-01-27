import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
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
  const [success, setSuccess] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);

    const formData = {
      pasien: {
        rm: data.rm,
        nama: data.nama,
        nik: data.nik,
        kelamin: data.kelamin,
        ttl: data.ttl,
        kebangsaan: data.kebangsaan,
        alamat: data.alamat,
        telp: data.telp,
        agama: data.agama,
        perkawinan: data.perkawinan,
        pekerjaan: data.pekerjaan,
        pendidikan: data.pendidikan,
      },
      pj: {
        nama: data.nama_pj,
        nik: data.nik_pj,
        kelamin: data.kelamin_pj,
        hubungan: data.hubungan_pj,
        alamat: data.alamat_pj,
        telp: data.telp_pj,
        pekerjaan: data.pekerjaan_pj,
        pendidikan: data.pendidikan_pj,
        wali: data.wali,
        telpWali: data.telp_wali,
      },
      jenis: data.jenis,
    };

    const result = await API.pasienBaru(formData);
    setLoading(false);

    if (!result || result.error) {
      if (typeof result.error === 'string') setMessage(result.error);
    } else {
      setSuccess(true);
      setMessage('Data telah ditambahkan.');
    }
  };

  const onDialogClose = () => {
    setMessage(null);
    if (success) {
      setRefresh(true);
    }
  };

  return (
    <Paper className={styles.root} square>
      <Dialog title="Konfirmasi" content={message} onClose={onDialogClose} />
      {refresh && <Redirect to="/daftar-baru" />}

      <Typography variant="h6" gutterBottom>Identifikasi Pasien</Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <DataPasien styles={styles} register={register} />
        <PenanggungJawab styles={styles} register={register} />

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
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  disabled={loading}
                >
                Simpan
                </Button>
              </Grid>
              <Grid item xs>
                <Button type="reset" fullWidth variant="contained" size="large">Bersihkan</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

const mapStateToProps = ({ userData }) => ({
  userData,
});

export default connect(mapStateToProps)(DaftarBaru);
