<template>
  <q-page class="row justify-evenly">
    <div class="full-width">
      <MainVisualVue />
      <TechStackVue />

      <div class="q-pa-sm text-center full-width">
        <div class="text-grey-6">
          Copyright 2022. leteu. All rights reserved.
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainVisualVue from "src/components/MainVisual.vue";
import TechStackVue from "src/components/TechStack.vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    MainVisualVue,
    TechStackVue,
  },
  setup() {},
});
</script>
