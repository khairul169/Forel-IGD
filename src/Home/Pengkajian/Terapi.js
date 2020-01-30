import React from 'react';
import { connect } from 'react-redux';

// Components
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Panel from '../../Components/Panel';
import UserInput from '../../Components/UserInput';
import FormText from '../../Components/FormText';

export const defaultValues = {
  diagnosaBanding: '',
  permasalahan: '',
  targetTerukur: '',
  icd10: '',
  terapiTindakan: '',
  terapiMedika: '',
  rencanaOperasi: '',
  rencanaKonsultasi: '',
};

const Terapi = ({
  styles, form, userData, onSubmit, onReset, loading,
}) => (
  <Panel className={styles.section}>
    <Grid container spacing={4}>
      <Grid item xs={7}>
        <UserInput title="Diagnosa Banding" alignTop>
          <FormText name="diagnosaBanding" multiline rows={5} form={form} />
        </UserInput>

        <UserInput title="Permasalahan" alignTop style={{ marginTop: 16 }}>
          <FormText name="permasalahan" multiline rows={5} form={form} />
        </UserInput>

        <Typography variant="subtitle2" gutterBottom style={{ marginTop: 16 }}>Target Terukur / Sasaran Yang Akan Dicapai</Typography>
        <FormText name="targetTerukur" multiline rows={5} form={form} />
      </Grid>

      <Grid item xs={5} container direction="column" justify="space-between">
        <Grid item>
          <UserInput title="Kode ICD 10">
            <FormText name="icd10" form={form} />
          </UserInput>
        </Grid>

        <Grid item>
          <Typography align="center" gutterBottom>Semua informasi adalah benar dan valid.</Typography>
          <Typography variant="h6" align="center" style={{ marginBottom: 64 }}>
            {userData && userData.nama}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                onClick={onSubmit}
                disabled={loading}
              >
              Simpan
              </Button>
            </Grid>
            <Grid item xs>
              <Button
                fullWidth
                variant="contained"
                size="large"
                onClick={onReset}
                disabled={loading}
              >
              Bersihkan
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    <Divider style={{ marginTop: 16, marginBottom: 16 }} />

    <Typography variant="subtitle2" gutterBottom style={{ marginTop: 16 }}>
        Rencana Asuhan/Terapi/Instruksi (Standing Order)
    </Typography>

    <Grid container spacing={3} style={{ marginTop: 8 }}>
      <Grid item xs={12} lg={7} container spacing={2}>
        <Grid item xs={8}>
          <UserInput title="Tindakan" alignTop>
            <FormText name="terapiTindakan" multiline rows={4} form={form} />
          </UserInput>
          <UserInput title="Medika Mentosa" alignTop>
            <FormText name="terapiMedika" multiline rows={4} form={form} />
          </UserInput>
        </Grid>
        <Grid item xs={4}>
          <UserInput title="Kode ICD 9">
            <FormText name="terapiMedika" form={form} />
          </UserInput>
        </Grid>
      </Grid>

      <Grid item xs={12} lg={5}>
        <UserInput title="Rencana Operasi" alignTop>
          <FormText name="rencanaOperasi" multiline rows={4} form={form} />
        </UserInput>
        <UserInput title="Rencana Konsultasi" alignTop>
          <FormText name="rencanaKonsultasi" multiline rows={4} form={form} />
        </UserInput>
      </Grid>
    </Grid>
  </Panel>
);
const mapStateToProps = ({ userData }) => ({
  userData,
});

export default connect(mapStateToProps)(Terapi);
