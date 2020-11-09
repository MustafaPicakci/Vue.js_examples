<template>
  <div class="container">
    <app-tags v-model="tags" color="primary"></app-tags>
    <app-tags v-model="tags" color="danger"></app-tags>
    <app-tags v-model="tags" color="info"></app-tags>
    <app-tags v-model="tags" color="warning"></app-tags>
    <app-tags v-model="tags" color="secondary"></app-tags>
    <app-tags v-model="tags" color="success"></app-tags>

    {{ tags }}
  </div>
</template>

<script>
import Tags from "./components/Tags";
export default {
  components: {
    appTags: Tags,
  },
  data() {
    return {
      tags: "deneme,test",
    };
  },
};
</script>

<style>
body {
  font-family: sans-serif;
}
</style>
