import React, { useState } from 'react';

// Components
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Panel from '../../Components/Panel';
import UserInput from '../../Components/UserInput';

const Medis = ({ styles, onValueChange }) => {
  const keadaanUmum = ['Ringan', 'Sedang', 'Berat'];
  const kesadaran = ['Compos Mentis', 'Apatis', 'Delirium', 'Somnolen', 'Sopor', 'Coma'];

  const [data, setData] = useState({
    keadaanUmum: '0',
    kesadaran: '0',
    eye: '',
    movement: '',
    verbal: '',
    td: '',
    nadi: '',
    bb: '',
    saturasi: '',
    suhu: '',
    nafas: '',
    reguler: '',
    ews: '',
  });

  const setValue = (state) => {
    setData({ ...data, ...state });

    if (typeof onValueChange === 'function') {
      onValueChange(data);
    }
  };

  return (
    <Panel title="II. Pengkajian Medis" className={styles.section}>
      <UserInput title="Keadaan Umum" titleStyle={{ marginTop: 8 }}>
        <RadioGroup
          row
          value={data.perkawinan}
          onChange={(e) => {
            setValue({ perkawinan: e.target.value });
          }}
        >
          {keadaanUmum.map((item, index) => (
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

      <UserInput title="Kesadaran" titleStyle={{ marginTop: 8 }}>
        <RadioGroup
          row
          value={data.perkawinan}
          onChange={(e) => {
            setValue({ perkawinan: e.target.value });
          }}
        >
          {kesadaran.map((item, index) => (
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

      <UserInput title="GCS">
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <TextField
              fullWidth
              size="small"
              variant="outlined"
              value={data.eye}
              label="Eye"
              onChange={(e) => setValue({ eye: e.target.value })}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              size="small"
              variant="outlined"
              value={data.movement}
              label="Movement"
              onChange={(e) => setValue({ movement: e.target.value })}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              size="small"
              variant="outlined"
              value={data.verbal}
              label="Verbal"
              onChange={(e) => setValue({ verbal: e.target.value })}
            />
          </Grid>
        </Grid>
      </UserInput>

      <UserInput title="Tanda Vital">
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              size="small"
              variant="outlined"
              label="TD"
              InputProps={{
                endAdornment: <InputAdornment position="end">mmHg</InputAdornment>,
              }}
              value={data.td}
              onChange={(e) => setValue({ td: e.target.value })}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              size="small"
              variant="outlined"
              label="Nadi"
              InputProps={{
                endAdornment: <InputAdornment position="end">x/menit</InputAdornment>,
              }}
              value={data.nadi}
              onChange={(e) => setValue({ nadi: e.target.value })}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              size="small"
              variant="outlined"
              label="BB"
              InputProps={{
                endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
              }}
              value={data.bb}
              onChange={(e) => setValue({ bb: e.target.value })}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              size="small"
              variant="outlined"
              label="SpO2"
              InputProps={{
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
              }}
              value={data.saturasi}
              onChange={(e) => setValue({ saturasi: e.target.value })}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              size="small"
              variant="outlined"
              label="Suhu"
              InputProps={{
                endAdornment: <InputAdornment position="end">°C</InputAdornment>,
              }}
              value={data.suhu}
              onChange={(e) => setValue({ suhu: e.target.value })}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              size="small"
              variant="outlined"
              label="Pernafasan"
              InputProps={{
                endAdornment: <InputAdornment position="end">x/menit</InputAdornment>,
              }}
              value={data.nafas}
              onChange={(e) => setValue({ nafas: e.target.value })}
            />
          </Grid>
        </Grid>

        <TextField
          fullWidth
          size="small"
          variant="outlined"
          label="Reguler/Ireguler"
          style={{ marginTop: 8 }}
          value={data.reguler}
          onChange={(e) => setValue({ reguler: e.target.value })}
        />

        <TextField
          fullWidth
          size="small"
          variant="outlined"
          label="EWS/PEWS"
          style={{ marginTop: 8 }}
          value={data.ews}
          onChange={(e) => setValue({ ews: e.target.value })}
        />
      </UserInput>
    </Panel>
  );
};

export default Medis;
