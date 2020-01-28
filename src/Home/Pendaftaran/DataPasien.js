import React from 'react';
import { Controller } from 'react-hook-form';

// Components
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Panel from '../../Components/Panel';
import UserInput from '../../Components/UserInput';

const DataPasien = ({ styles, form }) => {
  const { control } = form;

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
        <Controller as={<TextField fullWidth size="small" variant="outlined" />} name="rm" control={control} />
      </UserInput>

      <UserInput title="Nama">
        <Controller as={<TextField fullWidth size="small" variant="outlined" />} name="nama" control={control} />
      </UserInput>

      <UserInput title="NIK/Nomor Passport">
        <Controller as={<TextField fullWidth size="small" variant="outlined" />} name="nik" control={control} />
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

      <UserInput title="Tempat/Tanggal Lahir">
        <Controller as={<TextField fullWidth size="small" variant="outlined" />} name="ttl" control={control} />
      </UserInput>

      <UserInput title="Kebangsaan">
        <Controller as={<RadioGroup row />} name="kebangsaan" control={control}>
          {kebangsaan.map((item, index) => (
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

      <UserInput title="Alamat">
        <Controller
          as={<TextField fullWidth multiline rows={3} size="small" variant="outlined" />}
          name="alamat"
          control={control}
        />
      </UserInput>

      <UserInput title="Telp/HP">
        <Controller as={<TextField fullWidth size="small" variant="outlined" />} name="telp" control={control} />
      </UserInput>

      <UserInput title="Agama">
        <Controller as={<RadioGroup row />} name="agama" control={control}>
          {agama.map((item, index) => (
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

      <UserInput title="Status Perkawinan">
        <Controller as={<RadioGroup row />} name="perkawinan" control={control}>
          {perkawinan.map((item, index) => (
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

      <UserInput title="Jenis Pasien">
        <Controller as={<RadioGroup row />} name="jenis" control={control}>
          {jenisPasien.map((item, index) => (
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
    </Panel>
  );
};

export default DataPasien;
