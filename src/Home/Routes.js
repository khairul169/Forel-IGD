// Routes
import Utama from './Utama';
import Pendaftaran from './Pendaftaran';
import PasienLama from './PasienLama';
import PasienPonek from './PasienPonek';
import PasienNonPonek from './PasienNonPonek';
import Pengkajian from './Pengkajian';
import RingkasanKeluar from './RingkasanKeluar';

const routeList = [
  {
    title: 'Halaman Utama',
    path: '/',
    content: Utama,
    exact: true,
  },
  {
    title: 'Halaman Utama',
    path: '/utama',
    content: Utama,
  },
  {
    title: 'Pendaftaran Pasien Baru',
    path: '/daftar',
    content: Pendaftaran,
    exact: true,
  },
  {
    title: 'Pendaftaran Pasien Lama',
    path: '/pasien-lama',
    content: PasienLama,
    exact: true,
  },
  {
    title: 'Pendaftaran Pasien Lama',
    path: '/daftar/:id',
    content: Pendaftaran,
    exact: true,
  },
  {
    title: 'Pendaftaran Ponek',
    path: '/pasien-ponek',
    content: PasienPonek,
  },
  {
    title: 'Pendaftaran Non Ponek',
    path: '/pasien-non-ponek',
    content: PasienNonPonek,
  },
  {
    title: 'Pemeriksaan Dokter',
    path: '/pengkajian',
    content: Pengkajian,
    exact: true,
  },
  {
    title: 'Pemeriksaan Dokter',
    path: '/pengkajian/:id',
    content: Pengkajian,
  },
  {
    title: 'Pemeriksaan Dokter',
    path: '/ringkasan-keluar',
    content: RingkasanKeluar,
    exact: true,
  },
  {
    title: 'Pemeriksaan Dokter',
    path: '/ringkasan-keluar/:id',
    content: RingkasanKeluar,
  },
];

export default routeList;
