import React from 'react';

// Components
import Panel from '../../Components/Panel';
import UserInput from '../../Components/UserInput';
import FormText from '../../Components/FormText';
import FormOption from '../../Components/FormOption';

export const defaultValues = {
  skrinningNyeri: '',
  timbulNyeri: '',
  pencetusNyeri: '',
  upayaNyeri: '',
  gambaranNyeri: '0',
  gambaranNyeriLain: '',
};

const Nyeri = ({ styles, form }) => {
  const gambaranNyeri = ['Ditusuk-tusuk Benda Tajam', 'Rasa Terbakar/Panas', 'Tertekan Benda Berat', {
    input: 'gambaranNyeriLain',
    label: 'Lain-lain',
  }];

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
        <FormOption name="gambaranNyeri" form={form} items={gambaranNyeri} cols={3} />
      </UserInput>
    </Panel>
  );
};

export default Nyeri;
