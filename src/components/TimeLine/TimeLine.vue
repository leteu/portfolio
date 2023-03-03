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
      <HistoryBox
        :top="150"
        :active="timelineDiff >= 150"
      >
        <template #left></template>
        <template #right></template>
      </HistoryBox>
      <HistoryBox
        :top="550"
        :active="timelineDiff >= 550"
      >
        <template #left></template>
        <template #right></template>
      </HistoryBox>
      <HistoryBox
        :top="950"
        :active="timelineDiff >= 950"
      >
        <template #left></template>
        <template #right></template>
      </HistoryBox>
      <HistoryBox
        :top="1350"
        :active="timelineDiff >= 1350"
      >
        <template #left></template>
        <template #right></template>
      </HistoryBox>
      <HistoryBox
        :top="1750"
        :active="timelineDiff >= 1750"
      >
        <template #left></template>
        <template #right></template>
      </HistoryBox>
    </div>
    <template v-if="lineScale === 1">
      <!-- <q-card class="contact">
        <q-card-section> </q-card-section>
      </q-card> -->
    </template>
  </div>
</template>

<script lang="ts" setup>
import './index.scss'
import 'src/components/SectionTitle.sass'

import { dom } from 'quasar'
import { CSSProperties, onMounted, reactive, ref } from 'vue'

import { HistoryBox } from '.'

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

const timelineDiff = ref(0)

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

  const avatarRect = document.querySelector('.current__avatar')?.getBoundingClientRect().top as number
  const defaultLineRect = document.querySelector('.current__default')?.getBoundingClientRect() as DOMRect

  timelineDiff.value = avatarRect - defaultLineRect.top

  const diff = avatarRect - defaultLineRect.bottom
  const calcScale = diff / dashed + 0.008

  avatar.value.position = 'fixed'
  avatar.value.top = '45%'
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
