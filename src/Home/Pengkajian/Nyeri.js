import React from 'react';

// Components
import Grid from '@material-ui/core/Grid';
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

const Nyeri = ({ styles, form }) => {
  const gambaranNyeri = ['Ditusuk-tusuk Benda Tajam', 'Rasa Terbakar/Panas', 'Tertekan Benda Berat', 'Lain-lain'];

  return (
    <Panel title="III. Nyeri" className={styles.section}>
      <UserInput title="Skrinning Nyeri">
        <FormText name="skrinningNyeri" form={form} />
      </UserInput>

      <UserInput title="Kapan Mulai Timbul Nyeri">
        <FormText name="timbulNyeri" form={form} />
      </UserInput>

      <UserInput title="Faktor Pencetus/Memperberat Nyeri">
        <FormText name="pencetusNyeri" form={form} />
      </UserInput>

      <UserInput title="Upaya/Tindakan Yang Dilakukan Untuk Mengurangi Nyeri">
        <FormText name="upayaNyeri" form={form} />
      </UserInput>

      <UserInput title="Gambaran Nyeri Yang Dirasakan">
        <FormOption name="gambaranNyeri" form={form} items={gambaranNyeri} />
      </UserInput>
    </Panel>
  );
};

export default Nyeri;
