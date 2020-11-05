<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>
<script>
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import ProductPurchase from "./components/products/ProductPurchase";
import ProductSell from "./components/products/ProductSell";
import ProductList from "./components/products/ProductList";

export default {
  components: {
    appHeader: Header,
    appFooter: Footer,
  }
};
</script>
<style></style>
