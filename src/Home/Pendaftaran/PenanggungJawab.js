import React from 'react';

// Components
import Panel from '../../Components/Panel';
import UserInput from '../../Components/UserInput';
import FormText from '../../Components/FormText';
import FormOption from '../../Components/FormOption';

export const defaultValues = {
  namaPj: '',
  nikPj: '',
  kelaminPj: '0',
  hubungan: '',
  alamatPj: '',
  telpPj: '',
  pekerjaanPj: '0',
  pendidikanPj: '0',
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
        <FormText name="namaPj" form={form} />
      </UserInput>

      <UserInput title="NIK/Nomor Passport">
        <FormText name="nikPj" form={form} />
      </UserInput>

      <UserInput title="Jenis Kelamin">
        <FormOption name="kelaminPj" form={form} items={jenisKelamin} />
      </UserInput>

      <UserInput title="Hubungan">
        <FormText name="hubungan" form={form} />
      </UserInput>

      <UserInput title="Alamat" alignTop>
        <FormText name="alamatPj" form={form} multiline />
      </UserInput>

      <UserInput title="Telp/HP">
        <FormText name="telpPj" form={form} />
      </UserInput>

      <UserInput title="Pekerjaan">
        <FormOption name="pekerjaanPj" form={form} items={pekerjaan} />
      </UserInput>

      <UserInput title="Pendidikan" alignTop>
        <FormOption name="pendidikanPj" form={form} items={pendidikan} />
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
