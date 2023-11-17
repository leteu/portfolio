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

      <template
        v-for="(history, index) in historyList"
        :key="`history-${index}`"
      >
        <HistoryBox
          :top="history.top"
          :active="timelineDiff >= history.top"
          :slot-align="history?.align || undefined"
        >
          <template #[history.slot]>
            <template v-if="history.type === 'text'">
              <div class="overflow-hidden">
                <transition
                  appear
                  :enter-active-class="`animated ${history.slot === 'left' ? 'slideInRight' : 'slideInLeft'}`"
                  :leave-active-class="`animated ${history.slot === 'left' ? 'slideOutRight' : 'slideOutLeft'}`"
                >
                  <div
                    v-if="timelineDiff >= history.top"
                    class="history__text"
                  >
                    {{ `${history.date} ${history.title}` }}
                  </div>
                </transition>
              </div>
            </template>
            <template v-else>
              <HistoryCard
                :active="timelineDiff >= history.top"
                v-bind="history"
              />
            </template>
          </template>
        </HistoryBox>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { dom } from 'quasar'
import { CSSProperties, onMounted, reactive, ref } from 'vue'

import { HistoryBox, HistoryCard } from '.'

import { HistoryItem } from 'app/types'
import { Baleun, Hemp, Ideation, Nre, Specheck, PhDash } from 'src/assets/history'
import Logo from 'src/assets/logo.png'

import './index.scss'
import 'src/components/SectionTitle.sass'

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
  const endPos = mainVisual + techStack + timeLine - 200

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
    avatar.value.bottom = '0px'

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

const colorList = {
  css: '#1572b6',
  git: '#f14e32',
  html: '#e34f26',
  javascript: '#f7df1e',
  typescript: '#3178c6',
  flutter: '#54c5f8',
  sass: '#cc6699',
  vuejs: '#41b883',
  reactjs: '#61DBFB',
  webpack: '#8dd6f9',
  vite: '#646cff',
  gitlab: '#fc6d26',
  electron: '#9feaf9',
  slack: '#36c5f0',
  postcss: '#dd3735',
}

const historyList: HistoryItem[] = [
  {
    top: 150,
    type: 'text',
    slot: 'left',
    align: ['end', 'center'],
    date: '2021.01.04',
    title: '우경정보기술 입사',
  },
  {
    top: 250,
    type: 'card',
    slot: 'right',
    date: '2021.01 ~ 2022.05',
    img: Hemp,
    title: '산업용 HEMP 종합 안전관리 플랫폼',
    desc: '경상북도 규제자유특구혁신사업육성(R&D) - 블록체인 기반 산업용 HEMP 종합 안전관리 실증 연구',
    tech: [
      { label: 'Vue.js', color: colorList['vuejs'] },
      { label: 'Javascript', color: colorList['javascript'] },
      { label: 'Sass', color: colorList['sass'] },
      { label: 'Webpack', color: colorList['webpack'] },
      { label: 'Gitlab', color: colorList['gitlab'] },
    ],
  },
  {
    top: 600,
    type: 'card',
    slot: 'left',
    date: '2021.11 ~ 2021.12',
    img: Nre,
    title: '신재생에너지 통합관리 플랫폼',
    desc: '포항 테크노파크 주관. 신재생에너지 통합관리 플랫폼 개발 용역',
    tech: [
      { label: 'Vue.js', color: colorList['vuejs'] },
      { label: 'Typescript', color: colorList['typescript'] },
      { label: 'Sass', color: colorList['sass'] },
      { label: 'Webpack', color: colorList['webpack'] },
      { label: 'Gitlab', color: colorList['gitlab'] },
    ],
  },
  {
    top: 1000,
    type: 'card',
    slot: 'right',
    date: '2022.01 ~ 2022.05',
    img: Baleun,
    title: '바른신호',
    desc: '에스시그널 주관. 바닥 신호등 현황 및 AS 관리 플랫폼 개발 용역',
    tech: [
      { label: 'Vue.js', color: colorList['vuejs'] },
      { label: 'Typescript', color: colorList['typescript'] },
      { label: 'Sass', color: colorList['sass'] },
      { label: 'Webpack', color: colorList['webpack'] },
      { label: 'Gitlab', color: colorList['gitlab'] },
    ],
  },
  {
    top: 1500,
    type: 'text',
    slot: 'left',
    align: ['end', 'center'],
    date: '2022.05.27',
    title: '우경정보기술 퇴사',
  },
  {
    top: 1550,
    type: 'text',
    slot: 'right',
    align: ['center', 'start'],
    date: '2022.06.01',
    title: 'DXWorks 입사',
  },
  {
    top: 1650,
    type: 'card',
    slot: 'left',
    date: '2022.07 ~ 2022.12',
    img: Specheck,
    title: '2022년 블록체인 민간 분야 시범 확산 사업',
    desc: '한국인터넷진흥원(KISA) 주관. React native 및 Hyperledger Aries를 이용한 DID 인증 Android 및 IOS 앱 개발',
    tech: [
      { label: 'React Native', color: colorList['reactjs'] },
      { label: 'Typescript', color: colorList['typescript'] },
      { label: 'Gitlab', color: colorList['gitlab'] },
    ],
    links: [
      {
        label: 'iOS',
        url: 'https://apps.apple.com/kr/app/스펙체크/id6443617673',
      },
      {
        label: 'Android',
        url: 'https://play.google.com/store/apps/details?id=kr.dxworks.careerbank',
      },
    ],
  },
  {
    top: 2100,
    type: 'card',
    slot: 'right',
    date: '2022.10 ~ 2023.01',
    img: Ideation,
    title: "2022년 '산업혁신기반구축사업' 아이데이션 협업시스템 개발",
    desc: '대구경북디자인진흥원 주관. 아이데이션 협업 시스템 개발',
    tech: [
      { label: 'Vue.js', color: colorList['vuejs'] },
      { label: 'Typescript', color: colorList['typescript'] },
      { label: 'Sass', color: colorList['sass'] },
      { label: 'PostCSS', color: colorList['postcss'] },
      { label: 'Vite', color: colorList['vite'] },
      { label: 'Gitlab', color: colorList['gitlab'] },
    ],
  },
  {
    top: 2700,
    type: 'card',
    slot: 'left',
    date: '2022.10 ~ 2023.01',
    img: PhDash,
    title: '[포항시청] 민관협력 기반의 빅데이터 통합플랫폼 및 디지털 시장실 구축 사업',
    desc: '포항시 GEO infographic 지도 개발 및 빅데이터 포탈 및 대시보드 화면 개발',
    tech: [
      { label: 'Vue.js', color: colorList['vuejs'] },
      { label: 'Typescript', color: colorList['typescript'] },
      { label: 'Sass', color: colorList['sass'] },
      { label: 'PostCSS', color: colorList['postcss'] },
      { label: 'Vite', color: colorList['vite'] },
      { label: 'Gitlab', color: colorList['gitlab'] },
    ],
  },
  {
    top: 3300,
    type: 'text',
    slot: 'right',
    align: ['center', 'start'],
    date: '2023.11.02',
    title: 'DXWorks 퇴사',
  },
  {
    top: 3350,
    type: 'text',
    slot: 'left',
    align: ['end', 'center'],
    date: '2023.11.06',
    title: '원소프트다임 입사',
  },
]
</script>
