import React from 'react';
import { Controller } from 'react-hook-form';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

const FormOption = ({ name, form, items }) => (
  <Controller as={<RadioGroup row />} name={name} control={form.control}>
    {items.map((item, index) => (
      <FormControlLabel
        key={index}
        value={index.toString()}
        control={<Radio color="primary" />}
        label={item}
        labelPlacement="end"
      />
    ))}
  </Controller>
);

export default FormOption;
