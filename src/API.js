import reduxStore from './Redux/Store';

const baseUrl = 'http://localhost:5000';

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
    const response = await post('/pasien_baru', data);
    return response;
  } catch (error) {
    return false;
  }
};

export default {
  login,
  register,
  getUser,
  pasienBaru,
};
