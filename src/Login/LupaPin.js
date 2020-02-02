import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// Components
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';

// Icons
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockOutlined from '@material-ui/icons/LockOutlined';

// Etc
import lockIcon from '../Images/lock.png';
import API from '../API';

const STATE_INPUT_USERID = 0;
const STATE_INPUT_SECRET = 1;
const STATE_RESET_PIN = 2;
const STATE_SELESAI = 3;

const LupaPin = () => {
  const [state, setState] = useState(STATE_INPUT_USERID);
  const [userId, setUserId] = useState('');
  const [user, setUser] = useState();
  const [secret, setSecret] = useState('');
  const [pin, setPin] = useState('');

  const onLupaPin = async () => {
    if (state === STATE_INPUT_USERID) {
      const result = await API.lupaPin(userId);
      if (result && result.id) {
        setUser(result.id);
        setState(STATE_INPUT_SECRET);
      }
    }

    if (state === STATE_INPUT_SECRET && user && secret) {
      const result = await API.validateLupaPin(user, secret);
      if (result) {
        setState(STATE_RESET_PIN);
      }
    }
  };

  const onReset = async () => {
    if (!user || !pin) {
      return;
    }
    const result = await API.resetPin(user, secret, pin);
    if (result) {
      setState(STATE_SELESAI);
    }
  };

  return (
    <div>
      <Grid container alignItems="center" justify="center">
        <img alt="Lock" src={lockIcon} width={48} />
        <Typography component="h1" variant="h5" style={{ marginTop: 6, marginLeft: 16 }}>Lupa PIN</Typography>
      </Grid>

      {state === STATE_INPUT_USERID && (
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
      )}

      {state === STATE_INPUT_SECRET && (
      <div>
        <Typography style={{ marginTop: 32 }}>
          Masukkan Kode Rahasia yang dikirimkan melalui email.
        </Typography>
        <Divider style={{ marginTop: 8, marginBottom: 8 }} />
        <Grid container alignItems="center">
          <Grid item>
            <LockOutlined style={{ marginTop: 20, fontSize: 24, marginRight: 16 }} />
          </Grid>
          <Grid item xs>
            <TextField
              fullWidth
              label="Kode Rahasia"
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
            />
          </Grid>
        </Grid>
      </div>
      )}

      {state === STATE_RESET_PIN && (
      <div>
        <Typography style={{ marginTop: 32 }}>
          Masukkan PIN baru.
        </Typography>
        <Divider style={{ marginTop: 8, marginBottom: 8 }} />
        <Grid container alignItems="center">
          <Grid item>
            <LockOutlined style={{ marginTop: 20, fontSize: 24, marginRight: 16 }} />
          </Grid>
          <Grid item xs>
            <TextField
              fullWidth
              label="PIN Baru"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
            />
          </Grid>
        </Grid>
      </div>
      )}

      {state === STATE_SELESAI && (
      <Typography align="center" style={{ marginTop: 64 }}>
        PIN Telah Diubah! Tekan Login untuk Masuk.
      </Typography>
      )}

      <Grid container justify="center" style={{ marginTop: 48 }}>
        {(state === STATE_INPUT_USERID || state === STATE_INPUT_SECRET) && (
        <Button
          onClick={onLupaPin}
          fullWidth
          color="primary"
          variant="contained"
          size="large"
        >
        Lupa PIN
        </Button>
        )}

        {state === STATE_RESET_PIN && (
        <Button
          onClick={onReset}
          fullWidth
          color="secondary"
          variant="contained"
          size="large"
        >
        Buat PIN Baru
        </Button>
        )}

        {state === STATE_SELESAI && (
        <Button
          fullWidth
          color="primary"
          variant="contained"
          size="large"
          component={RouterLink}
          to="/login"
        >
        Login
        </Button>
        )}
      </Grid>

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

export default LupaPin;
