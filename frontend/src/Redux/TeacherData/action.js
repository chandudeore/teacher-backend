export const SHOW_LOADING = "SHOW_LOADING";
export const SHOW_DATA = "SHOW_DATA";
export const SHOW_ERROR = "SHOW_ERROR";

export const showLoading = () => ({
  type: SHOW_LOADING,
});

export const showData = (payload) => ({
  type: SHOW_DATA,
  payload,
});

export const showError = () => ({
  type: SHOW_ERROR,
});
