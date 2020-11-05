<template>
  <div>
    <p class="counter-container">Sayaç : {{ double }}</p>
    <p class="counter-container">Tıklama sayısı : {{ stringC }}</p>
    <input type="text" v-model="value" />
    <p>{{ value }}</p>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  // props: ["counter"],
  // computed: mapGetters(["getDoubleCounter", "stringCounter"]), //computed içindeki değişken isimlerini farklı isimlerle değiştirip kullanmak istersek
  //mapGetters'ın dizi değil obje parameter almasını sağlıyoruz.(aşağıdaki gibi)
  /*computed: mapGetters({
    double: "getDoubleCounter",
    stringC: "stringCounter",
  }),*/

  //eğer mapgetters ile eriştiğimiz storedaki getterslar dışında, bu componentte computed properties kullanmak istersek ikisin anyı anda
  //kullanabilmek için '...mapgetters'şeklinde kullanmalıyız. Bu , mapgetters ile getterdaki fonksiyonları al ve buraya kopyala anlamına geliyor
  // ve biz de devamına kendi computed propertyleri ekleyebiliyoruz.(örnek kullanım aşağıdadır)
  computed: {
    ...mapGetters({
      double: "getDoubleCounter",
      stringC: "stringCounter",
    }),
    //bu computed propertieslerin farklı bir kulanımı. value'yu methods yerine object olarak tanımladık ve get,set islemlerini ayırabildik.
    value: {
      get() {
        return this.$store.getters.getValue;
      },
      set(value) {
        this.$store.dispatch("setValueData", value);
      },
    },
  },
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
