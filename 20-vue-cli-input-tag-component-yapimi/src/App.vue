<template>
  <div class="tag-container">
    <span class="tag">
      <span class="content">Vuejs</span>
      <span class="close">X</span>
    </span>
    <span class="tag">
      <span class="content">Vuejs</span>
      <span class="close">X</span>
    </span>
    <span class="tag">
      <span class="content">Vuejs</span>
      <span class="close">X</span>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
body {
  font-family: sans-serif;
}
.tag-container {
  border: 1px solid #ccc;
  padding: 20px;
}
.tag {
  background-color: #fbbd08;
  padding: 10px;
  color: #000;
  cursor: default;
  font-size: 14px;
}
.tag .close{
  font-size: 12px;
  cursor: pointer;
}
</style>
