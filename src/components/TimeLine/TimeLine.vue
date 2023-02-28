<template>
  <div
    v-scroll="onScroll"
    class="time-line full-width q-pa-xl column"
  >
    <div
      class="time-line__title"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="500"
    >
      <div class="section-title">Timeline</div>
      <q-separator
        color="grey-5"
        class="q-mt-lg q-mb-xl"
      />
    </div>
    <div class="relative-position col">
      <div class="dashed"></div>
      <div class="current__default"></div>
      <div
        class="current__line"
        :style="{
          transform: `translateX(-50%) scaleY(${lineScale})`,
        }"
      />
      <div
        class="current__avatar"
        :style="{
          marginTop: `calc(${avatar.top * heightMap.dashed}px + 100px)`,
        }"
      >
        <div>
          <img
            :src="Logo"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import './index.scss'
import 'src/components/SectionTitle.sass'

import { dom } from 'quasar'
import { onMounted, reactive, ref } from 'vue'

import Logo from 'src/assets/logo.png'

const { height } = dom

const lineScale = ref<number>(0)

const avatar = reactive({
  top: 100,
})

const heightMap = reactive({
  mainVisual: 0,
  techStack: 0,
  timeLine: 0,
  dashed: 0,
})

const onScroll = (pos: number) => {
  const { mainVisual, techStack, timeLine } = heightMap

  const startPos = mainVisual + techStack
  const endPos = mainVisual + techStack + timeLine - 500

  if (pos < startPos) {
    lineScale.value = 0
    avatar.top = 0

    return
  }

  if (pos >= endPos) {
    lineScale.value = 1
    avatar.top = 1

    return
  }

  const calcScale = ((pos - startPos) / timeLine) * 2

  lineScale.value = calcScale <= 0 ? 0 : calcScale >= 1 ? 1 : calcScale
  avatar.top = calcScale <= 0 ? 0 : calcScale >= 1 ? 1 : calcScale
}

onMounted(() => {
  heightMap.mainVisual = height(document.querySelector('.main-visual') as Element)
  heightMap.techStack = height(document.querySelector('.tech-stack') as Element)
  heightMap.timeLine = height(document.querySelector('.time-line') as Element)
  heightMap.dashed = height(document.querySelector('.dashed') as Element)
})
</script>
