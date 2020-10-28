<template>
  <div class="row product-container">
    <appProduct v-for="product in productList" :key="product">
      <img
        class="card-img-top"
        src="/src/assets/default.png"
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <small> <strong>Adet : </strong> 1 </small>
        <br />
        <small> <strong>Fiyat : </strong> 10 </small>
        <br />
        <small> <strong>Tutar : </strong> 10 </small>
      </div>
    </appProduct>
  </div>
</template>

<script>
import Product from "./Product";
import { eventBus } from "../main";

export default {
  data() {
    return {
      productList: [],
    };
  },
  components: {
    appProduct: Product,
  },
  created() {
    eventBus.$on("productAdded", (product) => {
      this.productList.push(product);
    });
  },
};
</script>
