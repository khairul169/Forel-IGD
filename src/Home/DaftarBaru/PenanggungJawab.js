import React, { useState } from 'react';

// Components
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import UserInput from './UserInput';

const PenanggungJawab = ({ styles, onValueChange }) => {
  const jenisKelamin = ['Laki-laki', 'Perempuan'];
  const pekerjaan = ['Swasta', 'PNS', 'Petani', 'Lain-lain'];
  const pendidikan = ['Tidak Sekolah', 'SD', 'SMP', 'SMA', 'Perguruan Tinggi'];

  const [data, setData] = useState({
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
  });

  const setValue = (state) => {
    setData({ ...data, ...state });

    if (typeof onValueChange === 'function') {
      onValueChange(data);
    }
  };

  return (
    <Paper variant="outlined" className={styles.section}>
      <Typography className={styles.sectionTitle}>Data Penanggung Jawab</Typography>

      <UserInput title="Nama">
        <TextField fullWidth size="small" variant="outlined" value={data.nama} onChange={(e) => setValue({ nama: e.target.value })} />
      </UserInput>

      <UserInput title="NIK/Nomor Passport">
        <TextField fullWidth size="small" variant="outlined" value={data.nik} onChange={(e) => setValue({ nik: e.target.value })} />
      </UserInput>

      <UserInput title="Jenis Kelamin">
        <RadioGroup
          row
          value={data.kelamin}
          onChange={(e) => {
            setValue({ kelamin: e.target.value });
          }}
        >
          {jenisKelamin.map((item, index) => (
            <FormControlLabel
              key={index}
              value={index.toString()}
              control={<Radio color="primary" />}
              label={item}
              labelPlacement="end"
            />
          ))}
        </RadioGroup>
      </UserInput>

      <UserInput title="Hubungan">
        <TextField fullWidth size="small" variant="outlined" value={data.hubungan} onChange={(e) => setValue({ hubungan: e.target.value })} />
      </UserInput>

      <UserInput title="Alamat">
        <TextField fullWidth size="small" variant="outlined" multiline rows={3} value={data.alamat} onChange={(e) => setValue({ alamat: e.target.value })} />
      </UserInput>

      <UserInput title="Telp/HP">
        <TextField fullWidth size="small" variant="outlined" value={data.telp} onChange={(e) => setValue({ telp: e.target.value })} />
      </UserInput>

      <UserInput title="Pekerjaan">
        <RadioGroup
          row
          value={data.pekerjaan}
          onChange={(e) => {
            setValue({ pekerjaan: e.target.value });
          }}
        >
          {pekerjaan.map((item, index) => (
            <FormControlLabel
              key={index}
              value={index.toString()}
              control={<Radio color="primary" />}
              label={item}
              labelPlacement="end"
            />
          ))}
        </RadioGroup>
      </UserInput>

      <UserInput title="Pendidikan">
        <RadioGroup
          row
          value={data.pendidikan}
          onChange={(e) => {
            setValue({ pendidikan: e.target.value });
          }}
        >
          {pendidikan.map((item, index) => (
            <FormControlLabel
              key={index}
              value={index.toString()}
              control={<Radio color="primary" />}
              label={item}
              labelPlacement="end"
            />
          ))}
        </RadioGroup>
      </UserInput>

      <UserInput title="Nama Suami/Istri/Ayah/Ibu">
        <TextField fullWidth size="small" variant="outlined" value={data.wali} onChange={(e) => setValue({ wali: e.target.value })} />
      </UserInput>

      <UserInput title="Telp/HP">
        <TextField fullWidth size="small" variant="outlined" value={data.telpWali} onChange={(e) => setValue({ telpWali: e.target.value })} />
      </UserInput>
    </Paper>
  );
};

export default PenanggungJawab;
