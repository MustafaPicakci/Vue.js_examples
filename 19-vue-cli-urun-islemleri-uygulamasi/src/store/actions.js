import Vue from "vue";

export const setTradeResult = ({ state, commit }, tradeResult) => {
  commit("updateTradeResult", tradeResult);
  let tradeData = {
    purchase: state.purchase,
    sale: state.sale,
  };
  console.log("as");
  Vue.http
    .put(
      "https://urun-islemleri-3f110.firebaseio.com/trade-result.json",
      tradeData
    )
    .then((response) => {
      console.log(response);
      console.log(state.purchase)
    });
};
export const getTradeResult = ({ commit }) => {};
