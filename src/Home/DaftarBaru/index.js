import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

// Components
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

// Section
import DataPasien from './DataPasien';
import PenanggungJawab from './PenanggungJawab';

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

const DaftarBaru = () => {
  const styles = useStyles();

  return (
    <Paper className={styles.root} square>
      <Typography variant="h6" gutterBottom>Identifikasi Pasien</Typography>

      <DataPasien styles={styles} />
      <PenanggungJawab styles={styles} />

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
            Ns. Khairul Hidayat, S.Tr.Kep
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs>
              <Button fullWidth variant="contained" color="primary" size="large">Simpan</Button>
            </Grid>
            <Grid item xs>
              <Button fullWidth variant="contained" size="large">Bersihkan</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default DaftarBaru;
