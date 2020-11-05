import Vue from "vue"

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
  saveProduct({ commit,state }, product) {
    //templatenin içinde olmadığımız için bu şekilde kullanmadık : '$http'
    Vue.http.post("https://urun-islemleri-3f110.firebaseio.com/products.json",product)
    .then((response)=>{
      product.key=response.body.name;
      commit("updateProductList",product)
      console.log(state.product)
    })
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
