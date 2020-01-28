import React from 'react';

// Components
import Panel from '../../Components/Panel';
import UserInput from '../../Components/UserInput';
import FormText from '../../Components/FormText';
import FormOption from '../../Components/FormOption';

export const defaultValues = {
  nama: '',
  nik: '',
  kelamin: '0',
  hubungan: '',
  alamat: '',
  telp: '',
  pekerjaan: '0',
  pendidikan: '0',
  wali: '',
  telpWali: '',
};

const PenanggungJawab = ({ styles, form }) => {
  const jenisKelamin = ['Laki-laki', 'Perempuan'];
  const pekerjaan = ['Swasta', 'PNS', 'Petani', 'Lain-lain'];
  const pendidikan = ['Tidak Sekolah', 'SD', 'SMP', 'SMA', 'Perguruan Tinggi'];

  return (
    <Panel title="Data Penanggung Jawab" className={styles.section}>
      <UserInput title="Nama">
        <FormText name="nama" form={form} />
      </UserInput>

      <UserInput title="NIK/Nomor Passport">
        <FormText name="nik" form={form} />
      </UserInput>

      <UserInput title="Jenis Kelamin">
        <FormOption name="kelamin" form={form} items={jenisKelamin} />
      </UserInput>

      <UserInput title="Hubungan">
        <FormText name="hubungan" form={form} />
      </UserInput>

      <UserInput title="Alamat">
        <FormText name="alamat" form={form} multiline />
      </UserInput>

      <UserInput title="Telp/HP">
        <FormText name="telp" form={form} />
      </UserInput>

      <UserInput title="Pekerjaan">
        <FormOption name="pekerjaan" form={form} items={pekerjaan} />
      </UserInput>

      <UserInput title="Pendidikan">
        <FormOption name="pendidikan" form={form} items={pendidikan} />
      </UserInput>

      <UserInput title="Nama Suami/Istri/Ayah/Ibu">
        <FormText name="wali" form={form} />
      </UserInput>

      <UserInput title="Telp/HP">
        <FormText name="telpWali" form={form} />
      </UserInput>
    </Panel>
  );
};

export default PenanggungJawab;
