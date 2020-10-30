<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Filter ve Mixins</h3>
        <p>{{ message | toUpperCase | toLowerCase }}</p>

        <!-- eklenen ürün sadece eklendiği mixindeki datayı etkiler. 
            iki mixin de productMixin.js'den geliyor olsa da vue mixinleri oluşturduğunda
            yeni bir kopyasını kullanır.
        -->
        <button class="btn btn-primary" @click="products.push('Kamyon')">
          Ürün ekle
        </button>
        <input type="text " v-model="searchText" />
        <ul>
          <li v-for="product in filtered" :key="product">
            {{ product }}
          </li>
        </ul>
        <app-list></app-list>
      </div>
    </div>
  </div>
</template>

<script>
import FilterList from "./FilterList";
import { productMixin } from "./productMixin";

export default {
  components: {
    "app-list": FilterList,
  },
  mixins: [productMixin],
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
