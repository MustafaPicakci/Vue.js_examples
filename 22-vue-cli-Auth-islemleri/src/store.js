import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    token: "",
    fbAPIKey: "AIzaSyB_8ehOBlPkjNqqTrzO_JudHRnpJsdzW2k",
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    clearToken(state) {
      state.token = "";
    },
  },
  actions: {
    login({ commit, dispatch, state, authData }) {},
    logout({ commit, dispatch, state, authData }) {},
  },
  getters: {},
});

export default store;
