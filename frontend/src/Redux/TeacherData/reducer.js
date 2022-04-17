import { SHOW_DATA, SHOW_ERROR, SHOW_LOADING } from "./action";

const initialState = {
  loading: false,
  error: false,
  teachData: [],
};

export const teacherDataReducer = (store = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_LOADING:
      return { ...store, loading: true, error: false };
    case SHOW_DATA:
      return { ...store, teachData: [...payload], loading: false };
    case SHOW_ERROR:
      return { ...store, loading: false, error: true, teachData: [] };
    default:
      return store;
  }
};
