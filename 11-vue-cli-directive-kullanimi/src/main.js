import Vue from 'vue'
import App from './App.vue'

Vue.directive("color", {
  bind(el,binding,vnode){
    el.style.backgroundColor=binding.value;
  }
});


new Vue({
  el: '#app',
  render: h => h(App)
})
