<template>
  <div class="history__card">
    <transition
      appear
      enter-active-class="animated slideInDown"
      leave-active-class="animated slideOutUp"
    >
      <template v-if="active">
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
              class="history__card__tech"
              :class="{
                'q-mt-md': (!!img || !!title || !!desc) && !!tech.length,
              }"
            >
              <template
                v-for="(chip, index) in tech"
                :key="`tech-${index}`"
              >
                <q-chip
                  outline
                  v-bind="chip"
                />
              </template>
            </div>
          </q-card-section>
        </q-card>
      </template>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'

interface TechChip {
  color: string
  label: string
}

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
})
</script>
