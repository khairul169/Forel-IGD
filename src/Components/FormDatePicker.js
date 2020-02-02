import React from 'react';
import { Controller } from 'react-hook-form';
import { DatePicker, DateTimePicker } from '@material-ui/pickers';

const FormText = ({
  name, form, label, dateOnly,
}) => {
  const Component = dateOnly ? DatePicker : DateTimePicker;
  return (
    <Controller
      as={(
        <Component
          label={label}
          size="small"
          fullWidth
          inputVariant="outlined"
          autoOk
          ampm={false}
          format={dateOnly ? 'Do MMMM YYYY' : 'Do MMMM YYYY, HH:mm'}
        />
  )}
      name={name}
      control={form.control}
    />
  );
};

export default FormText;
