<template>
  <div class="container">
    <h3>User Detail Component</h3>
    <hr />
    <p>Kullanıcının id bilgisi : {{ $route.params.id }}</p>
    <router-link :to="navigationLink" class="btn btn-primary" tag="tag"
      >Kullanıcıyı düzenle</router-link
    >
  </div>
</template>
<script>
export default {
  data() {
    return {
      navigationLink: {
        name: "userEdit",
        params: { id: this.$route.params.id },
        query: { name: "Mustafa", lastName: "Pıçakçı" },
        hash: "#data",
      },
    };
  },
};
</script>
