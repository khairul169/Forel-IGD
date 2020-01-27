import React from 'react';

// Components
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Panel from '../../Components/Panel';
import UserInput from '../../Components/UserInput';

const PenanggungJawab = ({ styles, register }) => {
  const jenisKelamin = ['Laki-laki', 'Perempuan'];
  const pekerjaan = ['Swasta', 'PNS', 'Petani', 'Lain-lain'];
  const pendidikan = ['Tidak Sekolah', 'SD', 'SMP', 'SMA', 'Perguruan Tinggi'];

  return (
    <Panel title="Data Penanggung Jawab" className={styles.section}>
      <UserInput title="Nama">
        <TextField fullWidth size="small" variant="outlined" name="nama_pj" inputRef={register} />
      </UserInput>

      <UserInput title="NIK/Nomor Passport">
        <TextField fullWidth size="small" variant="outlined" name="nik_pj" inputRef={register} />
      </UserInput>

      <UserInput title="Jenis Kelamin">
        <RadioGroup row defaultValue="0">
          {jenisKelamin.map((item, index) => (
            <FormControlLabel
              key={index}
              value={index.toString()}
              control={<Radio color="primary" name="kelamin_pj" inputRef={register} />}
              label={item}
              labelPlacement="end"
            />
          ))}
        </RadioGroup>
      </UserInput>

      <UserInput title="Hubungan">
        <TextField fullWidth size="small" variant="outlined" name="hubungan_pj" inputRef={register} />
      </UserInput>

      <UserInput title="Alamat">
        <TextField fullWidth size="small" variant="outlined" multiline rows={3} name="alamat_pj" inputRef={register} />
      </UserInput>

      <UserInput title="Telp/HP">
        <TextField fullWidth size="small" variant="outlined" name="telp_pj" inputRef={register} />
      </UserInput>

      <UserInput title="Pekerjaan">
        <RadioGroup row defaultValue="0">
          {pekerjaan.map((item, index) => (
            <FormControlLabel
              key={index}
              value={index.toString()}
              control={<Radio color="primary" name="pekerjaan_pj" inputRef={register} />}
              label={item}
              labelPlacement="end"
            />
          ))}
        </RadioGroup>
      </UserInput>

      <UserInput title="Pendidikan">
        <RadioGroup row defaultValue="0">
          {pendidikan.map((item, index) => (
            <FormControlLabel
              key={index}
              value={index.toString()}
              control={<Radio color="primary" name="pendidikan_pj" inputRef={register} />}
              label={item}
              labelPlacement="end"
            />
          ))}
        </RadioGroup>
      </UserInput>

      <UserInput title="Nama Suami/Istri/Ayah/Ibu">
        <TextField fullWidth size="small" variant="outlined" name="wali" inputRef={register} />
      </UserInput>

      <UserInput title="Telp/HP">
        <TextField fullWidth size="small" variant="outlined" name="telp_wali" inputRef={register} />
      </UserInput>
    </Panel>
  );
};

export default PenanggungJawab;
