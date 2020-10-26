<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <app-server
        @click.native="sendToDetail(server)"
        v-for="server in servers"
        :key="server"
        :serverData="server"
      ></app-server>
    </ul>
  </div>
</template>

<script>
import Server from "./Server";
import { eventBus } from "../../main";

export default {
  data() {
    return {
      servers: [
        { id: 1, status: "kritik" },
        { id: 2, status: "normal" },
        { id: 3, status: "tehlikede" },
        { id: 4, status: "bilinmiyor" },
      ],
    };
  },
  components: {
    appServer: Server,
  },
  methods: {
    sendToDetail(server) {
      eventBus.sendToServerData(server);
    },
  },
};
</script>
