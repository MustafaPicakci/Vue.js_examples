<template>
  <div class="col-xs-12 col-sm-6" v-if="Object.keys(server).length === 0">
    <p>Sunucu Bilgisi güncel değil!!</p>
    <h3>Sunucu #{{ server.id }}</h3>
    <h3>Sunucu durumu : {{ server.status }}</h3>
    <button @click="changeServerStatus()">Durumu düzelt</button>
  </div>
  <div class="col-xs-12 col-sm-6" v-else>
    <p>Sunucu Bilgisi güncel değil!!</p>
    <h3>Sunucu #{{ server.id }}</h3>
    <h3>Sunucu durumu : {{ server.status }}</h3>
    <button @click="changeServerStatus()">Durumu düzelt</button>
  </div>
</template>
<script>
import { eventBus } from "../../main";

export default {
  data() {
    return {
      server: {},
    };
  },
  created() {
    eventBus.$on("serverDataSent", (data) => {
      this.server = data;
    });
  },
  methods: {
    changeServerStatus() {
      this.server.status = "Normal";
    },
  },
};
</script>
