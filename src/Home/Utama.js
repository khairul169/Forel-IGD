import React, { useState, useEffect } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import moment from 'moment';
import 'moment/locale/id';

// Components
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  title: {
    marginTop: 16,
  },
  card: {
    padding: 16,
    paddingTop: 32,
    paddingBottom: 32,
    marginTop: 16,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  dateCard: {
    padding: 16,
    height: 'calc(100% - 74px)',
    marginTop: 16,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: {
    marginTop: 16,
  },
  regBtn: {
    marginTop: 16,
  },
  date: {
    fontSize: '1.32em',
    marginBottom: 16,
  },
});

const Utama = () => {
  const styles = useStyles();
  const [date, setDate] = useState();

  const onLoaded = () => {
    setDate(moment());
    setInterval(() => {
      setDate(moment());
    }, 1000);
  };

  useEffect(onLoaded, []);

  return (
    <div>
      <Typography variant="h5" className={styles.title}>
        Selamat Datang di Formulir Elektronik IGD RSIA Puri
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={7}>
          <Paper className={styles.card}>
            <Typography variant="h3">90</Typography>
            <Typography className={styles.cardTitle}>Pasien Hari Ini</Typography>
          </Paper>

          <Grid container spacing={2}>
            <Grid item xs>
              <Paper className={styles.card}>
                <Typography variant="h3">50</Typography>
                <Typography className={styles.cardTitle}>Pasien Ponek</Typography>
              </Paper>
              <Button className={styles.regBtn} color="primary" fullWidth variant="contained" size="large">
                Daftar Baru
              </Button>
            </Grid>
            <Grid item xs>
              <Paper className={styles.card}>
                <Typography variant="h3">40</Typography>
                <Typography className={styles.cardTitle}>Pasien Non Ponek</Typography>
              </Paper>
              <Button className={styles.regBtn} color="primary" fullWidth variant="contained" size="large">
                Pasien Lama
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={5} style={{ alignSelf: 'stretch' }}>
          <Paper className={styles.dateCard}>
            {date && (
            <div>
              <Typography align="center" className={styles.date}>
                {date.format('dddd, Do MMMM YYYY')}
              </Typography>
              <Typography variant="h1" align="center">{date.format('h:mm')}</Typography>
            </div>
            )}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Utama;
