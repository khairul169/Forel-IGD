import React, { useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

// Components
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 16,
  },
  sectionTitle: {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.background.paper,
    fontSize: '1.1em',
    display: 'inline-block',
    position: 'relative',
    top: -12,
    left: -8,
    paddingLeft: 8,
    paddingRight: 8,
  },
  section: {
    padding: 16,
    paddingTop: 2,
    marginTop: 18,
  },
}));

const UserInput = ({ children, title }) => (
  <Grid container spacing={2}>
    <Grid item xs={3}>
      <Typography>{title}</Typography>
    </Grid>
    <Grid item xs={9}>
      {children}
    </Grid>
  </Grid>
);

const DaftarBaru = () => {
  const styles = useStyles();

  const jenisKelamin = ['Laki-laki', 'Perempuan'];
  const kebangsaan = ['Indonesia', 'WNA'];
  const agama = ['Islam', 'Kristen', 'Katolik', 'Hindu', 'Buddha', 'Konghucu', 'Lain-lain'];
  const perkawinan = ['Belum Kawin', 'Kawin', 'Duda', 'Janda'];
  const pekerjaan = ['Swasta', 'PNS', 'Petani', 'Lain-lain'];
  const pendidikan = ['Tidak Sekolah', 'SD', 'SMP', 'SMA', 'Perguruan Tinggi'];
  const jenisPasien = ['Ponek', 'Non Ponek'];

  const [inputData, setInputData] = useState({
    kelamin: '0',
    kebangsaan: '0',
    agama: '0',
    perkawinan: '0',
    pekerjaan: '0',
    pendidikan: '0',
    jenisPasien: '0',
  });

  console.log(inputData);

  return (
    <Paper className={styles.root} square>
      <Typography variant="h6" gutterBottom>Identifikasi Pasien</Typography>

      <Paper variant="outlined" className={styles.section}>
        <Typography className={styles.sectionTitle}>Data Pasien</Typography>

        <UserInput title="Nama">
          <TextField fullWidth size="small" variant="outlined" />
        </UserInput>

        <UserInput title="NIK/Nomor Passport">
          <TextField fullWidth size="small" variant="outlined" />
        </UserInput>

        <UserInput title="Jenis Kelamin">
          <RadioGroup
            row
            value={inputData.kelamin}
            onChange={(e) => {
              setInputData({ ...inputData, kelamin: e.target.value });
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
          <TextField fullWidth size="small" variant="outlined" />
        </UserInput>

        <UserInput title="Kebangsaan">
          <RadioGroup
            row
            value={inputData.kebangsaan}
            onChange={(e) => {
              setInputData({ ...inputData, kebangsaan: e.target.value });
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
          <TextField fullWidth size="small" variant="outlined" multiline rows={3} />
        </UserInput>

        <UserInput title="Telp/HP">
          <TextField fullWidth size="small" variant="outlined" />
        </UserInput>

        <UserInput title="Agama">
          <RadioGroup
            row
            value={inputData.agama}
            onChange={(e) => {
              setInputData({ ...inputData, agama: e.target.value });
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
            value={inputData.perkawinan}
            onChange={(e) => {
              setInputData({ ...inputData, perkawinan: e.target.value });
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
            value={inputData.pekerjaan}
            onChange={(e) => {
              setInputData({ ...inputData, pekerjaan: e.target.value });
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
            value={inputData.pendidikan}
            onChange={(e) => {
              setInputData({ ...inputData, pendidikan: e.target.value });
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
            value={inputData.jenis}
            onChange={(e) => {
              setInputData({ ...inputData, jenis: e.target.value });
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
    </Paper>
  );
};

export default DaftarBaru;
