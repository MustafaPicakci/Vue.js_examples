<template>
  <div>
    <input type="text " v-model="searchText" />
    <ul>
      <li v-for="product in filtered" :key="product">
        {{ product }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Selam Bu bir deneme | bunuduzenle.com",
      products: ["Monitör", "Klavye", "Masa", "Kitap", "Şişe", "Hard disk"],
      searchText: "",
    };
  },
  filters: {
    toUpperCase(value) {
      return value.toUpperCase(); // bu javascripteki fonksiyon...
    },
  },
  computed: {
    filtered() {
      return this.products.filter((element) => {
        return element.match(this.searchText);
      });
    },
  },
};
</script>

<style></style>
