<template>
  <div class="container">
    <router-view></router-view>
    <hr />
    <button class="btn btn-success" @click="navigateToHome">
      Home component
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  methods: {
    navigateToHome() {
      //this.$router.push("/")
      //this.$router.push({ path: "/" });
      this.$router.push({ name: "anasayfa" });
      //yukardakilerin hepsi aynı işlemi gerçekleştirir
    },
  },
  watch: {
    $route(to, from) {
      this.id = to.params.id;
    },
  },
};
</script>
