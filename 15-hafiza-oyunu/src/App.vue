<template>
  <component 
  @activeComponentEvent="activeComponent=$event"
  :is="activeComponent"></component>
</template>
<script>
import GameCards from "./components/GameCards";
import Failure from "./components/Failure";
import Celebrate from "./components/Celebrate";

export default {
  components: {
    appGameCards: GameCards,
    appCelebrate: Celebrate,
    appFailure: Failure,
  },
  data() {
    return { activeComponent: "app-game-cards" };
  },
};
</script>
<style>
body {
  font-family: sans-serif;
}
</style>
