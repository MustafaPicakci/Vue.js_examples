import Vuex from "vuex";
import Vue from "vue";
import product from "./modules/product";

Vue.use(Vuex);

export const store=new Vuex({
    state:{},
    modules:{
        product
    }
})