import React from 'react';

// Components
import Grid from '@material-ui/core/Grid';
import Panel from '../../Components/Panel';
import UserInput from '../../Components/UserInput';
import FormText from '../../Components/FormText';
import FormOption from '../../Components/FormOption';

export const defaultValues = {
  keadaanUmum: '0',
  kesadaran: '0',
  eye: '',
  movement: '',
  verbal: '',
  td: '',
  nadi: '',
  bb: '',
  sat: '',
  suhu: '',
  rr: '',
  reguler: '',
  ews: '',
};

const Medis = ({ styles, form }) => {
  const keadaanUmum = ['Ringan', 'Sedang', 'Berat'];
  const kesadaran = ['Compos Mentis', 'Apatis', 'Delirium', 'Somnolen', 'Sopor', 'Coma'];

  return (
    <Panel title="II. Pengkajian Medis" className={styles.section}>
      <UserInput title="Keadaan Umum">
        <FormOption name="keadaanUmum" form={form} items={keadaanUmum} cols={3} />
      </UserInput>

      <UserInput title="Kesadaran" alignTop>
        <FormOption name="kesadaran" form={form} items={kesadaran} cols={3} />
      </UserInput>

      <UserInput title="GCS">
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <FormText name="eye" form={form} label="Eye" />
          </Grid>
          <Grid item xs={4}>
            <FormText name="movement" form={form} label="Movement" />
          </Grid>
          <Grid item xs={4}>
            <FormText name="verbal" form={form} label="Verbal" />
          </Grid>
        </Grid>
      </UserInput>

      <UserInput title="Tanda Vital">
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <FormText name="td" form={form} label="TD" suffix="mmHg" />
          </Grid>
          <Grid item xs={6}>
            <FormText name="nadi" form={form} label="Nadi" suffix="x/menit" />
          </Grid>
          <Grid item xs={6}>
            <FormText name="bb" form={form} label="BB" suffix="Kg" />
          </Grid>
          <Grid item xs={6}>
            <FormText name="sat" form={form} label="SpO2" suffix="%" />
          </Grid>
          <Grid item xs={6}>
            <FormText name="suhu" form={form} label="Suhu" suffix="°C" />
          </Grid>
          <Grid item xs={6}>
            <FormText name="rr" form={form} label="Pernafasan" suffix="x/menit" />
          </Grid>
        </Grid>

        <FormText name="reguler" form={form} label="Reguler/Ireguler" style={{ marginTop: 8 }} />
        <FormText name="ews" form={form} label="EWS/PEWS" style={{ marginTop: 8 }} />
      </UserInput>
    </Panel>
  );
};

export default Medis;
