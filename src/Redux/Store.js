import { createStore } from 'redux';

const initialState = {
  authToken: null,
  userData: null,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_AUTH_TOKEN':
      return { ...state, authToken: payload };
    case 'SET_USER_DATA':
      return { ...state, userData: payload };
    default:
      return state;
  }
};

export default createStore(reducer);
