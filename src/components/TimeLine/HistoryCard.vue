<template>
  <div class="history__card">
    <transition
      appear
      enter-active-class="animated slideInDown"
      leave-active-class="animated slideOutUp"
    >
      <template v-if="active">
        <div>
          <span class="text-white">{{ date }}</span>
          <q-card class="history__card">
            <q-card-section>
              <div
                v-if="!!img"
                class="history__card__img-box"
              >
                <img
                  :src="img"
                  :alt="imgAlt"
                />
              </div>
              <div
                class="history__card__text"
                :class="{
                  'q-mt-md': !!img && (!!title || !!desc),
                }"
              >
                <div class="history__card__text__title">{{ title }}</div>
                <div
                  class="history__card__text__desc"
                  :class="{
                    'mt-6': !!img && !!title && !!desc,
                  }"
                >
                  {{ desc }}
                </div>
              </div>
              <div
                class="row gap"
                :class="{
                  'q-mt-md': (!!img || !!title || !!desc) && !!tech.length,
                }"
              >
                <div class="history__card__tech col">
                  <template
                    v-for="({ label, color }, index) in tech"
                    :key="`tech-${index}`"
                  >
                    <q-chip
                      outline
                      :label="label"
                      :style="{
                        color,
                      }"
                    />
                  </template>
                </div>
                <div class="history__card__links flex items-center gap-xs">
                  <template
                    v-for="({ label, url }, index) in links"
                    :key="`link-${index}`"
                  >
                    <div
                      class="cursor-pointer"
                      @click="onClickLink(url)"
                    >
                      {{ label }}<q-icon name="chevron_right" />
                    </div>
                  </template>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </template>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'

import { Link, TechChip } from 'app/types'

defineProps({
  active: {
    type: Boolean,
    default: () => false,
  },
  img: {
    type: String,
    default: () => '',
  },
  imgAlt: {
    type: String,
    default: () => '',
  },
  title: {
    type: String,
    default: () => '',
  },
  desc: {
    type: String,
    default: () => '',
  },
  tech: {
    type: Array as PropType<TechChip[]>,
    default: () => [],
  },
  date: {
    type: String,
    default: () => '',
  },
  links: {
    type: Array as PropType<Link[]>,
    default: () => [],
  },
})

const onClickLink = (url: string) => {
  const a = document.createElement('a')
  a.target = '_blank'
  a.href = url

  a.click()
  a.remove()
}
</script>
