import React from 'react';

// Components
import Grid from '@material-ui/core/Grid';
import Panel from '../../Components/Panel';
import UserInput from '../../Components/UserInput';
import FormText from '../../Components/FormText';
import FormOption from '../../Components/FormOption';

export const defaultValues = {
  rKeadaanUmum: '0',
  rKeadaan: '0',
  rEye: '',
  rMovement: '',
  rVerbal: '',
  rTd: '',
  rNadi: '',
  rBb: '',
  rSat: '',
  rSuhu: '',
  rNafas: '',
  rReguler: '',
  rEws: '',
  rNyeri: '0',
  rSkalaNyeri: '',
};

const Nyeri = ({ styles, form }) => {
  const keadaanUmum = ['Ringan', 'Sedang', 'Berat'];
  const keadaan = ['Compos Mentis', 'Apatis', 'Delirium', 'Somnolen', 'Sopor', 'Coma'];
  const nyeri = ['Ada', 'Tidak Ada'];

  return (
    <Panel title="Ringkasan Kondisi Pasien Sebelum Meninggalkan IGD" className={styles.section}>
      <UserInput title="Keadaan Umum" alignTop>
        <FormOption name="rKeadaanUmum" form={form} items={keadaanUmum} />
      </UserInput>
      <UserInput title="Keadaan" alignTop>
        <FormOption name="rKeadaan" form={form} items={keadaan} />
      </UserInput>

      <UserInput title="GCS">
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <FormText name="rEye" form={form} label="Eye" />
          </Grid>
          <Grid item xs={4}>
            <FormText name="rMovement" form={form} label="Movement" />
          </Grid>
          <Grid item xs={4}>
            <FormText name="rVerbal" form={form} label="Verbal" />
          </Grid>
        </Grid>
      </UserInput>

      <UserInput title="Tanda Vital">
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <FormText name="rTd" form={form} label="TD" suffix="mmHg" />
          </Grid>
          <Grid item xs={6}>
            <FormText name="rNadi" form={form} label="Nadi" suffix="x/menit" />
          </Grid>
          <Grid item xs={6}>
            <FormText name="rBb" form={form} label="BB" suffix="Kg" />
          </Grid>
          <Grid item xs={6}>
            <FormText name="rSat" form={form} label="SpO2" suffix="%" />
          </Grid>
          <Grid item xs={6}>
            <FormText name="rSuhu" form={form} label="Suhu" suffix="°C" />
          </Grid>
          <Grid item xs={6}>
            <FormText name="rNafas" form={form} label="Pernafasan" suffix="x/menit" />
          </Grid>
        </Grid>

        <FormText name="rReguler" form={form} label="Reguler/Ireguler" style={{ marginTop: 8 }} />
        <FormText name="rEws" form={form} label="EWS/PEWS" style={{ marginTop: 8 }} />
      </UserInput>

      <UserInput title="Skala Nyeri" alignTop>
        <FormOption name="rNyeri" form={form} items={nyeri} />
        <FormText name="rSkalaNyeri" form={form} label="Skor" />
      </UserInput>
    </Panel>
  );
};

export default Nyeri;
