<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <appMemory>
          <h1>Güzel bir gün...</h1>
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
