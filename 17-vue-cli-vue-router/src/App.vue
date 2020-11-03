<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <br />

        <hr />
        <router-view name="header-top"></router-view>
        <router-view></router-view>
        <router-view name="header-bottom"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  components: {
    appHeader: Header,
  },
};
</script>

<style></style>
