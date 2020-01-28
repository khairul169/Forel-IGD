import React from 'react';

// Components
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const UserInput = ({ children, title, titleStyle }) => (
  <Grid container spacing={2}>
    <Grid item xs={12} md={3} component={Typography} style={titleStyle} variant="subtitle2">
      {title}
    </Grid>
    <Grid item xs={12} md={9}>
      {children}
    </Grid>
  </Grid>
);

export default UserInput;
