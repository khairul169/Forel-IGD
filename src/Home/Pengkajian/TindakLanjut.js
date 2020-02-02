import React from 'react';

// Components
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Panel from '../../Components/Panel';
import UserInput from '../../Components/UserInput';
import FormText from '../../Components/FormText';
import FormDatePicker from '../../Components/FormDatePicker';
import FormOption from '../../Components/FormOption';
import FormSelect from '../../Components/FormSelect';

export const defaultValues = {
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

const TindakLanjut = ({ styles, form }) => {
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

  return (
    <Panel title="Rencana Tindak Lanjut Pelayanan" className={styles.section}>
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

export default TindakLanjut;
