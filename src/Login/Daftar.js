import React from 'react';
import {
  Grid,
  TextField,
  Typography,
  Button,
  Link,
  Select,
  MenuItem,
} from '@material-ui/core';
import {
  PermContactCalendar, AccountCircle, LockOutlined, Email, HowToReg,
} from '@material-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import lockIcon from '../Images/lock.png';

const Daftar = () => (
  <div>
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
        />
      </Grid>
    </Grid>

    <Grid container alignItems="center" style={{ marginTop: 16 }}>
      <Grid item>
        <HowToReg style={{ marginTop: 20, fontSize: 24, marginRight: 16 }} />
      </Grid>
      <Grid item xs>
        <Select value="1" labelId="tipe-akun" fullWidth>
          <MenuItem value="1">Pendaftaran</MenuItem>
          <MenuItem value="2">Dokter</MenuItem>
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
        />
      </Grid>
    </Grid>

    <Grid container justify="center" style={{ marginTop: 48 }}>
      <Button fullWidth color="secondary" variant="contained" size="large">
        Lanjutkan
      </Button>
    </Grid>

    <Typography style={{ marginTop: 32 }}>
      <Link component={RouterLink} to="/login" color="textSecondary">Masuk</Link>
    </Typography>
  </div>
);

export default Daftar;
