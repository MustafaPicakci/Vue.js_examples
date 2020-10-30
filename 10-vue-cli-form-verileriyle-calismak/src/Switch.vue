<template>
  <div>
    <div id="on" @click="switched(true)" :class="{ active: value }">
      Açık
    </div>
    <div id="off" @click="switched(false)" :class="{ active: !value }">
      Kapalı
    </div>
  </div>
</template>

<script>
export default {
  //v-model bize value'yu gönderir ve inputu bekler. Bu yüzden gelen valuyu props ile aldık
  //ve inputu $emit ile gönderiyoruz
  props: ["value"],
  methods: {
    switched(isOn) {
      this.$emit("input", isOn);
    },
  },
};
</script>

<style scoped>
#on,
#off {
  width: 50px;
  height: 20px;
  background-color: #eee;
  padding: 2px;
  display: inline-block;
  margin: 10px -2px;
  box-sizing: content-box;
  cursor: pointer;
}

#on:hover,
#on.active {
  background-color: lightgreen;
}

#off:hover,
#off.active {
  background-color: red;
}
</style>
