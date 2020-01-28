import React from 'react';

// Components
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const UserInput = ({
  children, title, alignTop, style, titleWidth = 3,
}) => (
  <Grid container spacing={2} alignItems={alignTop ? 'flex-start' : 'center'} style={style}>
    <Grid item xs={12} md={titleWidth} component={Typography} variant="subtitle2">
      {title}
    </Grid>
    <Grid item xs={12} md={12 - titleWidth}>
      {children}
    </Grid>
  </Grid>
);

export default UserInput;
