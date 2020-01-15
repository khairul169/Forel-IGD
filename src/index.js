import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'typeface-roboto';
import {
  makeStyles,
  Grid,
  Hidden,
  Typography,
  Paper,
  Avatar,
  TextField,
  Button,
} from '@material-ui/core';
import { Lock, AccountCircle, LockOutlined } from '@material-ui/icons';
import lockIcon from './images/lock.png';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    background: theme.palette.primary.main,
  },
  lock: {
    width: 88,
    height: 88,
    padding: 40,
    background: '#fff',
  },
  panel: {
    background: theme.palette.background.default,
    padding: 32,
  },
}));

const App = () => {
  const styles = useStyles();

  return (
    <Grid container className={styles.root}>
      <Hidden xsDown>
        <Grid container sm={4} md={7} alignItems="center" justify="center">
          <Avatar alt="Lock" src={lockIcon} className={styles.lock} />
        </Grid>
      </Hidden>
      <Grid
        item
        container
        direction="column"
        justify="center"
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        className={styles.panel}
        elevation={5}
        square
      >
        <div>
          <Grid container direction="column" alignItems="center">
            <Lock color="secondary" />
            <Typography variant="h5" style={{ marginTop: 14 }}>Login</Typography>
          </Grid>

          <Grid container alignItems="center" style={{ marginTop: 48 }}>
            <Grid item>
              <AccountCircle style={{ marginTop: 20, fontSize: 24, marginRight: 16 }} />
            </Grid>
            <Grid item xs>
              <TextField
                fullWidth
                label="Nama Pengguna"
              />
            </Grid>
          </Grid>

          <Grid container alignItems="center" style={{ marginTop: 16 }}>
            <Grid item>
              <LockOutlined style={{ marginTop: 20, fontSize: 24, marginRight: 16 }} />
            </Grid>
            <Grid item xs>
              <TextField
                fullWidth
                label="Kata Sandi"
              />
            </Grid>
          </Grid>

          <Grid container justify="center" style={{ marginTop: 48 }}>
            <Button fullWidth color="primary" variant="contained" size="large">
            Masuk
            </Button>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
