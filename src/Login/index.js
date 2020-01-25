import React from 'react';
import {
  makeStyles,
  Grid,
  Hidden,
  Paper,
} from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';
import Main from './Main';
import Masuk from './Masuk';
import Daftar from './Daftar';
import stethoscope from '../Images/stethoscope.jpg';

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
  sidebar: {
    backgroundImage: `url(${stethoscope})`,
    backgroundSize: 'cover',
  },
  panel: {
    background: theme.palette.background.default,
    padding: 32,
  },
}));

const Login = () => {
  const styles = useStyles();

  return (
    <Grid container className={styles.root}>
      <Hidden xsDown>
        <Grid container sm={4} md={7} alignItems="center" justify="center" className={styles.sidebar} />
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
        <Switch>
          <Route path="/login/pendaftaran">
            <Masuk tipe="pendaftaran" />
          </Route>
          <Route path="/login/dokter">
            <Masuk tipe="dokter" />
          </Route>
          <Route path="/login/daftar" component={Daftar} />
          <Route component={Main} />
        </Switch>
      </Grid>
    </Grid>
  );
};

export default Login;
