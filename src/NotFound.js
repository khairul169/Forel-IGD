import React from 'react';
import Typography from '@material-ui/core/Typography';

const NotFound = () => (
  <div style={{ flex: 1 }}>
    <div style={{ padding: 32, paddingBottom: 16, background: '#eee' }}>
      <Typography variant="h5" component="h1">404 Not Found</Typography>

    </div>
    <Typography style={{ margin: '16px 32px' }}>Halaman tidak ditemukan.</Typography>
  </div>
);

export default NotFound;
