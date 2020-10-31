<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Animation ve Transition</h3>
        <hr />

        <button class="btn btn-primary" @click="show = !show">
          kutuyu göster/gizle
        </button>
        <br /><br />
        <transition name="fade">
          <div class="alert alert-success" v-if="show">
            bu bir alert kutusudur
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}

.fade-leave {
}
.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}
</style>
