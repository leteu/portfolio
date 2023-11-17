<template>
  <div class="tech-stack full-width q-pa-xl scroll-y">
    <div
      class="width-400px text-center q-mx-auto text-grey-5"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="500"
    >
      <div class="section-title">Tech Stack</div>
      <q-separator
        color="grey-5"
        class="q-mt-lg q-mb-xl"
      />
    </div>
    <div class="warp text-grey-10 text-h6 row">
      <template
        v-for="([key, techs], idx) in Object.entries(techList)"
        :key="`card-${idx}-${key}`"
      >
        <q-card
          class="height-100pct column border-radius-15px"
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="500"
          :data-aos-delay="idx * 100"
        >
          <q-card-section class="row bg-blue-3 q-py-sm height-50px text-weight-bold">
            <div class="col flex items-center justify-start">
              <div class="dot dot__close"></div>
              <div class="dot dot__min"></div>
              <div class="dot dot__max"></div>
            </div>
            <div class="col text-center fs-85">{{ techs.name }}</div>
            <div class="col"></div>
          </q-card-section>
          <q-separator />
          <q-card-section class="col bg-grey-2">
            <div class="tech-container">
              <template
                v-for="(tech, index) in techs.value"
                :key="`tech-${key}-${index}`"
              >
                <div
                  :class="`tech-box tech-box__${tech.name}`"
                  data-aos="zoom-in"
                  data-aos-easing="linear"
                  data-aos-duration="500"
                  :data-aos-delay="idx * index * 100 + 600"
                >
                  <img
                    v-if="!!tech.image"
                    :src="tech.image"
                    alt=""
                  />
                  <q-tooltip>
                    {{ tech.name }}
                  </q-tooltip>
                </div>
              </template>
            </div>
          </q-card-section>
        </q-card>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import './SectionTitle.sass'

import { defineComponent, ref } from 'vue'

import {
  vuejs,
  javascript,
  typescript,
  flutter,
  rn,
  sass,
  html,
  css,
  webpack,
  vite,
  electron,
  git,
  gitlab,
  slack,
  postcss,
  qgis,
  figma,
  eslint,
  prettier,
  husky,
  githubAction,
  obsidian,
} from 'assets/tech'

export default defineComponent({
  setup() {
    const hoverItem = ref('')

    const techList = {
      frontend: {
        name: 'Front-end',
        value: [
          { name: 'vuejs', image: vuejs },
          { name: 'javascript', image: javascript },
          { name: 'typescript', image: typescript },
          { name: 'flutter', image: flutter },
          { name: 'electron', image: electron },
          { name: 'react-native', image: rn },
          { name: 'html', image: html },
          { name: 'css', image: css },
          { name: 'sass', image: sass },
          { name: 'postcss', image: postcss },
        ],
      },
      devTool: {
        name: 'Dev tools',
        value: [
          { name: 'webpack', image: webpack },
          { name: 'vite', image: vite },
          { name: 'eslint', image: eslint },
          { name: 'prettier', image: prettier },
          { name: 'husky', image: husky },
          { name: 'github-action', image: githubAction },
        ],
      },
      workplace: {
        name: 'workplace',
        value: [
          { name: 'git', image: git },
          { name: 'gitlab', image: gitlab },
          { name: 'slack', image: slack },
        ],
      },
      etc: {
        name: 'etc',
        value: [
          { name: 'qgis', image: qgis },
          { name: 'figma', image: figma },
          { name: 'obsidian', image: obsidian },
        ],
      },
    }

    function hoverHexagon(type: string) {
      hoverItem.value = type
    }
    function resetHover() {
      hoverItem.value = ''
    }

    return {
      hoverItem,
      hoverHexagon,
      resetHover,
      techList,
    }
  },
})
</script>

<style lang="scss" scoped>
@import 'src/css/app.scss';

/* Colors */
$--tech-list: (
  css: #1572b6,
  git: #f14e32,
  html: #e34f26,
  javascript: #f7df1e,
  typescript: #3178c6,
  flutter: #54c5f8,
  sass: #cc6699,
  vuejs: #41b883,
  webpack: #8dd6f9,
  vite: #646cff,
  gitlab: #fc6d26,
  electron: #9feaf9,
  slack: #36c5f0,
  postcss: #dd3735,
  react-native: #282c34,
  qgis: #1c2028,
  figma: #2c2c2c,
  eslint: #e2e2e2,
  prettier: #1a2b34,
  husky: #f6f6f7,
  github-action: #242938,
  obsidian: #252525,
);

.warp {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: map-get($map: $--space-size, $key: 'md');
  grid-auto-flow: column;

  & > :first-child {
    grid-row-start: 1;
    grid-row-end: 3;
  }
}

.tech {
  &-container {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    gap: 15px;
  }
  &-box {
    aspect-ratio: 1/1;
    width: calc(100% / 4 - 15px);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;

    > img {
      width: 80%;
    }
    /* Colors */
    @each $tech, $color in $--tech-list {
      &__#{$tech} {
        background-color: $color;
      }
    }
  }
}

$--dot: (
  close: $red-7,
  min: $yellow-7,
  max: $green-7,

  size: 15px,
);

.dot {
  height: map-get($map: $--dot, $key: size);
  width: map-get($map: $--dot, $key: size);
  border-radius: 50%;
  margin: 4px;
  &__close {
    background: map-get($map: $--dot, $key: close);
  }
  &__min {
    background: map-get($map: $--dot, $key: min);
  }
  &__max {
    background: map-get($map: $--dot, $key: max);
  }
}
</style>
