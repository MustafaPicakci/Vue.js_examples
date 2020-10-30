<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Filter ve Mixins</h3>
        <p>{{ message | toUpperCase | toLowerCase }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Selam Bu bir deneme | bunuduzenle.com",
    };
  },
  filters: {
    toUpperCase(value) {
      return value.toUpperCase(); // bu javascripteki fonksiyon...
    },
  },
};
</script>

<style></style>
