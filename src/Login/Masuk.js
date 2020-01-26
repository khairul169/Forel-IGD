import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link as RouterLink, Redirect } from 'react-router-dom';

// Components
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

// Icons
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockOutlined from '@material-ui/icons/LockOutlined';

// Etc
import lockIcon from '../Images/lock.png';
import API from '../API';
import Actions from '../Redux/Actions';

const Login = ({ authToken, setAuthToken }) => {
  const [userId, setUserId] = useState('');
  const [pin, setPin] = useState('');

  const tryLogin = async () => {
    const token = await API.login(userId, pin);
    if (token) {
      sessionStorage.setItem('AUTH_TOKEN', token);
      setAuthToken(token);
    }
  };

  return (
    <div>
      {authToken && <Redirect to="/" />}
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
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
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
            value={pin}
            onChange={(e) => setPin(e.target.value)}
          />
        </Grid>
      </Grid>

      <Grid container justify="center" style={{ marginTop: 48 }}>
        <Button
          onClick={tryLogin}
          fullWidth
          color="primary"
          variant="contained"
          size="large"
        >
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
};

const mapStateToProps = ({ authToken }) => ({
  authToken,
});

const mapDispatchToProps = {
  setAuthToken: Actions.setAuthToken,
};


export default connect(mapStateToProps, mapDispatchToProps)(Login);
