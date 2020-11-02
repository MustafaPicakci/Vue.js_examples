<template>
  <div class="container">
    <h3>User Detail Component</h3>
    <hr />
    <p>Kullanıcının id bilgisi : {{ $route.params.id }}</p>
    <router-link
      :to="{ name: 'userEdit', params: { id: $route.params.id } }"
      class="btn btn-primary"
      tag="tag"
      >Kullanıcıyı düzenle</router-link
    >
  </div>
</template>
<script>
export default {};
</script>
