<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Animation ve Transition</h3>
        <hr />

        <select class="form-control" v-model="activeEffect">
          <option value="fade">fade</option>
          <option value="slide">slide</option>
        </select>

        <button class="btn btn-primary" @click="show = !show">
          kutuyu göster/gizle
        </button>
        <br /><br />
        <!--      <transition :name="activeEffect">
          <div class="alert alert-success" v-if="show">
            bu bir alert kutusudur
          </div>
        </transition>
        <hr />

        <transition name="slide" type="animation" appear>
          <div class="alert alert-warning" v-if="!show">
            bu bir alert kutusudur
          </div>
        </transition>
        <hr />
        <hr />
        <transition
          enter-class=""
          enter-active-class="animate__animated animate__bounce"
          leave-class=""
          leave-active-class="animate__animated animate__swing"
          appear
        >
          <div class="alert alert-warning" v-if="!show">
            bu bir alert kutusudur
          </div>
        </transition>
        <hr />

        -->

        <br /><br />
        <transition name="fade" mode="out-in">
          <div class="alert alert-success" key="success" v-if="show">
            bu bir alert kutusudur
          </div>
          <div class="alert alert-danger" key="danger" v-else>
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
      activeEffect: "fade",
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

.slide-enter {
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 0.5s;
}

.slide-leave {
}
.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
}

@keyframes slide-in {
  from {
    transform: translateY(60px);
  }
  to {
    transform: translateY(0px);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(60px);
  }
}
</style>
