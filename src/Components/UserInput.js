import React from 'react';

// Components
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const UserInput = ({ children, title }) => (
  <Grid container spacing={2}>
    <Grid item xs={3}>
      <Typography>{title}</Typography>
    </Grid>
    <Grid item xs={9}>
      {children}
    </Grid>
  </Grid>
);

export default UserInput;
