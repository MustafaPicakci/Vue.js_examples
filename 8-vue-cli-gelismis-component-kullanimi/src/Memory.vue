<template>
  <div>
    <div class="memory">
      <slot name="heading"></slot>
    </div>
    <div class="memory">
      <slot></slot>
    </div>
    <div class="memory">
      <slot name="author">
        <h3>author</h3>
        <p>buraya herhangi bir içerik gelmemiş</p>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["content"]
};
</script>

<style scoped>
div.memory {
  border: 1px solid #ccc;
  box-shadow: 1px 1px 2px #666;
  padding: 20px 20px;
  margin-bottom: 20px;
}
</style>
