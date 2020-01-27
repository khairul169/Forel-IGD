import React from 'react';

// Components
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Panel from '../../Components/Panel';
import UserInput from '../../Components/UserInput';

const DataPasien = ({ styles, register }) => {
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
        <TextField fullWidth size="small" variant="outlined" name="rm" inputRef={register} />
      </UserInput>

      <UserInput title="Nama">
        <TextField fullWidth size="small" variant="outlined" name="nama" inputRef={register} />
      </UserInput>

      <UserInput title="NIK/Nomor Passport">
        <TextField fullWidth size="small" variant="outlined" name="nik" inputRef={register} />
      </UserInput>

      <UserInput title="Jenis Kelamin">
        <RadioGroup row defaultValue="0">
          {jenisKelamin.map((item, index) => (
            <FormControlLabel
              key={index}
              value={index.toString()}
              control={<Radio color="primary" name="kelamin" inputRef={register} />}
              label={item}
              labelPlacement="end"
            />
          ))}
        </RadioGroup>
      </UserInput>

      <UserInput title="Tempat/Tanggal Lahir">
        <TextField fullWidth size="small" variant="outlined" name="ttl" inputRef={register} />
      </UserInput>

      <UserInput title="Kebangsaan">
        <RadioGroup row defaultValue="0">
          {kebangsaan.map((item, index) => (
            <FormControlLabel
              key={index}
              value={index.toString()}
              control={<Radio color="primary" name="kebangsaan" inputRef={register} />}
              label={item}
              labelPlacement="end"
            />
          ))}
        </RadioGroup>
      </UserInput>

      <UserInput title="Alamat">
        <TextField
          fullWidth
          multiline
          rows={3}
          size="small"
          variant="outlined"
          name="alamat"
          inputRef={register}
        />
      </UserInput>

      <UserInput title="Telp/HP">
        <TextField fullWidth size="small" variant="outlined" name="telp" inputRef={register} />
      </UserInput>

      <UserInput title="Agama">
        <RadioGroup row defaultValue="0">
          {agama.map((item, index) => (
            <FormControlLabel
              key={index}
              value={index.toString()}
              control={<Radio color="primary" name="agama" inputRef={register} />}
              label={item}
              labelPlacement="end"
            />
          ))}
        </RadioGroup>
      </UserInput>

      <UserInput title="Status Perkawinan">
        <RadioGroup row defaultValue="0">
          {perkawinan.map((item, index) => (
            <FormControlLabel
              key={index}
              value={index.toString()}
              control={<Radio color="primary" name="perkawinan" inputRef={register} />}
              label={item}
              labelPlacement="end"
            />
          ))}
        </RadioGroup>
      </UserInput>

      <UserInput title="Pekerjaan">
        <RadioGroup row defaultValue="0">
          {pekerjaan.map((item, index) => (
            <FormControlLabel
              key={index}
              value={index.toString()}
              control={<Radio color="primary" name="pekerjaan" inputRef={register} />}
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
              control={<Radio color="primary" name="pendidikan" inputRef={register} />}
              label={item}
              labelPlacement="end"
            />
          ))}
        </RadioGroup>
      </UserInput>

      <UserInput title="Jenis Pasien">
        <RadioGroup row defaultValue="0">
          {jenisPasien.map((item, index) => (
            <FormControlLabel
              key={index}
              value={index.toString()}
              control={<Radio color="primary" name="jenis" inputRef={register} />}
              label={item}
              labelPlacement="end"
            />
          ))}
        </RadioGroup>
      </UserInput>
    </Panel>
  );
};

export default DataPasien;
