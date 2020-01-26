import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

// Components
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 16,
  },
  sectionTitle: {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.background.paper,
    fontSize: '1.1em',
    display: 'inline-block',
    position: 'relative',
    top: -12,
    left: -8,
    paddingLeft: 8,
    paddingRight: 8,
  },
  section: {
    padding: 16,
    paddingTop: 2,
    marginTop: 18,
  },
}));

const DaftarBaru = () => {
  const styles = useStyles();

  return (
    <Paper className={styles.root} square>
      <Typography variant="h6" gutterBottom>Identifikasi Pasien</Typography>

      <Paper variant="outlined" className={styles.section}>
        <Typography className={styles.sectionTitle}>Data Pasien</Typography>

        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Typography>Nama</Typography>
          </Grid>
          <Grid item xs={9}>
            <TextField fullWidth style={{ padding: 0 }} variant="outlined" />
          </Grid>
        </Grid>
      </Paper>
    </Paper>
  );
};

export default DaftarBaru;
