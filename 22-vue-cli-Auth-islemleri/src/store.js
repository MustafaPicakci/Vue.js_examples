import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { router } from "./router";

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
    clearToken(state, token) {
      state.token = "";
    },
  },
  actions: {
    initAuth({ dispatch, commit }) {
      let token = localStorage.getItem("token");
      if (token) {
        commit("setToken", token);
        router.push("/");
      } else {
        return false;
      }
    },
    login({ commit, dispatch, state }, authData) {
      let authLink =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
      if (authData.isUser) {
        authLink =
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
      }

      return axios
        .post(authLink + "AIzaSyB_8ehOBlPkjNqqTrzO_JudHRnpJsdzW2k", {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true,
        })
        .then((response) => {
          console.log(response);
          commit("setToken", response.data.idToken);
          localStorage.setItem("token", response.data.idToken);

          dispatch("setTimeoutTimer", +response.data.expiresIn); //+ int'e dönüştürme işlemi yapıyor (parse gibi)
        });
    },
    logout({ commit }) {
      commit("clearToken");
      localStorage.removeItem("token");
      router.replace("/auth");
    },
    setTimeoutTimer({ dispatch }, expiresIn) {
      setTimeout(() => {
        dispatch("logout");
      }, expiresIn);
    },
  },
  getters: {
    isAuthenticated(state) {
      return state.token !== "";
    },
  },
});

export default store;
