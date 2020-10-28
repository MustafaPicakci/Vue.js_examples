<template>
  <div class="container">
    <h1 class="text-center">Ürün Ekleme Uygulaması</h1>
    <hr />

    <appNewProduct></appNewProduct>

    <br /><br />
    <appProgress></appProgress>

    <br /><br />
    <h3 class="text-center">Eklenen Ürünlerin Listesi</h3>
    <hr />
    <appProducts></appProducts>
  </div>
</template>

<script>
import NewProduct from "./components/NewProduct";
import Progress from "./components/Progress";
import Products from "./components/Products";

export default {
  components: {
    appNewProduct: NewProduct,
    appProgress: Progress,
    appProducts: Products
  },
  data() {
    return {
      ProductList: [],
      product: {
        selectedImage: null,
      },
    };
  },
  methods: {
    onChange(e) {
      const file = e.target.files[0];
      this.product.selectedImage = URL.createObjectURL(file);
    },
  },
};
</script>

<style>
body {
  background-color: aliceblue;
  padding-top: 20px;
  padding-bottom: 20px;
}

.card {
  margin-right: 5px;
  margin-bottom: 5px;
}

.card:last-child {
  margin-right: 0px;
}

.col-md-2 {
  max-width: 15.666667% !important;
}

.product-container {
  margin-left: 15px;
}
</style>
