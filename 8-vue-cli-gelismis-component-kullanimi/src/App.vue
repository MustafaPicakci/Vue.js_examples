<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mx-auto">
        <br /><br />
        <button
          @click="selectedComponent = 'appMemory'"
          class="btn-sm btn btn-primary"
        >
          appMemory
        </button>
        <button
          @click="selectedComponent = 'appNewMemory'"
          class="btn-sm btn btn-primary"
        >
          appNewMemory
        </button>
        <button
          @click="selectedComponent = 'appAuthor'"
          class="btn-sm btn btn-primary"
        >
          appAuthor
        </button>
        <hr />
        <p>{{ selectedComponent }}</p>
        <hr />
        <br />

        
        <keep-alive>
          <component :is="selectedComponent">
            <h1 slot="heading">Güzel bir gün...</h1>
            <p>bu çok güzel bir anıydı.</p>
          </component>
        </keep-alive>

        <!-- <appMemory>
          <h1 slot="heading">Güzel bir gün...</h1>
          <p>bu çok güzel bir anıydı.</p>
        </appMemory> !-->
      </div>
    </div>
  </div>
</template>

<script>
import Memory from "./components/Memory";
import NewMemory from "./components/NewMemory";
import Author from "./components/Author";

export default {
  data() {
    return {
      selectedComponent: "appMemory"
    };
  },
  components: {
    appMemory: Memory,
    appNewMemory: NewMemory,
    appAuthor: Author
  }
};
</script>
