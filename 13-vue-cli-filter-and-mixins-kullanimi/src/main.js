import Vue from "vue";
import App from "./App.vue";

Vue.filter("toLowerCase", (value) => {
  return value.toLowerCase();
});


Vue.mixin({
  created(){
    console.log("global mixin oluşturuldu");
  }
})

new Vue({
  el: "#app",
  render: (h) => h(App),
});
