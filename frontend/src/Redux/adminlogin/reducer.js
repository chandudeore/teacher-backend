import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOG_OUT } from "./action";

const initialState = {
  loading: false,
  error: false,
  isAuthenticated: false,
  token: "",
  username: "",
};

export const adminReducer = (store = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING:
      return { ...store, loading: true, error: false };
    case LOGIN_SUCCESS:
      return {
        ...store,
        loading: false,
        error: false,
        isAuthenticated: true,
        token: payload.token,
        username: payload.username,
      };
    case LOGIN_ERROR:
      return { ...store, loading: false, error: false, isAuthenticated: false };
    case LOG_OUT:
      return {
        ...store,
        loading: false,
        error: false,
        isAuthenticated: false,
        token: "",
      };
    default:
      return store;
  }
};
