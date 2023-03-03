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
      <q-card class="about-me__card">
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
import 'src/components/SectionTitle.sass'

const mail = 'contact@leteu.dev'
const call = '+82 10-8905-7546'
const discord = 'leteu#0718'

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
      link.href = `https://discordapp.com/users/${discord}`
      break
    }
  }

  link.click()
  link.remove()
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
    width: 400px
    background: linear-gradient( 125deg, rgba(255,255,255,.1), rgba(255,255,255,.2), rgba(200,200,200,.15))
    border: 2px solid rgba(255,255,255,.1)
    color: white
    &__list
      display: flex
      flex-direction: column
      gap: 8px
    &__item
      display: flex
      align-items: center
      justify-content: flex-start
      gap: 8px
      &__icon
        font-size: 24px
      &__text
        font-weight: 500
        font-size: 16px
</style>
