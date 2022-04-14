<template>
  <div class="full-height height-100vh column main-box">
    <div class="col row">
      <div class="col flex justify-start items-center q-pl-xl">
        <MacStyleWindow>
          <Typing class="q-pl-xl q-ml-xl text-weight-bold fs-400" />-
        </MacStyleWindow>
      </div>
      <div class="col flex justify-center items-center">
        <!-- <LogoAnimation class="height-800px" /> -->
        <div class="plane width-60pct">
          <PlaneSvg pressKey="default" class="width-100pct" />
        </div>
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
import PlaneSvg from "src/components/PlaneSvg.vue";
import MacStyleWindow from "src/components/MacStyleWindow.vue";

export default defineComponent({
  components: {
    LogoAnimation,
    NudgeMouse,
    Typing,
    PlaneSvg,
    MacStyleWindow
  },
  setup() {},
});
</script>

<style lang="sass" scoped>
.main-box
  background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75))
  background-blend-mode: darken

.plane
  transform: rotate(-20deg)
</style>
