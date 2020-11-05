const state = {
  products: [],
};
const getters = {
  getProducts(state) {
    return state.products;
  },
  getProduct(state) {},
};
const mutations = {
  updateProductList(state, product) {
    state.products.push(product);
  },
};
const actions = {
  initApp({ commit }) {
    //vueResource işlemleri
  },
  saveProduct({ commit }, payload) {
    //vueResource işlemleri
  },
  SellProduct({ commit }, payload) {
    //vueResource işlemleri
  },
};
export default {
  state,
  getters,
  mutations,
  actions,
};
