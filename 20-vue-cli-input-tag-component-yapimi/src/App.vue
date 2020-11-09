<template>
  <div class="tag-container">
    <span class="tag" v-for="tag in tags" :key="tag">
      <span class="content">{{ tag }}</span>
      <span class="close">X</span>
    </span>

    <input type="text" @keydown.enter="addTag" />
    <div v-if="error" class="error">Bu etiket daha önceden eklenmiş!!</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: ["deneme", "test"],
      error: false,
    };
  },
  methods: {
    addTag(event) {
      let text = event.target.value;
      let matchedTag = false;
      if (text.length > 0) {
        this.tags.forEach((tag) => {
          if (tag.toLowerCase() === text.toLowerCase()) {
            matchedTag = true;
          }
        });

        if (!matchedTag) {
          this.tags.push(text);
          text = "";
        } else {
          this.error = true;

          setTimeout(() => {
            this.error = false;
          }, 2000);
        }
      }
    },
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
  margin-right: 10px;
}
.tag .close {
  font-size: 12px;
  cursor: pointer;
}
input {
  outline: none;
  height: 30px;
  width: 100px;
}
.error {
  font-size: 12px;
  color: red;
  margin: 5px;
}
</style>
