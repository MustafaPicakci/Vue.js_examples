<template>
  <div class="container">
    <h3>User Edit Component</h3>
    <hr />
    <p>ad : {{ $route.query.name }}</p>
    <p>soyad : {{ $route.query.lastName }}</p>
    <button @click="saved = true" class="btn btn-primary">Onayla</button>
    <div style="height:800px"></div>
    <p id="data">bazı bilgiler...</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      saved: false,
    };
  },
  beforeRouteLeave(to, from, next) {
    if (this.saved) {
      next();
    } else {
      if (confirm("tüm bilgileriniz kaybolacak, emin misiniz?")) {
        next(); //componentten ayrılabilecek
      } else {
        next(false); //componentten ayrılamayacak
      }
    }
  },
};
</script>
