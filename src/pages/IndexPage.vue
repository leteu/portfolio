<template>
  <q-page class="row justify-evenly overflow-hidden">
    <MainVisual />
    <TechStack />
    <TimeLine />
    <ContactMe />
    <Footer />
  </q-page>
</template>

<script lang="ts" setup>
import AOS from 'aos'
import { onMounted } from 'vue'

import { ContactMe } from 'src/components/ContactMe'
import Footer from 'src/components/FooterComponent.vue'
import MainVisual from 'src/components/MainVisual.vue'
import TechStack from 'src/components/TechStack.vue'
import { TimeLine } from 'src/components/TimeLine'

onMounted(() => {
  AOS.init()
})
</script>
