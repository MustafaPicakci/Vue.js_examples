<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow mb-5">
    <a class="navbar-brand" href="#">Auth İşlemleri</a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" tag="li">
          <a class="nav-link" href="#">Anasayfa</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Hakkımda</a>
        </li>
      </ul>
      <ul class="navbar-nav my-2 my-lg-0" :class="logoutClass">
        <li class="nav-item">
          <a @click.prevent="logout" class="nav-link" href="#">Çıkış Yap</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
  export default {
    methods: {
      logout() {
      }
    },
    computed: {
      logoutClass() {
        return {
          'd-none': false
        }
      }
    }
  }
</script>
