import React from 'react';

// Components
import Grid from '@material-ui/core/Grid';
import Panel from '../../Components/Panel';
import UserInput from '../../Components/UserInput';
import FormText from '../../Components/FormText';
import FormDatePicker from '../../Components/FormDatePicker';
import FormOption from '../../Components/FormOption';

export const defaultValues = {
  rm: '',
  nama: '',
  nik: '',
  kelamin: '0',
  tempatLahir: '',
  tglLahir: Date.now,
  kebangsaan: '0',
  alamat: '',
  telp: '',
  agama: '0',
  perkawinan: '0',
  pekerjaan: '0',
  pendidikan: '0',
  jenis: '0',
  pembayaran: '0',
  asuransi: '',
};

const DataPasien = ({ styles, form }) => {
  const jenisKelamin = ['Laki-laki', 'Perempuan'];
  const kebangsaan = ['Indonesia', 'WNA'];
  const agama = ['Islam', 'Kristen', 'Katolik', 'Hindu', 'Buddha', 'Konghucu', 'Lain-lain'];
  const perkawinan = ['Belum Kawin', 'Kawin', 'Duda', 'Janda'];
  const pekerjaan = ['Swasta', 'PNS', 'Petani', 'Lain-lain'];
  const pendidikan = ['Tidak Sekolah', 'SD', 'SMP', 'SMA', 'Perguruan Tinggi'];
  const jenisPasien = ['Ponek', 'Non Ponek'];
  const pembayaran = ['Umum', 'BPJS', { input: 'asuransi', label: 'Asuransi' }];

  return (
    <Panel title="Data Pasien" className={styles.section}>
      <UserInput title="No. RM">
        <FormText name="rm" form={form} />
      </UserInput>

      <UserInput title="Nama">
        <FormText name="nama" form={form} />
      </UserInput>

      <UserInput title="NIK/Nomor Passport">
        <FormText name="nik" form={form} />
      </UserInput>

      <UserInput title="Jenis Kelamin">
        <FormOption name="kelamin" form={form} items={jenisKelamin} />
      </UserInput>

      <UserInput title="Tempat/Tanggal Lahir">
        <Grid container spacing={2}>
          <Grid item xs>
            <FormText name="tempatLahir" form={form} />
          </Grid>
          <Grid item xs>
            <FormDatePicker name="tglLahir" form={form} dateOnly />
          </Grid>
        </Grid>
      </UserInput>

      <UserInput title="Kebangsaan">
        <FormOption name="kebangsaan" form={form} items={kebangsaan} />
      </UserInput>

      <UserInput title="Alamat" alignTop>
        <FormText name="alamat" form={form} multiline />
      </UserInput>

      <UserInput title="Telp/HP">
        <FormText name="telp" form={form} />
      </UserInput>

      <UserInput title="Agama" alignTop>
        <FormOption name="agama" form={form} items={agama} />
      </UserInput>

      <UserInput title="Status Perkawinan">
        <FormOption name="perkawinan" form={form} items={perkawinan} />
      </UserInput>

      <UserInput title="Pekerjaan">
        <FormOption name="pekerjaan" form={form} items={pekerjaan} />
      </UserInput>

      <UserInput title="Pendidikan" alignTop>
        <FormOption name="pendidikan" form={form} items={pendidikan} />
      </UserInput>

      <UserInput title="Jenis Pasien">
        <FormOption name="jenis" form={form} items={jenisPasien} />
      </UserInput>

      <UserInput title="Pembayaran" alignTop>
        <FormOption name="pembayaran" form={form} items={pembayaran} cols={2} />
      </UserInput>
    </Panel>
  );
};

export default DataPasien;
