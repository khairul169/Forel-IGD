import React from 'react';

// Routes
import Utama from './Utama';
import DaftarBaru from './DaftarBaru';
import DaftarLama from './DaftarLama';
import Pengkajian from './Pengkajian';

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
  {
    title: 'Pendaftaran Pasien Lama',
    path: '/daftar-lama',
    content: <DaftarLama />,
  },
  {
    title: 'Pemeriksaan Dokter',
    path: '/pengkajian',
    content: <Pengkajian />,
  },
];

export default routeList;
