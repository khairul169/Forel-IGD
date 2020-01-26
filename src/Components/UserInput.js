import React from 'react';

// Components
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const UserInput = ({ children, title, titleStyle }) => (
  <Grid container spacing={2}>
    <Grid item xs={3} component={Typography} style={titleStyle}>
      {title}
    </Grid>
    <Grid item xs={9}>
      {children}
    </Grid>
  </Grid>
);

export default UserInput;
