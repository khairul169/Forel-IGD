import React from 'react';

// Components
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Panel from '../../Components/Panel';
import UserInput from '../../Components/UserInput';
import FormText from '../../Components/FormText';
import FormOption from '../../Components/FormOption';

export const defaultValues = {
  waktu: null,
  auto: '',
  alloo: '',
  riwayatPenyakit: '',
  alergiObat: '0',
  alergiMakanan: '0',
  pantangan: '',
};

const Anamnesa = ({ styles, form }) => {
  const riwayat = ['Tidak', 'Ya'];

  return (
    <Panel title="I. Anamnesa" className={styles.section}>
      <UserInput title="Waktu Pengkajian">
        <FormText name="waktu" form={form} />
      </UserInput>

      <UserInput title="Anamnesa Auto">
        <FormText name="auto" form={form} multiline />
      </UserInput>

      <UserInput title="Anamnesa Alloo">
        <FormText name="alloo" form={form} multiline />
      </UserInput>

      <UserInput title="Riwayat Penyakit">
        <FormText name="riwayatPenyakit" form={form} multiline />
      </UserInput>

      <UserInput title="Riwayat Alergi" titleStyle={{ marginTop: 8 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={4} lg={3}>
            <Typography>Obat</Typography>
          </Grid>
          <Grid item xs={8} lg={9}>
            <FormOption name="alergiObat" form={form} items={riwayat} />
          </Grid>

          <Grid item xs={4} lg={3}>
            <Typography>Makanan</Typography>
          </Grid>
          <Grid item xs={8} lg={9}>
            <FormOption name="alergiMakanan" form={form} items={riwayat} />
          </Grid>

          <Grid item xs={4} lg={3}>
            <Typography>Pantangan</Typography>
          </Grid>
          <Grid item xs={8} lg={9}>
            <FormText name="pantangan" form={form} />
          </Grid>
        </Grid>
      </UserInput>
    </Panel>
  );
};

export default Anamnesa;
