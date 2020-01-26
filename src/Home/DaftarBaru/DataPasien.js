import React, { useState } from 'react';

// Components
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import UserInput from './UserInput';

const SectionDataPasien = ({ styles, onValueChange }) => {
  const jenisKelamin = ['Laki-laki', 'Perempuan'];
  const kebangsaan = ['Indonesia', 'WNA'];
  const agama = ['Islam', 'Kristen', 'Katolik', 'Hindu', 'Buddha', 'Konghucu', 'Lain-lain'];
  const perkawinan = ['Belum Kawin', 'Kawin', 'Duda', 'Janda'];
  const pekerjaan = ['Swasta', 'PNS', 'Petani', 'Lain-lain'];
  const pendidikan = ['Tidak Sekolah', 'SD', 'SMP', 'SMA', 'Perguruan Tinggi'];
  const jenisPasien = ['Ponek', 'Non Ponek'];

  const [data, setData] = useState({
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
  });

  const setValue = (state) => {
    setData({ ...data, ...state });

    if (typeof onValueChange === 'function') {
      onValueChange(data);
    }
  };

  return (
    <Paper variant="outlined" className={styles.section}>
      <Typography className={styles.sectionTitle}>Data Pasien</Typography>

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

      <UserInput title="Tempat/Tanggal Lahir">
        <TextField fullWidth size="small" variant="outlined" value={data.ttl} onChange={(e) => setValue({ ttl: e.target.value })} />
      </UserInput>

      <UserInput title="Kebangsaan">
        <RadioGroup
          row
          value={data.kebangsaan}
          onChange={(e) => {
            setValue({ kebangsaan: e.target.value });
          }}
        >
          {kebangsaan.map((item, index) => (
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

      <UserInput title="Alamat">
        <TextField
          fullWidth
          multiline
          rows={3}
          size="small"
          variant="outlined"
          value={data.alamat}
          onChange={(e) => setValue({ alamat: e.target.value })}
        />
      </UserInput>

      <UserInput title="Telp/HP">
        <TextField fullWidth size="small" variant="outlined" value={data.telp} onChange={(e) => setValue({ telp: e.target.value })} />
      </UserInput>

      <UserInput title="Agama">
        <RadioGroup
          row
          value={data.agama}
          onChange={(e) => {
            setValue({ agama: e.target.value });
          }}
        >
          {agama.map((item, index) => (
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

      <UserInput title="Status Perkawinan">
        <RadioGroup
          row
          value={data.perkawinan}
          onChange={(e) => {
            setValue({ perkawinan: e.target.value });
          }}
        >
          {perkawinan.map((item, index) => (
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

      <UserInput title="Jenis Pasien">
        <RadioGroup
          row
          value={data.jenis}
          onChange={(e) => {
            setValue({ jenis: e.target.value });
          }}
        >
          {jenisPasien.map((item, index) => (
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
    </Paper>
  );
};

export default SectionDataPasien;
