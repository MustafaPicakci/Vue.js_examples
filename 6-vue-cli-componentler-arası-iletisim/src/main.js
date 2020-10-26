import Vue from "vue";
import App from "./App.vue";

export const eventBus = new Vue({
  //bu bir single file template olmadığı için data fonksiyon olarak değil obje olarak tanımlandı
  data: {

  },
  methods: {
    changeAge(age) {
      this.$emit("ageWasEdited", age);
    },
  },
});

new Vue({
  el: "#app",
  render: (h) => h(App),
});
