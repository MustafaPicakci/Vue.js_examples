<template>
  <div class="wcol-md-6">
    <h3>Child Component 1</h3>
    <p>
      Ben User.vue isimli Parent Component'in içerisindeki bir Child componentim
    </p>
    <p>kullanıcı adı : {{ name }}</p>
    <p>kullanıcı adı : {{ switchName() }}</p>
    <p>kullacını yaşı: {{ age }}</p>
    <button @click="sendToParent()">Veriyi parent componenete gönder</button>
  </div>
</template>

<script>
import {eventBus} from "../main";

export default {
  //props:["name"]
  //props validation uygulanacaksa aşağıdaki gibi kullanılır.
  props: {
    name: {
      type: String,
      default: " default isim",
    },
    age: Number,
  },
  created() {
    eventBus.$on("ageWasEdited", (age)=> {
      this.age = age;
    });
  },
  methods: {
    switchName() {
      return this.name
        .split("")
        .reverse()
        .join("");
    },
    sendToParent() {
      this.$emit("data", "Mahmut Tuncer");
    },
  },
};
</script>

<style scoped>
div {
  background-color: lightcoral;
  padding: 20px;
  border: 1px solid #666;
  display: inline-block;
}
</style>
