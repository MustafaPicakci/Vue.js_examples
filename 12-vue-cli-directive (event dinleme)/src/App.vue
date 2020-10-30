<template>
  <div class="container">
    <div class="col-md-6 col-md-offset-3">
      <h3>Directive Sınavı</h3>
      <!-- Soru -->
      <!-- Event'leri dinleyecek v-on gibi çalışan bir Directive geliştiriniz. -->
      <button v-custom-on:click="clicked" class="btn btn-success">Tıkla</button>
      <div class="customOn" v-custom-on:mousemove="mouseMove"></div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    "custom-on": {
      bind(el, binding, vnode) {
        let type = binding.arg;
        let fn = binding.value;
        el.addEventListener(type, fn);

        /*   el.onclick = function () {
          binding.value();
        };*/
      },
    },
  },
  methods: {
    clicked() {
      alert("tıklandı...");
    },
    mouseMove() {
      alert("mouseMove...");
    },
  },
};
</script>

<style>
.customOn {
  width: 100px;
  height: 100px;
  border: 1px dashed #666;
}
</style>
