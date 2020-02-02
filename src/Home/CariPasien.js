import React, { useState, useRef, useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/id';
import { Link } from 'react-router-dom';
import makeStyles from '@material-ui/core/styles/makeStyles';

// Components
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

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
  progress: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
  },
});

const inputDefault = {
  rm: '',
  nama: '',
  ttl: '',
};

const CariPasien = ({ jenis, next }) => {
  const styles = useStyles();

  // States
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState(inputDefault);
  const [items, setItems] = useState();

  // Refs
  const timeout = useRef();

  const searchRegistration = async () => {
    setLoading(true);
    const query = jenis !== undefined ? { ...input, jenis } : input;
    const { result } = await API.findPendaftaran(query);
    setLoading(false);
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
            <TextField fullWidth size="small" variant="outlined" label="No. RM" name="rm" value={input.rm} onChange={onChange} />
          </Grid>
          <Grid item xs>
            <TextField fullWidth size="small" variant="outlined" label="Nama" name="nama" value={input.nama} onChange={onChange} />
          </Grid>
          <Grid item xs>
            <TextField fullWidth size="small" variant="outlined" label="Tempat/Tanggal Lahir" name="ttl" value={input.ttl} onChange={onChange} />
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

      {loading && (
      <div className={styles.progress}>
        <CircularProgress />
      </div>
      )}

      {items && items.map((item, index) => (
        <Link key={index} to={next && `/${next}/${item._id}`} style={{ textDecoration: 'none' }}>
          <Grid container spacing={2} component={Paper} key={index} className={styles.item}>
            <Grid item xs={1}>
              <Typography variant="caption" gutterBottom>No. RM</Typography>
              <Typography>{item.rm}</Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="caption" gutterBottom>Nama Pasien</Typography>
              <Typography>{item.nama}</Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="caption" gutterBottom>Tempat/Tanggal Lahir</Typography>
              <Typography>{item.tempatLahir ? `${item.tempatLahir}, ${moment(item.tglLahir).format('Do MMMM YYYY')}` : '-'}</Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="caption" gutterBottom>Jenis Pasien</Typography>
              <Typography>{item.jenis === '1' ? 'Non Ponek' : 'Ponek'}</Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="caption" gutterBottom>Tanggal Pendaftaran</Typography>
              <Typography>{moment(item.tanggal).format('dddd, Do MMMM YYYY HH:mm')}</Typography>
            </Grid>
          </Grid>
        </Link>
      ))}
    </div>
  );
};

export default CariPasien;
