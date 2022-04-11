<template>
  <div class="full-height height-100vh column">
    <div class="col row">
      <div class="col">
      </div>
      <div class="col flex justify-center items-center">
        <LogoAnimation class="height-800px" />
      </div>
    </div>
    <div class="flex justify-center items-center q-mb-lg">
      <NudgeMouse />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LogoAnimation from "./LogoAnimation.vue";
import NudgeMouse from "./NudgeMouse.vue";

export default defineComponent({
  components: {
    LogoAnimation,
    NudgeMouse
  },
  setup() {},
});
</script>
