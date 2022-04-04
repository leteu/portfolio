<template>
  <q-layout>
    <div class="row">
      <div class="width-75px bg-leteu-under text-center column justify-between">
        <div class="logo" @click="$route.push('/')">
          <div class="q-ma-sm logo-box">
            <img src="~assets/logo.png" alt="" />
          </div>
          <span class="text-white text-weight-bold">leteu</span>
        </div>

        <div class="contact-me">
          <q-icon size="md" name="mdi-github" class="contact-me__github" @click="ContactMeFn('github')"></q-icon>
          <q-icon size="md" name="mdi-discord" class="contact-me__discord" @click="ContactMeFn('discord')"></q-icon>
          <q-icon size="md" class="contact-me__tistory"  @click="ContactMeFn('tistory')">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459 459">
              <title>티스토리 로고</title>
              <g>
                <path
                  d="M229.5,0C102.75,0,0,102.75,0,229.5S102.75,459,229.5,459,459,356.25,459,229.5,356.25,0,229.5,0ZM130.21,191.45a39.57,39.57,0,1,1,39.56-39.57A39.58,39.58,0,0,1,130.21,191.45ZM229.5,390a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,390Zm0-99.29a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,290.74Zm0-99.29a39.57,39.57,0,1,1,39.56-39.57A39.57,39.57,0,0,1,229.5,191.45Zm99.29,0a39.57,39.57,0,1,1,39.57-39.57A39.57,39.57,0,0,1,328.79,191.45Z"
                />
              </g>
            </svg>
          </q-icon>
        </div>
      </div>
      <q-page-container class="col column height-100vh">
        <div class="col">
          <router-view class="full-height" />
        </div>
        <div class="q-pa-sm text-right full-width">
          <div class="text-grey-6">
            Copyright 2022. leteu. All rights reserved.
          </div>
        </div>
      </q-page-container>
    </div>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {

    function ContactMeFn(type: 'github' | 'discord' | 'tistory'): void {
      const link = document.createElement('a');
      link.target = '_blank';

      switch (type) {
        case 'github':
          link.href = 'https://github.com/leteu';
          break;
        case 'discord':
          link.href = 'https://discordapp.com/users/leteu#0718';
          break;
        case 'tistory':
          link.href = 'https://leteu.tistory.com/';
          break;
      }

      link.click();
      link.remove();
    }

    return {
      ContactMeFn
    }
  },
});
</script>

<style lang="sass" scoped>
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
  flex-direction: column
  align-self: center
  &__github
    color: $grey-7
    &:hover
      color: $dark
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
