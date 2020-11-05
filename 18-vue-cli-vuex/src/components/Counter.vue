<template>
  <div>
    <button class="btn btn-success" @click="increaseCounter">+ Arttır</button>
    <button class="btn btn-danger" @click="decreaseCounter">- Azalt</button>
    <hr />
    <button class="btn btn-success" @click="increment">+ Arttır</button>
    <button class="btn btn-danger" @click="decrement">- Azalt</button>
    <hr />
    <button class="btn btn-success" @click="incAsync">
      + Async Arttır
    </button>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
export default {
  methods: {
    ...mapMutations(["increaseCounter", "decreaseCounter"]),
    /* incrementCounter() {
      //this.$emit("counterEvent", 1);
      //this.$store.state.counter++;
      this.$store.commit("increaseCounter");
    },
    decrementCounter() {
      //this.$emit("counterEvent", -1);
      //this.$store.state.counter--;
      this.$store.commit("decreaseCounter");
    }*/
    /* increment() {
      this.$store.dispatch("increment"); //actions'ı çağırdık
    },
    decrement() {
      this.$store.dispatch("decrement"); //actions'ı çağırdık
    },
    incrementAsync() {
      this.$store.dispatch("incAsync");
    },*/
    ...mapActions(["increment", "decrement", "incAsync"]),
  },
};
</script>

<style></style>
