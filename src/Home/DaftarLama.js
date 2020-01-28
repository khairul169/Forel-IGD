import React, { useState, useRef, useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/id';
import makeStyles from '@material-ui/core/styles/makeStyles';

// Components
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import API from '../API';

const useStyles = makeStyles({
  root: {
    padding: 16,
  },
  container: {
    marginTop: 12,
  },
  searchContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  searchBtn: {
    marginTop: 16,
    minWidth: 120,
    marginLeft: 16,
  },
  item: {
    marginTop: 16,
    padding: 16,
  },
});

const inputDefault = {
  rm: '',
  nama: '',
  ttl: '',
};

const DaftarBaru = () => {
  const styles = useStyles();

  // States
  const [input, setInput] = useState(inputDefault);
  const [items, setItems] = useState();

  // Refs
  const timeout = useRef();

  const searchRegistration = async () => {
    const { result } = await API.findPendaftaran(input);
    setItems(result);
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    const searchQuery = { ...input, [name]: value };
    setInput(searchQuery);
  };

  const onReset = () => {
    setInput(inputDefault);
  };

  useEffect(() => {
    if (timeout.current) clearTimeout(timeout.current);
    timeout.current = setTimeout(searchRegistration, 500);
  }, [input]);

  useEffect(() => () => timeout.current && clearTimeout(timeout.current), []);

  return (
    <div>
      <Paper className={styles.root} square>
        <Typography variant="h6" gutterBottom>Cari Pasien</Typography>
        <Divider />

        <Grid container className={styles.container} spacing={2}>
          <Grid item xs>
            <TextField fullWidth variant="outlined" label="No. RM" name="rm" value={input.rm} onChange={onChange} />
          </Grid>
          <Grid item xs>
            <TextField fullWidth variant="outlined" label="Nama" name="nama" value={input.nama} onChange={onChange} />
          </Grid>
          <Grid item xs>
            <TextField fullWidth variant="outlined" label="Tempat/Tanggal Lahir" name="ttl" value={input.ttl} onChange={onChange} />
          </Grid>
        </Grid>

        <div className={styles.searchContainer}>
          <Button
            className={styles.searchBtn}
            variant="contained"
            color="primary"
            size="large"
            onClick={searchRegistration}
          >
            Cari
          </Button>
          <Button
            className={styles.searchBtn}
            variant="contained"
            size="large"
            onClick={onReset}
          >
            Bersihkan
          </Button>
        </div>
      </Paper>

      {items && items.map((item, index) => (
        <Grid container spacing={2} component={Paper} key={index} className={styles.item}>
          <Grid item xs={2}>
            <Typography variant="subtitle2" gutterBottom>No. RM</Typography>
            <Typography variant="h6">{item.pasien.rm}</Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="subtitle2" gutterBottom>Nama Pasien</Typography>
            <Typography variant="h6">{item.pasien.nama}</Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="subtitle2" gutterBottom>Tempat/Tanggal Lahir</Typography>
            <Typography variant="h6">{item.pasien.ttl || '-'}</Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="subtitle2" gutterBottom>Jenis Pasien</Typography>
            <Typography variant="h6">{item.jenis ? 'Non Ponek' : 'Ponek'}</Typography>
          </Grid>
          <Grid item xs variant="subtitle2" gutterBottom>
            <Typography>Tanggal Pendaftaran</Typography>
            <Typography variant="h6">{moment(item.tanggal).format('dddd, Do MMMM YYYY HH:mm')}</Typography>
          </Grid>
        </Grid>
      ))}
    </div>
  );
};

export default DaftarBaru;
