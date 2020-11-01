<template>
  <div class="game-area">
    <h1 class="title">O <span>Nerede</span> <strong>?</strong></h1>
    <h4 class="description">
      Açık kartlardan birini seçtikten sonra kapalı karta tıklayınız
    </h4>
    <div class="container">
      <app-card v-for="card in 5" :key="card"></app-card>
    </div>
    <div class="container">
      <app-default-card></app-default-card>
    </div>
  </div>
</template>
<script>
import Card from "./Card";
import DefaultCard from "./DefaultCard";

export default {
  components: {
    appCard: Card,
    appDefaultCard: DefaultCard,
  },
};
</script>
<style scoped>
.title {
  text-align: center;
  font-family: sans-serif;
  color: rosybrown;
}
.title span {
  color: mediumpurple;
}
.title strong {
  color: darkred;
}
.description {
  color: grey;
  text-align: center;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}
</style>
