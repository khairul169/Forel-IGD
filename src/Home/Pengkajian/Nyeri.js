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
  penyebaranNyeri: '0',
  menyebarKe: '',
  skalaNyeri: '0',
  nyeriNips: '',
  nyeriBps: '',
  nyeriNrs: '',
  nyeriWongBaker: '',
  nyeriFlacc: '',
};

const Nyeri = ({ styles, form }) => {
  const gambaranNyeri = ['Ditusuk-tusuk Benda Tajam', 'Rasa Terbakar/Panas', 'Tertekan Benda Berat', {
    input: 'gambaranNyeriLain',
    label: 'Lain-lain',
  }];
  const penyebaranNyeri = ['Di Satu Lokasi Tertentu', {
    input: 'menyebarKe',
    label: 'Menyebar Ke',
  }];
  const skalaNyeri = [{
    input: 'nyeriNips',
    label: 'NIPS',
  },
  {
    input: 'nyeriBps',
    label: 'BPS',
  },
  {
    input: 'nyeriNrs',
    label: 'NRS',
  },
  {
    input: 'nyeriWongBaker',
    label: 'Wong Baker Faces',
  },
  {
    input: 'nyeriFlacc',
    label: 'FLACC',
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

      <UserInput title="Penyebaran Nyeri">
        <FormOption name="penyebaranNyeri" form={form} items={penyebaranNyeri} cols={2} />
      </UserInput>

      <UserInput title="Skala Nyeri">
        <FormOption name="skalaNyeri" form={form} items={skalaNyeri} cols={2} />
      </UserInput>
    </Panel>
  );
};

export default Nyeri;
