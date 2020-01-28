import React from 'react';
import { Controller } from 'react-hook-form';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import FormText from './FormText';

const RadioContainer = ({
  form, value, items, onChange, cols = 4,
}) => (
  <Grid container spacing={1}>
    {items.map((item, index) => (
      <Grid
        key={index}
        container
        item
        xs={cols ? ((12 / cols) * 2) : 6}
        lg={cols ? (12 / cols) : 3}
      >
        <Grid item xs>
          <FormControlLabel
            checked={value === index.toString()}
            control={<Radio color="primary" />}
            label={typeof item === 'object' ? item.label : item}
            labelPlacement="end"
            value={index.toString()}
            onChange={onChange}
          />
        </Grid>

        {typeof item === 'object' && item.input && (
          <Grid item xs>
            <FormText name={item.input} form={form} />
          </Grid>
        )}
      </Grid>
    ))}
  </Grid>
);

const FormOption = ({
  name, form, items, cols,
}) => (
  <Controller
    as={<RadioContainer form={form} items={items} cols={cols} />}
    name={name}
    control={form.control}
  />
);

export default FormOption;
