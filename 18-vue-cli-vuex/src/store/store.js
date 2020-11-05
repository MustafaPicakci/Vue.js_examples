import Vue from "vue";
import Vuex from "Vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0,
  },
  getters: {
    getDoubleCounter(state) {
      return state.counter * 2;
    },
    stringCounter(state) {
      return state.counter + " . kez tıklandı.";
    },
  },
  mutations: {
    increaseCounter(state, payload) {
      state.counter += payload;
    },
    decreaseCounter(state) {
      state.counter--;
    },
  },
  actions: {
    increment({ commit }) {
      commit("increaseCounter");
    },
    decrement({ commit }) {
      commit("decreaseCounter");
    },
    incAsync({ commit }, payload) {
      setTimeout(() => {
        commit("increaseCounter",10);
      }, payload.time);
    },
  },
});
