import React from 'react';
import { connect } from 'react-redux';

// Components
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Panel from '../../Components/Panel';
import UserInput from '../../Components/UserInput';
import FormText from '../../Components/FormText';
import FormOption from '../../Components/FormOption';
import FormSelect from '../../Components/FormSelect';

export const defaultValues = {
  polaNafas: '0',
  kepala: '0',
  kepalaLain: '',
  refleksiCahaya: '',
  pupil: '0',
  isokor: '',
  sekret: '',
  anisokor: '',
  konjungtiva: '0',
  sklera: '0',
  hidung: '0',
  mulut: '0',
  faring: '0',
  tonsis: '0',
  telinga: '0',
  telingaSekret: '',
  leher: '0',
  venaJugularis: '0',
  gerakanDada: '0',
  inspeksiDada: '0',
  retraksiDada: '0',
  auskultasiDada: '0',
  ictusCordis: '0',
  palpasiDada: '0',
  fremitusTaktil: '0',
  heparLien: '0',
  batasJantung: '0',
  cor: '0',
  pulmo: '0',
  akral: '0',
  crt: '0',
  kuatNadi: '0',
  edema: '',
};

const Fisik = ({ styles, form }) => {
  const polaNafas = ['Normal', 'Dispneu', 'Kusmaull', 'Cheyne Stokes', 'Stridor'];
  const kepala = ['Simetris', 'Asimetris', { input: 'kepalaLain', label: 'Lain-lain' }];
  const pupil = [
    { input: 'isokor', label: 'Isokor' },
    { input: 'sekret', label: 'Sekret' },
    { input: 'anisokor', label: 'Anisokor' },
  ];
  const konjungtiva = ['Normal', 'Anemis', 'Perdarahan', 'Hiperemesis'];
  const hidung = ['Normal', 'Nafas Cuping Hidung', 'Sekret'];
  const mulut = ['Normal', 'Sianosis'];
  const faring = ['Normal', 'Hiperemesis'];
  const tonsis = ['Normal', 'Hiperemesis', 'Membesar'];
  const telinga = ['Normal', { input: 'telingaSekret', label: 'Sekret' }];
  const leher = ['Normal', 'Massa', 'Kelenjar', 'Kaku Kuduk'];
  const venaJugularis = ['Normal', 'Meningkat'];
  const gerakanDada = ['Simetris', 'Asimetris'];
  const inspeksiDada = ['Datar', 'Cekung', 'Cembung', 'Lain-lain'];
  const retraksiDada = ['Sipra Clavicula', 'Sterna', 'Costae'];
  const auskultasiDada = ['Normal', 'Meningkat', 'Melemah', 'Tidak Ada'];
  const ictusCordis = ['Terlihat', 'Tidak Terlihat'];
  const palpasiDada = ['Supel', 'Distensi', 'Nyeri Tekan/Lepas', 'Turgor', 'Asites'];
  const fremitusTaktil = ['Simetris', 'Tidak Simetris'];
  const heparLien = ['Teraba', 'Tidak Teraba'];
  const batasJantung = ['Membesar', 'Tidak Membesar'];
  const cor = ['Bunyi Jantung I/II: Reguler/Irreguler', 'Murmur', 'Gallop'];
  const pulmo = ['Vesikuler', 'Whezzing', 'Bronchial', 'Bronchovesikuler', 'Slem', 'Ronchi'];
  const akral = ['Hangat', 'Dingin'];
  const crt = ['< 2 Detik', '>= 2 detik'];
  const kuatNadi = ['Kuat', 'Lemah', 'Teratur', 'Tidak Teratur'];

  return (
    <Panel title="IV. Pemeriksaan Fisik" className={styles.section}>
      <UserInput title="Pola Pernafasan" alignTop>
        <FormOption name="polaNafas" form={form} items={polaNafas} />
      </UserInput>

      <UserInput title="Kepala/Wajah">
        <FormOption name="kepala" form={form} items={kepala} />
      </UserInput>
      <Divider style={{ marginTop: 16, marginBottom: 16 }} />

      <UserInput title="Mata">
        <UserInput title="Refleksi Cahaya">
          <FormText name="refleksiCahaya" form={form} />
        </UserInput>

        <UserInput title="Pupil">
          <FormOption name="pupil" form={form} items={pupil} cols={3} />
        </UserInput>

        <UserInput title="Konjungtiva">
          <FormOption name="konjungtiva" form={form} items={konjungtiva} />
        </UserInput>

        <UserInput title="Sklera">
          <FormOption name="sklera" form={form} items={konjungtiva} />
        </UserInput>
      </UserInput>
      <Divider style={{ marginTop: 16, marginBottom: 16 }} />

      <UserInput title="Hidung">
        <FormOption name="hidung" form={form} items={hidung} />
      </UserInput>
      <Divider style={{ marginTop: 16, marginBottom: 16 }} />

      <UserInput title="Mulut">
        <FormOption name="mulut" form={form} items={mulut} />

        <UserInput title="Faring">
          <FormOption name="faring" form={form} items={faring} cols={3} />
        </UserInput>

        <UserInput title="Tonsis">
          <FormOption name="tonsis" form={form} items={tonsis} cols={3} />
        </UserInput>
      </UserInput>
      <Divider style={{ marginTop: 16, marginBottom: 16 }} />

      <UserInput title="Telinga">
        <FormOption name="telinga" form={form} items={telinga} />
      </UserInput>
      <Divider style={{ marginTop: 16, marginBottom: 16 }} />

      <UserInput title="Leher" alignTop>
        <FormOption name="leher" form={form} items={leher} />

        <UserInput title="Vena Jugularis">
          <FormSelect name="venaJugularis" form={form} items={venaJugularis} />
        </UserInput>
      </UserInput>

      <Divider style={{ marginTop: 16, marginBottom: 16 }} />

      <UserInput title="Thorax" alignTop style={{ marginTop: 16 }}>
        <Typography gutterBottom>Inspeksi</Typography>
        <Divider style={{ marginTop: 8, marginBottom: 16 }} />

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <UserInput title="Gerakan Dinding Dada" titleWidth={6}>
              <FormSelect name="gerakanDada" form={form} items={gerakanDada} />
            </UserInput>
          </Grid>
          <Grid item xs={6}>
            <UserInput title="Inspeksi" titleWidth={6}>
              <FormSelect name="inspeksiDada" form={form} items={inspeksiDada} />
            </UserInput>
          </Grid>
          <Grid item xs={6}>
            <UserInput title="Retraksi" titleWidth={6}>
              <FormSelect name="retraksiDada" form={form} items={retraksiDada} />
            </UserInput>
          </Grid>
          <Grid item xs={6}>
            <UserInput title="Auskultasi: BU" titleWidth={6}>
              <FormSelect name="auskultasiDada" form={form} items={auskultasiDada} />
            </UserInput>
          </Grid>
          <Grid item xs={6}>
            <UserInput title="Ictus Cordis" titleWidth={6}>
              <FormSelect name="ictusCordis" form={form} items={ictusCordis} />
            </UserInput>
          </Grid>
          <Grid item xs={6}>
            <UserInput title="Palpasi" titleWidth={6}>
              <FormSelect name="palpasiDada" form={form} items={palpasiDada} />
            </UserInput>
          </Grid>
        </Grid>

        <Typography gutterBottom style={{ marginTop: 32 }}>Palpasi</Typography>
        <Divider style={{ marginTop: 8, marginBottom: 16 }} />

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <UserInput title="Fremitus Taktil" titleWidth={6}>
              <FormSelect name="fremitusTaktil" form={form} items={fremitusTaktil} />
            </UserInput>
          </Grid>
          <Grid item xs={6}>
            <UserInput title="Hepar/Lien" titleWidth={6}>
              <FormSelect name="heparLien" form={form} items={heparLien} />
            </UserInput>
          </Grid>
        </Grid>

        <Typography gutterBottom style={{ marginTop: 32 }}>Perkusi</Typography>
        <Divider style={{ marginTop: 8, marginBottom: 16 }} />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <UserInput title="Batas Jantung" titleWidth={6}>
              <FormSelect name="batasJantung" form={form} items={batasJantung} />
            </UserInput>
          </Grid>
        </Grid>

        <Typography gutterBottom style={{ marginTop: 32 }}>Cor</Typography>
        <Divider style={{ marginTop: 8, marginBottom: 16 }} />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <UserInput title="Cor" titleWidth={6}>
              <FormSelect name="cor" form={form} items={cor} />
            </UserInput>
          </Grid>
          <Grid item xs={6}>
            <UserInput title="Pulmo" titleWidth={6}>
              <FormSelect name="pulmo" form={form} items={pulmo} />
            </UserInput>
          </Grid>
        </Grid>
      </UserInput>

      <Divider style={{ marginTop: 16, marginBottom: 16 }} />

      <UserInput title="Ekstremitas" alignTop style={{ marginTop: 16 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <UserInput title="Akral" titleWidth={6}>
              <FormSelect name="akral" form={form} items={akral} />
            </UserInput>
          </Grid>
          <Grid item xs={6}>
            <UserInput title="CRT" titleWidth={6}>
              <FormSelect name="crt" form={form} items={crt} />
            </UserInput>
          </Grid>
          <Grid item xs={6}>
            <UserInput title="Nadi" titleWidth={6}>
              <FormSelect name="kuatNadi" form={form} items={kuatNadi} />
            </UserInput>
          </Grid>
          <Grid item xs={6}>
            <UserInput title="Edema" titleWidth={6}>
              <FormText name="edema" form={form} />
            </UserInput>
          </Grid>
        </Grid>
      </UserInput>
    </Panel>
  );
};

const mapStateToProps = ({ userData }) => ({
  userData,
});

export default connect(mapStateToProps)(Fisik);
