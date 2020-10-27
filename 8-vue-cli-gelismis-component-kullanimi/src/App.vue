<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mx-auto">
        <appMemory>
          <h1 slot="heading">Güzel bir gün...</h1>
          <p>bu çok güzel bir anıydı.</p>
        </appMemory>
      </div>
    </div>
  </div>
</template>

<script>
import Memory from "./Memory";

export default {
  components: {
    appMemory: Memory
  }
};
</script>
