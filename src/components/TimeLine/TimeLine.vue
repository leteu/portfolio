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
        :style="avatar"
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
  <!-- <div style="height: 850px"></div> -->
</template>

<script lang="ts" setup>
import './index.scss'
import 'src/components/SectionTitle.sass'

import { dom } from 'quasar'
import { CSSProperties, onMounted, reactive, ref } from 'vue'

import Logo from 'src/assets/logo.png'

const { height } = dom

const lineScale = ref<number>(0)

const avatar = ref<CSSProperties>({
  position: 'absolute',
  top: '100px',
  bottom: undefined,
})

const heightMap = reactive({
  mainVisual: 0,
  techStack: 0,
  timeLine: 0,
  dashed: 0,
  timeLineTitle: 0,
})

const onScroll = (pos: number) => {
  const { mainVisual, techStack, timeLine, timeLineTitle, dashed } = heightMap

  const startPos = mainVisual + techStack + timeLineTitle
  const endPos = mainVisual + techStack + timeLine - 1000

  if (pos < startPos) {
    lineScale.value = 0
    avatar.value.position = 'absolute'
    avatar.value.top = '100px'
    avatar.value.bottom = undefined

    return
  }

  if (pos >= endPos) {
    lineScale.value = 1
    avatar.value.position = 'absolute'
    avatar.value.top = undefined
    avatar.value.bottom = '750px'

    return
  }

  avatar.value.position = 'fixed'
  avatar.value.top = '45%'

  // const calcScale = ((pos - startPos) / (timeLine + timeLine * (2 / 7))) * 2
  const avatarRect = document.querySelector('.current__avatar')?.getBoundingClientRect().top as number
  const defaultLineRect = document.querySelector('.current__default')?.getBoundingClientRect().bottom as number
  // const diff = Math.abs(avatarRect - defaultLineRect)
  const diff = avatarRect - defaultLineRect

  console.log(diff)

  const calcScale = diff / (dashed + 100) + 0.008

  lineScale.value = calcScale <= 0 ? 0 : calcScale >= 1 ? 1 : calcScale
}

onMounted(() => {
  heightMap.mainVisual = height(document.querySelector('.main-visual') as Element)
  heightMap.techStack = height(document.querySelector('.tech-stack') as Element)
  heightMap.timeLine = height(document.querySelector('.time-line') as Element)
  heightMap.dashed = height(document.querySelector('.dashed') as Element)
  heightMap.timeLineTitle = height(document.querySelector('.time-line__title') as Element)
})
</script>
