<template>
  <div class="container">
    <app-header></app-header>
    <hr>
    <div class="row">
      <app-servers></app-servers>
      <app-server-details></app-server-details>
    </div>
    <hr>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/common/Header"
import Footer from "./components/common/Footer"
import Servers from "./components/server/Servers"
import ServerDetails from "./components/server/ServerDetails"
export default{
  components:{
    "app-header":Header,
    "app-footer":Footer,
    "app-servers":Servers,
    "app-server-details":ServerDetails,
  }
}
</script>

<style>

</style>
