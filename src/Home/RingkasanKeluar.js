import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import makeStyles from '@material-ui/core/styles/makeStyles';

// Components
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

// Etc
import CariPasien from './CariPasien';
import Dialog from '../Components/Dialog';
import Panel from '../Components/Panel';
import UserInput from '../Components/UserInput';
import FormText from '../Components/FormText';
import FormOption from '../Components/FormOption';
import API from '../API';

const useStyles = makeStyles({
  root: {
    padding: 16,
  },
  section: {
    padding: 16,
    paddingTop: 2,
    marginTop: 32,
  },
});

const defaultValues = {
  keadaanUmum: '0',
  keadaan: '0',
  eye: '',
  movement: '',
  verbal: '',
  td: '',
  nadi: '',
  bb: '',
  sat: '',
  suhu: '',
  rr: '',
  reguler: '',
  ews: '',
  nyeri: '0',
  skalaNyeri: '',
};

const Section = ({ styles, form, dataPasien }) => {
  const keadaanUmum = ['Ringan', 'Sedang', 'Berat'];
  const keadaan = ['Compos Mentis', 'Apatis', 'Delirium', 'Somnolen', 'Sopor', 'Coma'];
  const nyeri = ['Ada', 'Tidak Ada'];

  let jenisKelamin = '-';
  if (dataPasien) jenisKelamin = dataPasien.kelamin === '1' ? 'Perempuan' : 'Laki-laki';

  return (
    <Panel title="Ringkasan Kondisi Pasien Sebelum Meninggalkan IGD" className={styles.section}>
      <Grid container justify="flex-end">
        <Grid item xs={12} md={7} lg={5}>
          <UserInput title="No. RM" titleWidth={5}>
            <Typography>{dataPasien ? dataPasien.rm : '-'}</Typography>
          </UserInput>
          <UserInput title="Nama" titleWidth={5}>
            <Typography>{dataPasien ? dataPasien.nama : '-'}</Typography>
          </UserInput>
          <UserInput title="Tempat/Tanggal Lahir" titleWidth={5}>
            <Typography>{dataPasien ? (dataPasien.ttl || '-') : '-'}</Typography>
          </UserInput>
          <UserInput title="Jenis Kelamin" titleWidth={5}>
            <Typography>{jenisKelamin}</Typography>
          </UserInput>
        </Grid>
      </Grid>

      <Divider style={{ marginTop: 16, marginBottom: 16 }} />

      <UserInput title="Keadaan Umum" alignTop>
        <FormOption name="keadaanUmum" form={form} items={keadaanUmum} />
      </UserInput>
      <UserInput title="Keadaan" alignTop>
        <FormOption name="keadaan" form={form} items={keadaan} />
      </UserInput>

      <UserInput title="GCS">
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <FormText name="eye" form={form} label="Eye" />
          </Grid>
          <Grid item xs={4}>
            <FormText name="movement" form={form} label="Movement" />
          </Grid>
          <Grid item xs={4}>
            <FormText name="verbal" form={form} label="Verbal" />
          </Grid>
        </Grid>
      </UserInput>

      <UserInput title="Tanda Vital">
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <FormText name="td" form={form} label="TD" suffix="mmHg" />
          </Grid>
          <Grid item xs={6}>
            <FormText name="nadi" form={form} label="Nadi" suffix="x/menit" />
          </Grid>
          <Grid item xs={6}>
            <FormText name="bb" form={form} label="BB" suffix="Kg" />
          </Grid>
          <Grid item xs={6}>
            <FormText name="sat" form={form} label="SpO2" suffix="%" />
          </Grid>
          <Grid item xs={6}>
            <FormText name="suhu" form={form} label="Suhu" suffix="°C" />
          </Grid>
          <Grid item xs={6}>
            <FormText name="rr" form={form} label="Pernafasan" suffix="x/menit" />
          </Grid>
        </Grid>

        <FormText name="reguler" form={form} label="Reguler/Ireguler" style={{ marginTop: 8 }} />
        <FormText name="ews" form={form} label="EWS/PEWS" style={{ marginTop: 8 }} />
      </UserInput>

      <UserInput title="Skala Nyeri" alignTop>
        <FormOption name="nyeri" form={form} items={nyeri} />
        <FormText name="skalaNyeri" form={form} label="Skor" />
      </UserInput>
    </Panel>
  );
};

const RingkasanKeluar = ({ authToken, userData, match }) => {
  const styles = useStyles();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState();
  const [pendaftaranId, setPendaftaranId] = useState();
  const [dataPasien, setDataPasien] = useState();

  const form = useForm({ defaultValues });

  const onReset = () => {
    form.reset(defaultValues);
  };

  const onSubmit = async () => {
    if (!pendaftaranId) {
      return;
    }

    setLoading(true);
    const formData = form.getValues();
    const result = await API.setRingkasan(pendaftaranId, formData);
    setLoading(false);

    if (!result || result.error) {
      if (typeof result.error === 'string') {
        setMessage(result.error);
      } else {
        setMessage('Gagal menyimpan data.');
      }
    } else {
      setMessage('Data telah disimpan.');
    }
  };

  const onLoaded = () => {
    (async () => {
      const { id } = match.params;
      setPendaftaranId(id);

      if (id && authToken) {
        setLoading(true);
        const { pasien } = await API.getPendaftaranById(id);
        const data = await API.getRingkasan(id);
        setLoading(false);
        setDataPasien(pasien);

        if (data) {
          // Set form data
          form.reset(data);
        }
      }
    })();
  };

  // Effects
  useEffect(onLoaded, [authToken]);

  if (!match.params.id) {
    return <CariPasien next="ringkasan-keluar" />;
  }

  return (
    <Paper className={styles.root} square>
      <Typography variant="h6" gutterBottom>Pengkajian Medis Pasien Instalasi Gawat Darurat</Typography>
      <Divider />

      <Section styles={styles} form={form} loading={loading} dataPasien={dataPasien} />

      <Grid container justify="flex-end" style={{ marginTop: 32 }}>
        <Grid item xs={6}>
          <Typography align="center" gutterBottom>Semua informasi adalah benar dan valid.</Typography>
          <Typography variant="h6" align="center" style={{ marginBottom: 64 }}>
            {userData && userData.nama}
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                onClick={onSubmit}
                disabled={loading}
              >
              Simpan
              </Button>
            </Grid>
            <Grid item xs>
              <Button
                fullWidth
                variant="contained"
                size="large"
                onClick={onReset}
                disabled={loading}
              >
              Bersihkan
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Dialog title="Konfirmasi" content={message} onClose={() => setMessage(null)} />
    </Paper>
  );
};

const mapStateToProps = ({ authToken, userData }) => ({
  authToken,
  userData,
});


export default connect(mapStateToProps)(RingkasanKeluar);
