import { createStore } from "vuex";

export const store = createStore({
  state: {
    user: [],
    token: null,
    pathname: null,
  },
  mutations: {
    pathname(state, pathname) {
      state.pathname = pathname;
    },
    user(state, user) {
      state.user = user;
    },
    token(state, token) {
      state.token = token;
    },
  },
  actions: {
    user(context, user) {
      context.commit("user", user);
    },
    pathname(context, pathname) {
      context.commit("pathname", pathname);
    },
    token(context, token) {
      context.commit("token", token);
    },
  },
  modules: {},
  getters: {
    pathname: (state) => state.pathname,
    user: (state) => state.user,
    token: (state) => state.token,
  },
});
