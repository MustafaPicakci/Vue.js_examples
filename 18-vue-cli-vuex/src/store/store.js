import Vue from "vue";
import Vuex from "Vuex";
import counter from "./modules/counter";
import * as mutations from "./mutations"; /*dosyadakilerin hepsini mutations ismi ile getir. bu şekilmde import ettiğimiz içinmutations'ın veri tipi object olur.*/
import * as getters from "./getters";
import * as actions from "./actions";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    value: 0,
  },
  getters: getters,
  mutations: mutations, //iki tarafında adı aynı olduğu için ':mutations' kısmını istersek kullanmayabiliriz. 'ES6' bizim yerimize sağ tarafı dolduruyor
  actions: actions,
  modules: {
    counter: counter,
  }
});
