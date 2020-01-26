import React from 'react';
import Typography from '@material-ui/core/Typography';

const NotFound = () => (
  <div style={{ flex: 1, marginTop: 16, marginLeft: 16 }}>
    <Typography variant="h4" component="h1" gutterBottom>404 Not Found</Typography>
    <Typography>Halaman tidak ditemukan.</Typography>
  </div>
);

export default NotFound;
