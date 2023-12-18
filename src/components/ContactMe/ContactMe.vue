<template>
  <div class="about-me full-width q-pa-xl">
    <div
      class="about-me__title"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="500"
    >
      <div class="section-title">Contact</div>
      <q-separator
        color="grey-5"
        class="q-mt-lg q-mb-xl"
      />
    </div>
    <div class="flex items-center justify-center">
      <q-card
        ref="cardRef"
        class="about-me__card"
        data-aos="flip-left"
        data-aos-easing="linear"
        data-aos-duration="500"
        @mousemove="cardMove"
        @touchmove="cardMove"
        @mouseout="cardMoveEnd"
        @touchend="cardMoveEnd"
        @touchcancel="cardMoveEnd"
      >
        <q-card-section class="q-pa-lg about-me__card__list">
          <div class="about-me__card__item">
            <q-icon
              name="cake"
              class="about-me__card__item__icon"
            />
            <span class="about-me__card__item__text">2002.06.10</span>
          </div>
          <div class="about-me__card__item">
            <q-icon
              name="email"
              class="about-me__card__item__icon"
            />
            <span
              class="about-me__card__item__text"
              @click="ContactMeFn('mail')"
            >
              {{ mail }}
            </span>
          </div>
          <div class="about-me__card__item">
            <q-icon
              name="call"
              class="about-me__card__item__icon"
            />
            <span
              class="about-me__card__item__text"
              @click="ContactMeFn('call')"
            >
              {{ call }}
            </span>
          </div>
          <div class="about-me__card__item">
            <q-icon
              name="mdi-discord"
              class="about-me__card__item__icon"
            />
            <span
              class="about-me__card__item__text"
              @click="ContactMeFn('discord')"
            >
              {{ discord }}
            </span>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { QCard } from 'quasar'
import 'src/components/SectionTitle.sass'
import { ref } from 'vue'

const mail = 'contact@leteu.dev'
const call = '+82 10-8905-7546'
const discord = 'leteu'

const cardRef = ref<QCard>()

function ContactMeFn(type: 'mail' | 'call' | 'discord'): void {
  const link = document.createElement('a')

  switch (type) {
    case 'mail': {
      link.href = `mailto:${mail}`
      break
    }
    case 'call': {
      link.href = `tel:${call}`
      break
    }
    case 'discord': {
      link.target = '_blank'
      link.href = 'https://discordapp.com/users/208842367019515905'
      break
    }
  }

  link.click()
  link.remove()
}

function cardMove(e: MouseEvent | TouchEvent) {
  e.preventDefault()

  if (!cardRef.value) return

  // normalise touch/mouse
  let pos: [number, number]

  if (e.type === 'touchmove') {
    const { clientX, clientY } = (e as TouchEvent).touches[0]
    pos = [clientX, clientY]
  } else {
    const { offsetX, offsetY } = e as MouseEvent
    pos = [offsetX, offsetY]
  }

  // math for mouse position
  const l = pos[0]
  const t = pos[1]
  const h = cardRef.value.$el.clientHeight
  const w = cardRef.value.$el.clientWidth

  const px = Math.abs(Math.floor((100 / w) * l) - 100)
  const py = Math.abs(Math.floor((100 / h) * t) - 100)
  const lp = 50 + (px - 50) / 1.5
  const tp = 50 + (py - 50) / 1.5
  const ty = ((tp - 50) / 2) * -1
  const tx = ((lp - 50) / 1.5) * 0.5

  cardRef.value.$el.style.setProperty('--rotate-x', `${tx}deg`)
  cardRef.value.$el.style.setProperty('--rotate-y', `${ty}deg`)

  if (e.type === 'touchmove') {
    return false
  }
}

function cardMoveEnd() {
  if (!cardRef.value) return

  cardRef.value.$el.attributes.removeNamedItem('style')
}
</script>

<style lang="sass" scoped>
.about-me
  overflow: hidden
  &__title
    width: 400px
    text-align: center
    margin: 0 auto
    color: $grey-5
  &__card
    --rotate-x: 0deg
    --rotate-y: 0deg
    width: 400px
    background: linear-gradient( 125deg, rgba(255,255,255,.1), rgba(255,255,255,.2), rgba(200,200,200,.15))
    border: 2px solid rgba(255,255,255,.1)
    color: white
    transform: rotateX(var(--rotate-y)) rotateY(var(--rotate-x))
    &__list
      display: flex
      flex-direction: column
      gap: 8px
    &__item
      display: flex
      align-items: center
      justify-content: flex-start
      gap: 8px
      cursor: pointer
      &__icon
        font-size: 24px
      &__text
        font-weight: 500
        font-size: 16px
</style>
