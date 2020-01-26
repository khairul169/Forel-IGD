const setAuthToken = (payload) => ({
  type: 'SET_AUTH_TOKEN',
  payload,
});

const setUserData = (payload) => ({
  type: 'SET_USER_DATA',
  payload,
});

export default {
  setAuthToken,
  setUserData,
};
