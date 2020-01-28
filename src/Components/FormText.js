import React from 'react';
import { Controller } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';

const FormText = ({ name, form, multiline }) => (
  <Controller
    as={(
      <TextField
        fullWidth
        size="small"
        variant="outlined"
        multiline={multiline}
        rows={multiline ? 3 : undefined}
      />
)}
    name={name}
    control={form.control}
  />
);

export default FormText;
