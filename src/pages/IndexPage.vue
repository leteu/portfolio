<template>
  <q-page class="row justify-evenly">
    <div class="full-width">
      <MainVisual />
      <TimeLine />
      <TechStack />

      <div class="q-pa-sm text-center full-width">
        <div class="text-grey-6">Copyright 2022. leteu. All rights reserved.</div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import MainVisual from 'src/components/MainVisual.vue'
import TechStack from 'src/components/TechStack.vue'
import TimeLine from 'src/components/TimeLine.vue'
</script>
