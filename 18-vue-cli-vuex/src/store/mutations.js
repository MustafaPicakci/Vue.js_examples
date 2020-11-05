/*export const setValue=function(){

} bu tanımlama ile aşağıdaki, aynı şeyi ifade ediyor.*/

export const setValue = (state, payload) => {
  state.value = payload;
};
export const setValue2 = (state, payload) => {
  state.value = payload;
};
