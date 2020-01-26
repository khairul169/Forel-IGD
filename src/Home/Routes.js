import React from 'react';

// Routes
import Utama from './Utama';
import DaftarBaru from './DaftarBaru';

const routeList = [
  {
    title: 'Halaman Utama',
    path: '/',
    exact: true,
    content: <Utama />,
  },
  {
    title: 'Halaman Utama',
    path: '/utama',
    content: <Utama />,
  },
  {
    title: 'Pendaftaran Pasien Baru',
    path: '/daftar-baru',
    content: <DaftarBaru />,
  },
];

export default routeList;
