<template>
  <div>
    <h1>newMemory componenti</h1>
  </div>
</template>

<script>
//keep-alive kullandığımız için destroyed hook'u artık kullanılamıyor fakat 2 yeni hood eklenmiş oluyor. hangi komponenting aktif
//olduğunu activated ve deavtivated ile tespit edebiliyoruz
export default {
  destroyed() {
    console.log("destroyed");
  },
  activated() {
    console.log("activated");
  },
  deactivated() {
    console.log("deactivated");
  }
};
</script>
