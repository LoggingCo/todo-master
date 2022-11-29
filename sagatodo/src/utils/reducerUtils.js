export const reducerUtils = {
  loading(state) {
    state.loading = true;
    state.done = false;
    state.err = null;
  },
  success(state) {
    state.loading = false;
    state.done = true;
  },
  error(state, payload) {
    state.loading = false;
    state.done = true;
    state.err = payload;
  },
};
