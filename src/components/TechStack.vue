<template>
  <div class="full-width q-pa-xl">
    <div class="width-400px text-center q-mx-auto text-grey-5">
      <div class="section-title">Tech Stack</div>
      <q-separator color="grey-5" class="q-mt-lg q-mb-xl" />
    </div>
    <div class="warp row text-grey-10 text-h6 row">
      <template v-for="(techs, key) in techList" :key="key">
        <div class="col q-px-sm">
          <q-card class="height-100pct column">
            <q-card-section>
              {{techs.name}}
            </q-card-section>
            <q-separator />
            <q-card-section class="col">
              <div class="tech-container">
                <template v-for="(tech, index) in techs.value" :key="`tech-${key}-${index}`">
                  <div :class="`tech-box tech-box__${tech.name}`">
                    <img :src="tech.image" alt="" v-if="!!tech.image" />
                    <q-tooltip v-if="!!tech.name">
                      {{ tech.name }}
                    </q-tooltip>
                  </div>
                </template>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </template>
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

    const techList = {
      frontend: {
        name: '프론트엔드',
        value: [
          { name: "vuejs",      image: vuejs      },
          { name: "javascript", image: javascript },
          { name: "typescript", image: typescript },
          { name: "flutter",    image: flutter    },
          { name: "electron",   image: electron   },
        ]
      },
      publish: {
        name: '퍼블리싱',
        value: [
          { name: "html",       image: html       },
          { name: "css",        image: css        },
          { name: "sass",       image: sass       },
          { name: "postcss",    image: postcss    },
        ]
      },
      devTool: {
        name: '개발 도구',
        value: [
          { name: "webpack",    image: webpack    },
          { name: "vite",       image: vite       },
        ],
      },
      workplace: {
        name: '협업 도구',
        value: [
          { name: "git",        image: git        },
          { name: "gitlab",     image: gitlab     },
          { name: "slack",      image: slack      },
        ]
      }
    };

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

.tech {
  &-container {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    gap: 10px;
  }
  &-box {
    aspect-ratio: 1/1;
    width: calc(100% / 3 - 10px);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;

    > img {
      width: 80%;
    }
    /* Colors */
    @each $tech in $--tech-list {
      &__#{$tech} {
        background-color: map-get($--colors, $tech);
      }
    }
  }
}

</style>
