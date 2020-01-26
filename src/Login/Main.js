import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';
import lockIcon from '../Images/lock.png';

const Main = () => (
  <Grid container direction="column" style={{ flex: 1 }}>
    <Grid
      item
      container
      style={{ flex: 1, paddingBottom: 48 }}
      direction="column"
      justify="flex-end"
      alignItems="center"
    >
      <img alt="Lock" src={lockIcon} width={64} />
      <Typography component="h1" variant="h5" style={{ marginTop: 16 }}>Masuk Sebagai</Typography>
    </Grid>

    <Grid item style={{ flex: 1 }}>
      <Button
        component={RouterLink}
        to="/login/pendaftaran"
        fullWidth
        color="primary"
        variant="contained"
        size="large"
      >
        Pendaftaran
      </Button>
      <Button
        component={RouterLink}
        to="/login/dokter"
        fullWidth
        color="secondary"
        variant="contained"
        size="large"
        style={{ marginTop: 16 }}
      >
        Dokter
      </Button>
    </Grid>
  </Grid>
);

export default Main;
