<template>
  <div class="full-width bg-grey-2 q-pa-xl">
    <div class="width-400px text-center q-mx-auto">
      <div class="section-title">Tech Stack</div>
      <q-separator color="dark" class="q-mt-lg q-mb-xl" />
    </div>
    <div class="flex justify-around warp">
      <div class="hexagon-container">
        <template v-for="(tech, index) in techList" :key="`tech-${index}`">
          <div
            :class="`hexagon hexagon__${tech.name}`"
            @mouseover="hoverHexagon(tech.name)"
            @mouseleave="resetHover"
          >
            <img :src="tech.image" alt="" />
          </div>
        </template>
        <div class="hexagon"></div>
      </div>
      <div>
        <transition
          appear
          enter-active-class="animated fadeIn slide-down"
          leave-active-class="animated fadeOut slide-down"
        >
          <template v-if="hoverItem === 'vuejs'">
            <div key="vuejs">1</div>
          </template>
        </transition>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import {
  vuejs,
  javascript,
  typescript,
  flutter,
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
} from "assets/tech";

export default defineComponent({
  setup() {
    const hoverItem = ref("");

    const techList = [
      { name: "vuejs", image: vuejs },
      { name: "javascript", image: javascript },
      { name: "typescript", image: typescript },
      { name: "flutter", image: flutter },
      { name: "sass", image: sass },
      { name: "html", image: html },
      { name: "css", image: css },
      { name: "webpack", image: webpack },
      { name: "vite", image: vite },
      { name: "electron", image: electron },
      { name: "git", image: git },
      { name: "gitlab", image: gitlab },
      { name: "slack", image: slack },
      { name: "postcss", image: postcss },
    ];

    function hoverHexagon(type: string) {
      hoverItem.value = type;
    }
    function resetHover() {
      hoverItem.value = "";
    }

    return {
      hoverItem,
      hoverHexagon,
      resetHover,
      techList,
    };
  },
});
</script>

<style lang="scss" scoped>
.section-title {
  font-size: 2em;
  font-weight: bolder;
}

/* Hexagon dimentions */
$--hex: (
  hex-width: 150px,
  hex-between: 10px,
  hex-transition: all 0.2s ease,
  hex-default: #8e8e8e,
  hex-hover: #fff,
);

$--hex-other: (
  hex-height: calc(#{map-get($--hex, hex-width)} / 1.73),
  hex-margin: calc(#{map-get($--hex, hex-width)} / 2),
);

$--hex-border: calc(#{map-get($--hex-other, hex-margin)} / 1.73);

/* Colors */
$--colors: (
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
);

/* Tech List */
$--tech-list: sass, git, html, javascript, typescript, flutter, vuejs, webpack,
  vite, css, gitlab, electron, slack, postcss;

.hexagon-container {
  display: grid;
  grid-template-columns:
    map-get($--hex, hex-width)
    map-get($--hex, hex-width)
    map-get($--hex, hex-width)
    map-get($--hex, hex-width)
    map-get($--hex, hex-width);
  grid-auto-rows: calc(#{map-get($--hex, hex-width)} - 28.87px / 1.5);
  grid-gap: map-get($--hex, hex-between) map-get($--hex, hex-between);
  padding-bottom: $--hex-border;
}

.hexagon {
  align-items: center;
  background-color: map-get($--hex, hex-default);
  cursor: default;
  display: flex;
  fill: white;
  height: map-get($--hex-other, hex-height);
  justify-content: center;
  margin: $--hex-border 0;
  position: relative;
  transition: map-get($--hex, hex-transition);
  width: map-get($--hex, hex-width);
  &::after,
  &::before {
    border-left: #{map-get($--hex-other, hex-margin)} solid transparent;
    border-right: #{map-get($--hex-other, hex-margin)} solid transparent;
    content: "";
    left: 0;
    position: absolute;
    transition: map-get($--hex, hex-transition);
    width: 0;
  }
  &::after {
    border-top: #{$--hex-border} solid #{map-get($--hex, hex-default)};
    top: 100%;
    width: 0;
  }
  &::before {
    border-bottom: #{$--hex-border} solid #{map-get($--hex, hex-default)};
    bottom: 100%;
  }
  @for $i from 6 to 11 {
    &:nth-child(10n + #{$i}) {
      margin-left: calc(
        (
          #{map-get($--hex, hex-width)}
          / 2 + #{map-get($--hex, hex-between)}
          / 2
        )
        * -1
      );
    }
  }
  > img {
    height: 75%;
    transition: map-get($--hex, hex-transition);
    fill: white;
  }
}

/* Colors */
.hexagon {
  @each $tech in $--tech-list {
    &__#{$tech} {
      background-color: map-get($--colors, $tech);
      &::after,
      &::before {
        border-top-color: map-get($--colors, $tech);
        border-bottom-color: map-get($--colors, $tech);
      }
    }
  }
}
</style>
