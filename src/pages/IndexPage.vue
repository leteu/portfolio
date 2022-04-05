<template>
  <q-page class="row justify-evenly">
    <div class="full-width">
      <TechStackVue></TechStackVue>
    </div>
  </q-page>
</template>

<script lang="ts">
import TechStackVue from 'src/components/TechStack.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: {
    TechStackVue
  },
  setup () {

  }
});
</script>
