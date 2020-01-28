import React from 'react';
import { Controller } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

const FormText = ({
  name, form, multiline, suffix, label, style,
}) => (
  <Controller
    as={(
      <TextField
        fullWidth
        size="small"
        variant="outlined"
        label={label}
        multiline={multiline}
        rows={multiline ? 3 : undefined}
        InputProps={suffix && {
          endAdornment: <InputAdornment position="end">{suffix}</InputAdornment>,
        }}
        style={style}
      />
)}
    name={name}
    control={form.control}
  />
);

export default FormText;
