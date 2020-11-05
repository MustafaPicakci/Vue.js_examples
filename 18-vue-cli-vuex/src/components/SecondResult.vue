<template>
  <div>
    <p class="counter-container">Sayaç : {{ getDoubleCounter }}</p>
    <p class="counter-container">Tıklama sayısı : {{ stringCounter }}</p>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  // props: ["counter"],
  computed: mapGetters(["getDoubleCounter", "stringCounter"]), //computed içindeki değişken isimlerini farklı isimlerle değiştirip kullanmak istersek
  //mapGetters'ın dizi değil obje parameter almasını sağlıyoruz.(aşağıdaki gibi)
  /*computed: mapGetters({
    double: "getDoubleCounter",
    stringC: "stringCounter",
  }),*/
};
</script>
<style scoped>
.counter-container {
  border: 1px solid #aa7f08;
  padding: 10px 5px;
  background-color: #fbbd08;
  font-size: 20px;
  color: #000;
}
</style>
