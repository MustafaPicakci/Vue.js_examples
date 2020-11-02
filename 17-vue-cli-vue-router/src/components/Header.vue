<template>
  <ul class="nav nav-pills">
    <!--exact sayesinde iki url de / ile basladığından sadece tam olarak eşleşme olduğunda active classı uygula diyebildik -->
    <router-link exact active-class="active" to="/" tag="li"
      ><a>Home</a></router-link
    >
    <router-link active-class="active" to="/user/10" tag="li"
      ><a>User</a></router-link
    >
  </ul>
</template>
<script>
export default {};
</script>
