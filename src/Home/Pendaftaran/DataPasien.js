import React from 'react';

// Components
import Panel from '../../Components/Panel';
import UserInput from '../../Components/UserInput';
import FormText from '../../Components/FormText';
import FormOption from '../../Components/FormOption';

export const defaultValues = {
  rm: '',
  nama: '',
  nik: '',
  kelamin: '0',
  ttl: '',
  kebangsaan: '0',
  alamat: '',
  telp: '',
  agama: '0',
  perkawinan: '0',
  pekerjaan: '0',
  pendidikan: '0',
  jenis: '0',
};

const DataPasien = ({ styles, form }) => {
  const jenisKelamin = ['Laki-laki', 'Perempuan'];
  const kebangsaan = ['Indonesia', 'WNA'];
  const agama = ['Islam', 'Kristen', 'Katolik', 'Hindu', 'Buddha', 'Konghucu', 'Lain-lain'];
  const perkawinan = ['Belum Kawin', 'Kawin', 'Duda', 'Janda'];
  const pekerjaan = ['Swasta', 'PNS', 'Petani', 'Lain-lain'];
  const pendidikan = ['Tidak Sekolah', 'SD', 'SMP', 'SMA', 'Perguruan Tinggi'];
  const jenisPasien = ['Ponek', 'Non Ponek'];

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
        <FormText name="ttl" form={form} />
      </UserInput>

      <UserInput title="Kebangsaan">
        <FormOption name="kebangsaan" form={form} items={kebangsaan} />
      </UserInput>

      <UserInput title="Alamat">
        <FormText name="alamat" form={form} multiline />
      </UserInput>

      <UserInput title="Telp/HP">
        <FormText name="telp" form={form} />
      </UserInput>

      <UserInput title="Agama">
        <FormOption name="agama" form={form} items={agama} />
      </UserInput>

      <UserInput title="Status Perkawinan">
        <FormOption name="perkawinan" form={form} items={perkawinan} />
      </UserInput>

      <UserInput title="Pekerjaan">
        <FormOption name="pekerjaan" form={form} items={pekerjaan} />
      </UserInput>

      <UserInput title="Pendidikan">
        <FormOption name="pendidikan" form={form} items={pendidikan} />
      </UserInput>

      <UserInput title="Jenis Pasien">
        <FormOption name="jenis" form={form} items={jenisPasien} />
      </UserInput>
    </Panel>
  );
};

export default DataPasien;
