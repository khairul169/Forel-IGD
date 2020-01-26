import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

// Components
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    padding: 16,
  },
  container: {
    marginTop: 12,
  },
  searchContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  searchBtn: {
    marginTop: 16,
    minWidth: 120,
  },
});

const DaftarBaru = () => {
  const styles = useStyles();

  return (
    <Paper className={styles.root} square>
      <Typography variant="h6" gutterBottom>Cari Pasien</Typography>
      <Divider />

      <Grid container className={styles.container} spacing={2}>
        <Grid item xs>
          <TextField fullWidth variant="outlined" label="No. RM" />
        </Grid>
        <Grid item xs>
          <TextField fullWidth variant="outlined" label="Nama" />
        </Grid>
        <Grid item xs>
          <TextField fullWidth variant="outlined" label="Jenis Kelamin" />
        </Grid>
      </Grid>

      <div className={styles.searchContainer}>
        <Button
          className={styles.searchBtn}
          variant="contained"
          color="primary"
          size="large"
        >
        Cari
        </Button>
      </div>
    </Paper>
  );
};

export default DaftarBaru;
