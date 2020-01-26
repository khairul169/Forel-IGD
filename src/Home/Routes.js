import React from 'react';

// Routes
import Utama from './Utama';

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
];

export default routeList;
