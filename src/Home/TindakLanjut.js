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
import FormDatePicker from '../Components/FormDatePicker';
import FormOption from '../Components/FormOption';
import FormSelect from '../Components/FormSelect';
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
  waktuKeluar: Date.now,
  tindakLanjut: '',
  pindah: '0',
  dirujukKe: '',
  alasanRujuk: '0',
  rujukKe: '0',
  rujukKeLain: '',
  pulang: '0',
  menolakRawat: '',
  kontrol: '',
  edukasi: '0',
  diet: '',
  minumObat: '',
  edukasiLain: '',
  obatPulang: '',
};

const Section = ({ styles, form, dataPasien }) => {
  const pindah = ['Ruang Biasa', 'Kamar Operasi', 'Kamar Bersalin', 'HD', 'Cath Lab', 'Isolasi', 'ICU/HCU/PICU/NICU/Perina'];
  const alasanRujuk = ['Indikasi Medis', 'Kamar Penuh', 'Atas Permintaan Sendiri'];
  const rujukKe = ['Ambulans', 'Kendaraan Pribadi', { input: 'rujukKeLain', label: 'Lain-lain' }];
  const pulang = [
    'Indikasi Medis',
    { input: 'menolakRawat', label: 'Menolak Rawat, Alasan' },
    { input: 'kontrol', label: 'Kontrol Berobat Jalan di Poli' },
  ];
  const edukasi = [
    { input: 'diet', label: 'Diet' },
    { input: 'minumObat', label: 'Minum Obat Teratur' },
    { input: 'edukasiLain', label: 'Lain-lain' },
  ];

  let jenisKelamin = '-';
  if (dataPasien) jenisKelamin = dataPasien.kelamin === '1' ? 'Perempuan' : 'Laki-laki';

  return (
    <Panel title="Rencana Tindak Lanjut Pelayanan" className={styles.section}>
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

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <UserInput title="Keluar dari IGD">
            <FormDatePicker label="Tanggal/Jam" name="waktu" form={form} />
          </UserInput>
        </Grid>
        <Grid item xs={6}>
          <UserInput title="Dengan tindak lanjut pelayanan">
            <FormText name="tlp" form={form} />
          </UserInput>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <UserInput title="Pasien Dipindahkan Ke">
            <FormSelect form={form} name="pindah" items={pindah} />
          </UserInput>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <UserInput title="Dirujuk Ke">
            <FormText form={form} name="dirujukKe" />
          </UserInput>
        </Grid>
        <Grid item xs={6}>
          <UserInput title="Alasan">
            <FormSelect form={form} name="alasanRujuk" items={alasanRujuk} />
          </UserInput>
        </Grid>
      </Grid>

      <Divider style={{ marginTop: 16, marginBottom: 16 }} />

      <UserInput title="Dirujuk Ke" alignTop>
        <FormOption form={form} name="rujukKe" items={rujukKe} cols={2} />
      </UserInput>

      <UserInput title="Pulang" alignTop>
        <FormOption form={form} name="pulang" items={pulang} cols={1} />
      </UserInput>

      <UserInput title="Edukasi" alignTop>
        <FormOption form={form} name="edukasi" items={edukasi} cols={1} />
      </UserInput>

      <UserInput title="Obat Pulang" alignTop>
        <FormText form={form} name="obatPulang" multiline />
      </UserInput>
    </Panel>
  );
};

const TindakLanjut = ({ authToken, userData, match }) => {
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
    const result = await API.setTindakLanjut(pendaftaranId, formData);
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
        const data = await API.getTindakLanjut(id);
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
    return <CariPasien next="rtl" />;
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


export default connect(mapStateToProps)(TindakLanjut);
