<template>
  <div class="col-md-s6">
    <h3>Child Component 2</h3>
    <p>
      Ben User.vue isimli Parent Component'in içerisindeki bir diğer Child
      componentim
    </p>
    <p>kullanıcı yaşı : {{ age }}</p>
    <button @click="changeAge">yaş bilgisini değiştir</button>
  </div>
</template>
<script>
import {eventBus} from "../main";

export default {
  props: ["age"],
  methods: {
    changeAge() {
      this.age = 49;    
      eventBus.changeAge(this.age)
    },
  },
};
</script>

<style scoped>
div {
  background-color: lightgoldenrodyellow;
  padding: 20px;
  border: 1px solid #666;
  display: inline-block;
}
</style>
