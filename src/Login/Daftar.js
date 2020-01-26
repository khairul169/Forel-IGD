import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link as RouterLink, Redirect } from 'react-router-dom';

// Components
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

// Icons
import PermContactCalendar from '@material-ui/icons/PermContactCalendar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockOutlined from '@material-ui/icons/LockOutlined';
import Email from '@material-ui/icons/Email';
import HowToReg from '@material-ui/icons/HowToReg';

// Etc
import lockIcon from '../Images/lock.png';
import API from '../API';
import Actions from '../Redux/Actions';

const Daftar = ({ authToken, setAuthToken }) => {
  const [data, setData] = useState({
    userId: '',
    nama: '',
    email: '',
    pin: '',
    konfirmasiPin: '',
    type: 0,
  });

  const onDaftar = async () => {
    const result = await API.register(data);
    if (result) {
      sessionStorage.setItem('AUTH_TOKEN', result);
      setAuthToken(result);
    }
  };

  return (
    <div>
      {authToken && <Redirect to="/" />}
      <Grid container alignItems="center" justify="center">
        <img alt="Lock" src={lockIcon} width={48} />
        <Typography component="h1" variant="h5" style={{ marginTop: 6, marginLeft: 16 }}>Daftar</Typography>
      </Grid>

      <Grid container alignItems="center" style={{ marginTop: 48 }}>
        <Grid item>
          <PermContactCalendar style={{ marginTop: 20, fontSize: 24, marginRight: 16 }} />
        </Grid>
        <Grid item xs>
          <TextField
            fullWidth
            label="ID Pengguna"
            value={data.userId}
            onChange={(e) => setData({ ...data, userId: e.target.value })}
          />
        </Grid>
      </Grid>

      <Grid container alignItems="center" style={{ marginTop: 16 }}>
        <Grid item>
          <AccountCircle style={{ marginTop: 20, fontSize: 24, marginRight: 16 }} />
        </Grid>
        <Grid item xs>
          <TextField
            fullWidth
            label="Nama"
            value={data.nama}
            onChange={(e) => setData({ ...data, nama: e.target.value })}
          />
        </Grid>
      </Grid>

      <Grid container alignItems="center" style={{ marginTop: 16 }}>
        <Grid item>
          <Email style={{ marginTop: 20, fontSize: 24, marginRight: 16 }} />
        </Grid>
        <Grid item xs>
          <TextField
            fullWidth
            label="Email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </Grid>
      </Grid>

      <Grid container alignItems="center" style={{ marginTop: 16 }}>
        <Grid item>
          <HowToReg style={{ marginTop: 20, fontSize: 24, marginRight: 16 }} />
        </Grid>
        <Grid item xs>
          <Select value={data.type} labelId="tipe-akun" fullWidth onChange={(e) => setData({ ...data, type: e.target.value })}>
            <MenuItem value={0}>Pendaftaran</MenuItem>
            <MenuItem value={1}>Dokter</MenuItem>
          </Select>
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
            value={data.pin}
            onChange={(e) => setData({ ...data, pin: e.target.value })}
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
            label="Konfirmasi PIN"
            value={data.konfirmasiPin}
            onChange={(e) => setData({ ...data, konfirmasiPin: e.target.value })}
          />
        </Grid>
      </Grid>

      <Grid container justify="center" style={{ marginTop: 48 }}>
        <Button fullWidth color="secondary" variant="contained" size="large" onClick={onDaftar}>
        Lanjutkan
        </Button>
      </Grid>

      <Typography style={{ marginTop: 32 }}>
        <Link component={RouterLink} to="/login" color="textSecondary">Masuk</Link>
      </Typography>
    </div>
  );
};

const mapStateToProps = ({ authToken }) => ({
  authToken,
});

const mapDispatchToProps = {
  setAuthToken: Actions.setAuthToken,
};


export default connect(mapStateToProps, mapDispatchToProps)(Daftar);
