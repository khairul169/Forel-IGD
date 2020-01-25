import React from 'react';
import {
  Grid,
  TextField,
  Typography,
  Button,
  Link,
} from '@material-ui/core';
import {
  AccountCircle, LockOutlined,
} from '@material-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import lockIcon from '../Images/lock.png';

const Login = () => (
  <div>
    <Grid container alignItems="center" justify="center">
      <img alt="Lock" src={lockIcon} width={48} />
      <Typography component="h1" variant="h5" style={{ marginTop: 6, marginLeft: 16 }}>Masuk</Typography>
    </Grid>

    <Grid container alignItems="center" style={{ marginTop: 48 }}>
      <Grid item>
        <AccountCircle style={{ marginTop: 20, fontSize: 24, marginRight: 16 }} />
      </Grid>
      <Grid item xs>
        <TextField
          fullWidth
          label="ID Pengguna"
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
          label="PIN"
        />
      </Grid>
    </Grid>

    <Grid container justify="center" style={{ marginTop: 48 }}>
      <Button fullWidth color="primary" variant="contained" size="large">
        Masuk
      </Button>
    </Grid>

    <Typography style={{ marginTop: 24 }} align="center">
      <Link component={RouterLink} to="/login/lupa" color="textSecondary">Lupa ID/PIN?</Link>
    </Typography>

    <Grid container justify="space-between">
      <Grid item component={Typography} style={{ marginTop: 32 }}>
        <Link component={RouterLink} to="/login" color="textSecondary">Kembali</Link>
      </Grid>
      <Grid item component={Typography} style={{ marginTop: 32 }}>
        <Link component={RouterLink} to="/login/daftar" color="textSecondary">Daftar Akun</Link>
      </Grid>
    </Grid>
  </div>
);

export default Login;
