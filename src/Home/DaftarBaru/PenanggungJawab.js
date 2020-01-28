import React from 'react';
import { Controller } from 'react-hook-form';

// Components
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Panel from '../../Components/Panel';
import UserInput from '../../Components/UserInput';

const PenanggungJawab = ({ styles, form }) => {
  const { register, control } = form;

  const jenisKelamin = ['Laki-laki', 'Perempuan'];
  const pekerjaan = ['Swasta', 'PNS', 'Petani', 'Lain-lain'];
  const pendidikan = ['Tidak Sekolah', 'SD', 'SMP', 'SMA', 'Perguruan Tinggi'];

  return (
    <Panel title="Data Penanggung Jawab" className={styles.section}>
      <UserInput title="Nama">
        <TextField fullWidth size="small" variant="outlined" name="nama" inputRef={register} />
      </UserInput>

      <UserInput title="NIK/Nomor Passport">
        <TextField fullWidth size="small" variant="outlined" name="nik" inputRef={register} />
      </UserInput>

      <UserInput title="Jenis Kelamin">
        <Controller as={<RadioGroup row />} name="kelamin" control={control}>
          {jenisKelamin.map((item, index) => (
            <FormControlLabel
              key={index}
              value={index.toString()}
              control={<Radio color="primary" />}
              label={item}
              labelPlacement="end"
            />
          ))}
        </Controller>
      </UserInput>

      <UserInput title="Hubungan">
        <TextField fullWidth size="small" variant="outlined" name="hubungan" inputRef={register} />
      </UserInput>

      <UserInput title="Alamat">
        <TextField fullWidth size="small" variant="outlined" multiline rows={3} name="alamat" inputRef={register} />
      </UserInput>

      <UserInput title="Telp/HP">
        <TextField fullWidth size="small" variant="outlined" name="telp" inputRef={register} />
      </UserInput>

      <UserInput title="Pekerjaan">
        <Controller as={<RadioGroup row />} name="pekerjaan" control={control}>
          {pekerjaan.map((item, index) => (
            <FormControlLabel
              key={index}
              value={index.toString()}
              control={<Radio color="primary" />}
              label={item}
              labelPlacement="end"
            />
          ))}
        </Controller>
      </UserInput>

      <UserInput title="Pendidikan">
        <Controller as={<RadioGroup row />} name="pendidikan" control={control}>
          {pendidikan.map((item, index) => (
            <FormControlLabel
              key={index}
              value={index.toString()}
              control={<Radio color="primary" />}
              label={item}
              labelPlacement="end"
            />
          ))}
        </Controller>
      </UserInput>

      <UserInput title="Nama Suami/Istri/Ayah/Ibu">
        <TextField fullWidth size="small" variant="outlined" name="wali" inputRef={register} />
      </UserInput>

      <UserInput title="Telp/HP">
        <TextField fullWidth size="small" variant="outlined" name="telpWali" inputRef={register} />
      </UserInput>
    </Panel>
  );
};

export default PenanggungJawab;
