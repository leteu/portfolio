<template>
  <q-page class="row justify-evenly">
    <div class="full-width full-height scroll-y">
      <MainVisualVue />
      <TechStackVue />
    </div>
  </q-page>
</template>

<script lang="ts">
import MainVisualVue from "src/components/MainVisual.vue";
import TechStackVue from "src/components/TechStack.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    MainVisualVue,
    TechStackVue,
  },
  setup() {},
});
</script>
