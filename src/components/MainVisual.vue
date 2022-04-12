<template>
  <div class="full-height height-100vh column main-box">
    <div class="col row">
      <div class="col flex justify-start items-center text-weight-bold fs-400 q-pl-xl">
        <Typing class="q-pl-xl q-ml-xl" />
      </div>
      <div class="col flex justify-center items-center">
        <!-- <LogoAnimation class="height-800px" /> -->
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
import Typing from "./Typing.vue";

export default defineComponent({
  components: {
    LogoAnimation,
    NudgeMouse,
    Typing,
  },
  setup() {},
});
</script>

<style lang="sass" scoped>
.main-box
  background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75))
  background-blend-mode: darken
</style>
