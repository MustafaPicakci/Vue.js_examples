<template>
  <div class="tag-container">
    <span class="tag" v-for="(tag, index) in tags" :key="tag">
      <span class="content">{{ tag }}</span>
      <span @click="removeOneTag(index)" class="close">X</span>
    </span>

    <input type="text" @keydown.enter="addTag" @keydown.delete="removeTag" />
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
      let text = event.target;
      let matchedTag = false;
      if (text.value.length > 0) {
        this.tags.forEach((tag) => {
          if (tag.toLowerCase() === text.value.toLowerCase()) {
            matchedTag = true;
          }
        });

        if (!matchedTag) {
          this.tags.push(text.value);
          text.value = "";
        } else {
          this.error = true;

          setTimeout(() => {
            this.error = false;
          }, 2000);
        }
      }
    },
    removeTag(event) {
      if (event.target.value.length <= 0) {
        this.tags.splice(this.tags.length - 1, 1); // son elemanı siliyoruz
      }
    },
    removeOneTag(index) {
      this.tags.splice(index, 1);
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
