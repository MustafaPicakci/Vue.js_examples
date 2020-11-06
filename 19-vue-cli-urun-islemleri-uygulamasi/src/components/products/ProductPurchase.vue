<template>
  <div class="container">
    <div class="row">
      <div class="col-6 offset-3 pt-3 card mt-5 shadow">
        <div class="card-body">
          <h3>Ürün İşlemleri</h3>
          <hr />
          <div class="form-group">
            <label>Ürün Adı</label>
            <input
              v-model="product.title"
              type="text"
              class="form-control"
              placeholder="Ürün adını giriniz.."
            />
          </div>
          <div class="form-group">
            <label>Adet</label>
            <input
              v-model="product.count"
              type="number"
              class="form-control"
              placeholder="Ürün adetini giriniz.."
            />
          </div>
          <div class="form-group">
            <label>Fiyat</label>
            <input
              v-model="product.price"
              type="number"
              class="form-control"
              placeholder="Ürün fiyatı giriniz.."
            />
          </div>
          <div class="form-group">
            <label>Açıklama</label>
            <textarea
              v-model="product.description"
              cols="30"
              rows="5"
              placeholder="Ürüne ait bir açıklama giriniz..."
              class="form-control"
            ></textarea>
          </div>
          <hr />
          <button
            @click="saveProduct"
            :disabled="saveEnabled"
            class="btn btn-primary"
          >
            Kaydet
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      product: {
        title: "",
        count: null,
        price: null,
        description: "",
      },
    };
  },
  methods: {
    saveProduct() {
      this.$store.dispatch("saveProduct", this.product);
    },
  },
  computed: {
    saveEnabled() {
      if (
        this.product.title.length > 0 &&
        this.product.count > 0 &&
        this.product.price > 0 &&
        this.product.description.length > 0
      ) {
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>
<style></style>
