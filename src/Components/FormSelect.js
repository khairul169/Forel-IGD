import React from 'react';
import { Controller } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const FormSelect = ({
  name, form, label, items, style,
}) => (
  <Controller
    as={(
      <TextField
        fullWidth
        size="small"
        variant="outlined"
        select
        label={label}
        style={style}
      />
)}
    name={name}
    control={form.control}
  >
    {items.map((item, index) => (
      <MenuItem key={index} value={index.toString()}>
        {item}
      </MenuItem>
    ))}
  </Controller>
);

export default FormSelect;
