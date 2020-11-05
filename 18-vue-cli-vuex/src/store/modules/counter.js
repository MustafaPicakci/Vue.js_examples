const state = {
  counter: 0,
};
const getters = {
  getDoubleCounter(state) {
    return state.counter * 2;
  },
  stringCounter(state) {
    return state.counter + " . kez tıklandı.";
  },
};

const mutations = {
  increaseCounter(state, payload) {
    state.counter += payload;
  },
  decreaseCounter(state) {
    state.counter--;
  },
};

const actions = {
  increment({ commit },payload) {
    commit("increaseCounter",payload);
  },
  decrement({ commit }) {
    commit("decreaseCounter");
  },
  incAsync({ commit }, payload) {
    setTimeout(() => {
      commit("increaseCounter", 10);
    }, payload.time);
  },
};

export default {
  //state:state, bu şekilde tanımlamak yerine aşağıdaki gibi tanımlayabiliriz çünkü iki tarafında ismi ayı (js ES6 sayesinde bunu yapabiliyoruz)
  state,
  getters,
  mutations,
  actions
};
