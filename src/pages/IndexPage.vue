<template>
  <q-page class="row justify-evenly">
    <MainVisual />
    <TechStack />
    <TimeLine />
  </q-page>
</template>

<script lang="ts" setup>
import AOS from 'aos'
import { onMounted } from 'vue'

import MainVisual from 'src/components/MainVisual.vue'
import TechStack from 'src/components/TechStack.vue'
import TimeLine from 'src/components/TimeLine.vue'

onMounted(() => {
  AOS.init()
})
</script>
