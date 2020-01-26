import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

// Components
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

// Section
import Anamnesa from './Anamnesa';
import Medis from './Medis';

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

const Pengkajian = () => {
  const styles = useStyles();

  return (
    <Paper className={styles.root} square>
      <Typography variant="h6" gutterBottom>Pengkajian Medis Pasien Instalasi Gawat Darurat</Typography>
      <Divider />

      <Grid container spacing={2}>
        <Grid item xs={12} lg={6}>
          <Anamnesa styles={styles} />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Medis styles={styles} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Pengkajian;
