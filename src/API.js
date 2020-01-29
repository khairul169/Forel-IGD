import reduxStore from './Redux/Store';

// const baseUrl = 'http://localhost:5000';
const baseUrl = 'http://khairul.my.id/forel_igd';

const get = async (endpoint) => {
  try {
    const state = reduxStore.getState();
    const response = await fetch(baseUrl + endpoint, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${state.authToken}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    return false;
  }
};

const post = async (endpoint, data) => {
  try {
    const state = reduxStore.getState();
    const response = await fetch(baseUrl + endpoint, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${state.authToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    return false;
  }
};

const login = async (userId, pin) => {
  try {
    const { result } = await post('/login', { userId, pin });
    return result.token;
  } catch (error) {
    return false;
  }
};

const register = async (data) => {
  try {
    const { result } = await post('/register', data);
    return result.token;
  } catch (error) {
    return false;
  }
};

const getUser = async () => {
  const user = await get('/user');
  return user;
};

const pasienBaru = async (data) => {
  try {
    return await post('/pasien_baru', data);
  } catch (error) {
    return false;
  }
};

const getPendaftaranById = async (id) => {
  try {
    const { result } = await get(`/pendaftaran/${id}`);
    return result;
  } catch (error) {
    return false;
  }
};

const findPendaftaran = async (query) => {
  try {
    return await post('/pendaftaran', query);
  } catch (error) {
    return false;
  }
};

const getPengkajian = async (id) => {
  try {
    const { result } = await get(`/pengkajian/${id}`);
    return result;
  } catch (error) {
    return false;
  }
};

const setPengkajian = async (id, data) => {
  try {
    return await post('/pengkajian', { id, data });
  } catch (error) {
    return false;
  }
};

const getRingkasan = async (id) => {
  try {
    const { result } = await get(`/ringkasan/${id}`);
    return result;
  } catch (error) {
    return false;
  }
};

const setRingkasan = async (id, data) => {
  try {
    return await post('/ringkasan', { id, data });
  } catch (error) {
    return false;
  }
};

const getTindakLanjut = async (id) => {
  try {
    const { result } = await get(`/rtl/${id}`);
    return result;
  } catch (error) {
    return false;
  }
};

const setTindakLanjut = async (id, data) => {
  try {
    return await post('/rtl', { id, data });
  } catch (error) {
    return false;
  }
};

export default {
  login,
  register,
  getUser,
  pasienBaru,
  getPendaftaranById,
  findPendaftaran,
  getPengkajian,
  setPengkajian,
  getRingkasan,
  setRingkasan,
  getTindakLanjut,
  setTindakLanjut,
};
