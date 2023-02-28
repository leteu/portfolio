<template>
  <div class="main-visual height-100vh main-box relative-position column">
    <div class="col row z-index-50">
      <div class="col flex justify-center items-center">
        <MacStyleWindow
          class="width-900px"
          data-aos="flip-left"
        >
          <TypingView class="q-pl-xl q-ml-xl text-weight-bold fs-400 q-py-xl" />
        </MacStyleWindow>
      </div>
    </div>
    <div class="flex justify-center items-center q-mb-lg">
      <NudgeMouse />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Aos from 'aos'
import { onMounted } from 'vue'

import MacStyleWindow from 'src/components/MacStyleWindow.vue'
import NudgeMouse from 'src/components/NudgeMouse.vue'
import TypingView from 'src/components/TypingView.vue'

onMounted(() => {
  Aos.init()
})
</script>

<style lang="sass" scoped>
.plane
  transform: rotate(-20deg)
</style>
