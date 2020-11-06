/*export const updateTradeResult = (state, payload) => {
  console.log(state)
  state.purchase += payload.purchcase * payload.count;
  console.log(state.purchase);
  state.sale += parseFloat(payload.sale) * parseInt(payload.count);
  state.balance = parseFloat(state.sale) - parseFloat(state.purchase);
}*/

export const updateTradeResult = (state, payload) => {
  if (payload.count) {
    state.purchase += parseFloat(payload.purchase) * parseInt(payload.count);
    state.sale += parseFloat(payload.sale) * parseInt(payload.count);
  } else {
    state.purchase += parseFloat(payload.purchase);
    state.sale += parseFloat(payload.sale);
  }
  state.balance = parseFloat(state.sale) - parseFloat(state.purchase);
};
