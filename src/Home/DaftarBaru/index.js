import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

// Components
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

// Section
import SectionDataPasien from './SectionDataPasien';

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
    marginTop: 32,
  },
}));

const DaftarBaru = () => {
  const styles = useStyles();

  return (
    <Paper className={styles.root} square>
      <Typography variant="h6" gutterBottom>Identifikasi Pasien</Typography>

      <SectionDataPasien styles={styles} />
      <SectionDataPasien styles={styles} />
    </Paper>
  );
};

export default DaftarBaru;
