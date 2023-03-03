<template>
  <q-layout class="relative-position">
    <div class="height-100px full-width fixed-top z-index-100">
      <div class="warp flex items-center justify-end">
        <div class="contact-me">
          <q-icon
            size="md"
            class="contact-me__github"
            @click="ContactMeFn('github')"
          >
            <svg
              id="Layer_1"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 120.8 118.1"
              style="enable-background: new 0 0 120.8 118.1"
              xml:space="preserve"
            >
              <path
                class="st1"
                d="M60.4,0C27,0,0,27,0,60.4c0,26,16.6,49.1,41.3,57.3c3,0.6,4.1-1.3,4.1-2.9c0-1.4,0-6.2-0.1-11.2
              C28.5,107.2,25,96.4,25,96.4c-2.8-7-6.7-8.8-6.7-8.8c-5.5-3.8,0.4-3.7,0.4-3.7c6.1,0.4,9.3,6.2,9.3,6.2c5.4,9.2,14.1,6.6,17.6,5
              c0.5-3.9,2.1-6.6,3.8-8.1C36,85.5,21.8,80.4,21.8,57.2c-0.1-6,2.1-11.8,6.2-16.2c-0.6-1.5-2.7-7.7,0.6-16c0,0,5.1-1.6,16.6,6.2
              c9.9-2.7,20.4-2.7,30.3,0C87,23.4,92.1,25,92.1,25c3.3,8.3,1.2,14.5,0.6,16c4.1,4.4,6.3,10.2,6.2,16.2c0,23.2-14.1,28.3-27.6,29.8
              c2.2,1.9,4.1,5.6,4.1,11.2c0,8.1-0.1,14.6-0.1,16.6c0,1.6,1.1,3.5,4.1,2.9c31.6-10.5,48.7-44.7,38.2-76.4C109.5,16.6,86.4,0,60.4,0z
              "
              />
            </svg>
          </q-icon>
          <q-icon
            size="md"
            name="mdi-discord"
            class="contact-me__discord"
            @click="ContactMeFn('discord')"
          ></q-icon>
          <q-icon
            size="md"
            class="contact-me__tistory"
            @click="ContactMeFn('tistory')"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 459 459"
            >
              <title>티스토리 로고</title>
              <g>
                <path
                  d="M229.5,0C102.75,0,0,102.75,0,229.5S102.75,459,229.5,459,459,356.25,459,229.5,356.25,0,229.5,0ZM130.21,191.45a39.57,39.57,0,1,1,39.56-39.57A39.58,39.58,0,0,1,130.21,191.45ZM229.5,390a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,390Zm0-99.29a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,290.74Zm0-99.29a39.57,39.57,0,1,1,39.56-39.57A39.57,39.57,0,0,1,229.5,191.45Zm99.29,0a39.57,39.57,0,1,1,39.57-39.57A39.57,39.57,0,0,1,328.79,191.45Z"
                />
              </g>
            </svg>
          </q-icon>
        </div>
        <div
          class="logo"
          @click="
            () => {
              $router.push('/')
            }
          "
        >
          <div class="q-ma-sm logo-box">
            <img
              src="~assets/logo.png"
              alt=""
            />
          </div>
          <div class="full-width text-center">
            <span class="text-white text-weight-bold">leteu</span>
          </div>
        </div>
      </div>
    </div>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup>
function ContactMeFn(type: 'github' | 'discord' | 'tistory'): void {
  const link = document.createElement('a')
  link.target = '_blank'

  switch (type) {
    case 'github':
      link.href = 'https://github.com/leteu'
      break
    case 'discord':
      link.href = 'https://discordapp.com/users/leteu#0718'
      break
    case 'tistory':
      link.href = 'https://leteu.tistory.com/'
      break
  }

  link.click()
  link.remove()
}
</script>

<style lang="sass" scoped>
.q-layout
  background: #4a4a4a
  background-blend-mode: darken

.logo
  &:hover
    animation: wiggle 2s linear infinite
    cursor: pointer
  .logo-box
    background: white
    border-radius: 8px
    width: 59px
    height: 59px
    img
      width: inherit

/* Keyframes */
@keyframes wiggle
  0%, 7%
    transform: rotateZ(0)
  15%
    transform: rotateZ(-15deg)
  20%
    transform: rotateZ(10deg)
  25%
    transform: rotateZ(-10deg)
  30%
    transform: rotateZ(6deg)
  35%
    transform: rotateZ(-4deg)
  40%, 100%
    transform: rotateZ(0)

.contact-me
  display: flex
  align-self: center
  justify-content: space-around
  width: 150px
  &__github
    .st1
      fill-rule: evenodd
      clip-rule: evenodd
      fill: $grey-7
    &:hover
      .st1
        fill: #fff
  &__discord
    color: $grey-7
    &:hover
      color: #5865F2
  &__tistory
    svg
      fill: $grey-7
      &:hover
        fill: #eb531f
  > *
    cursor: pointer
    padding-bottom: 8px
</style>
