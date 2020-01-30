import React from 'react';
import { Controller } from 'react-hook-form';
import { DateTimePicker } from '@material-ui/pickers';

const FormText = ({
  name, form, label,
}) => (
  <Controller
    as={(
      <DateTimePicker
        label={label}
        size="small"
        fullWidth
        inputVariant="outlined"
        autoOk
        ampm={false}
        format="Do MMMM YYYY, HH:mm"
      />
)}
    name={name}
    control={form.control}
  />
);

export default FormText;
