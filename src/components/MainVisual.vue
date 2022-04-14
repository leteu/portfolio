<template>
  <div class="height-100vh main-box relative-position column">
    <div class="col row z-index-50">
      <div class="col flex justify-center items-center">
        <MacStyleWindow class="width-900px">
          <Typing class="q-pl-xl q-ml-xl text-weight-bold fs-400 q-py-xl" />
        </MacStyleWindow>
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
.plane
  transform: rotate(-20deg)
</style>
