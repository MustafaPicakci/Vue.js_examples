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
  saveProduct({ commit }, payload) {
    //templatenin içinde olmadığımız için bu şekilde kullanmadık : '$http'
    Vue.http.post("https://urun-islemleri-3f110.firebaseio.com/products.json",payload).then((response)=>{
    console.log(response)
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
