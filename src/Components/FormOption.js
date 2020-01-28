import React from 'react';
import { Controller } from 'react-hook-form';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

const RadioContainer = ({
  value, items, onChange, cols = 4,
}) => (
  <Grid container spacing={1}>
    {items.map((item, index) => (
      <Grid key={index} item xs={12} md={cols ? ((12 / cols) * 2) : 6} lg={cols ? (12 / cols) : 3}>
        <FormControlLabel
          checked={value === index.toString()}
          control={<Radio color="primary" />}
          label={item}
          labelPlacement="end"
          value={index.toString()}
          onChange={onChange}
        />
      </Grid>
    ))}
  </Grid>
);

const FormOption = ({
  name, form, items, cols,
}) => (
  <Controller
    as={<RadioContainer items={items} cols={cols} />}
    name={name}
    control={form.control}
  />
);

export default FormOption;
