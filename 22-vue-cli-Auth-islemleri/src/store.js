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
        let expirationDate = localStorage.getItem("expirationDate");
        let time = new Date().getTime(); //ms cinsinden şu anki zaman

        if (time >= expirationDate) {
          console.log("token süresi geçmiş");
          dispatch("logout");
        } else {
          commit("setToken", token);
          let timerSecond = +expirationDate - time;
          console.log(timerSecond);
          dispatch("setTimeoutTimer", timerSecond);
          router.push("/");
        }
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
          localStorage.setItem("expirationDate",new Date().getTime() + +response.data.expiresIn *1000);
          //localStorage.setItem("expirationDate", new Date().getTime() + 10000);

           dispatch("setTimeoutTimer", +response.data.expiresIn); //+ int'e dönüştürme işlemi yapıyor (parse gibi)
          //dispatch("setTimeoutTimer", 10000);
        });
    },
    logout({ commit }) {
      commit("clearToken");
      localStorage.removeItem("token");
      localStorage.removeItem("expirationDate");
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
