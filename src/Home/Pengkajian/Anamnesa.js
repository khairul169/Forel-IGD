import React, { useState } from 'react';

// Components
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Panel from '../../Components/Panel';
import UserInput from '../../Components/UserInput';

const Anamnesa = ({ styles, onValueChange }) => {
  const riwayat = ['Tidak', 'Ya'];

  const [data, setData] = useState({
    waktu: null,
    auto: '',
    alloo: '',
    riwayatPenyakit: '',
    alergiObat: '0',
    alergiMakanan: '0',
    pantangan: '',
  });

  const setValue = (state) => {
    setData({ ...data, ...state });

    if (typeof onValueChange === 'function') {
      onValueChange(data);
    }
  };

  return (
    <Panel title="I. Anamnesa" className={styles.section}>
      <UserInput title="Waktu Pengkajian">
        <TextField
          fullWidth
          size="small"
          variant="outlined"
          value={data.nama}
          onChange={(e) => setValue({ nama: e.target.value })}
        />
      </UserInput>

      <UserInput title="Anamnesa Auto">
        <TextField
          fullWidth
          size="small"
          variant="outlined"
          multiline
          rows={3}
          value={data.auto}
          onChange={(e) => setValue({ auto: e.target.value })}
        />
      </UserInput>

      <UserInput title="Anamnesa Alloo">
        <TextField
          fullWidth
          size="small"
          variant="outlined"
          multiline
          rows={3}
          value={data.alloo}
          onChange={(e) => setValue({ alloo: e.target.value })}
        />
      </UserInput>

      <UserInput title="Riwayat Penyakit">
        <TextField
          fullWidth
          size="small"
          variant="outlined"
          multiline
          rows={3}
          value={data.riwayatPenyakit}
          onChange={(e) => setValue({ riwayatPenyakit: e.target.value })}
        />
      </UserInput>

      <UserInput title="Riwayat Alergi" titleStyle={{ marginTop: 8 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={4} lg={3}>
            <Typography>Obat</Typography>
          </Grid>
          <Grid item xs={8} lg={9}>
            <RadioGroup
              row
              value={data.alergiObat}
              onChange={(e) => {
                setValue({ alergiObat: e.target.value });
              }}
            >
              {riwayat.map((item, index) => (
                <FormControlLabel
                  key={index}
                  value={index.toString()}
                  control={<Radio color="primary" />}
                  label={item}
                  labelPlacement="end"
                />
              ))}
            </RadioGroup>
          </Grid>

          <Grid item xs={4} lg={3}>
            <Typography>Makanan</Typography>
          </Grid>
          <Grid item xs={8} lg={9}>
            <RadioGroup
              row
              value={data.alergiMakanan}
              onChange={(e) => {
                setValue({ alergiMakanan: e.target.value });
              }}
            >
              {riwayat.map((item, index) => (
                <FormControlLabel
                  key={index}
                  value={index.toString()}
                  control={<Radio color="primary" />}
                  label={item}
                  labelPlacement="end"
                />
              ))}
            </RadioGroup>
          </Grid>
        </Grid>
      </UserInput>
    </Panel>
  );
};

export default Anamnesa;
