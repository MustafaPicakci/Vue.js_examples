import Vue from "vue";
import { router } from "../../router";

const state = {
  products: [],
};
const getters = {
  getProducts(state) {
    return state.products;
  },
  getProduct(state) {
    //getter'a parametre olarak gönderilen keyi aşağıdaki şekilde almamız gerekiyor
    //products.filter, products içindeki verileri dönüyor ve bizim gönderdiğimiz key ile eşleşeni return ediyoruz.
    return (key) =>
      state.products.filter((element) => {
        return element.key == key;
      });
  },
};
const mutations = {
  updateProductList(state, product) {
    state.products.push(product);
  },
};
const actions = {
  initApp({ commit }) {
    //vueResource işlemleri
    Vue.http
      .get("https://urun-islemleri-3f110.firebaseio.com/products.json")
      .then((response) => {
        let data = response.body;
        for (let key in data) {
          data[key].key = key;
          commit("updateProductList", data[key]);
        }
      });
  },
  saveProduct({ dispatch, commit, state }, product) {
    //templatenin içinde olmadığımız için bu şekilde kullanmadık : '$http'
    Vue.http
      .post(
        "https://urun-islemleri-3f110.firebaseio.com/products.json",
        product
      )
      .then((response) => {
        /********Ürün listesinin güncellenemsi *************/
        product.key = response.body.name;
        commit("updateProductList", product);
        /*******alış satış bakiye bilgilerinin güncellenmesi ********/

        let tradeResult = {
          purchase: product.price,
          sale: 0,
          count: product.count,
        };

        dispatch("setTradeResult", tradeResult);
        router.replace("/");
      });
  },
  sellProduct({ state, commit,dispatch }, payload) {
    //vueResource işlemleri
    //istediğimiz kaydın countunu güncellemek için patch kullandık

    let product = state.products.filter((element) => {
      return element.key == payload.key;
    });

    if (product) {
      let totalCount = product[0].count - payload.count;

      Vue.http
        .patch(
          "https://urun-islemleri-3f110.firebaseio.com/products/" +
            payload.key +
            ".json",
          { count: totalCount }
        )
        .then((response) => {
          product[0].count = totalCount;


          
        let tradeResult = {
          purchase:0,
          sale: product[0].price,
          count: payload.count,
        };

        dispatch("setTradeResult", tradeResult);
        router.replace("/");
        });
    }
  },
};
export default {
  state,
  getters,
  mutations,
  actions,
};
