<template>
  <div class="flex justify-center items-center text-white fs-125">
    <template
      v-for="(text, index) in 'Loading...'.split('')"
      :key="`loading-${index}`"
    >
      <div class="loading-text">{{ text }}</div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>

<style lang="sass" scoped>
.loading-text
  animation: bounce .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) infinite alternate
  &:nth-child(1)
    animation-delay: 1 * .05s
  &:nth-child(2)
    animation-delay: 2 * .05s
  &:nth-child(3)
    animation-delay: 3 * .05s
  &:nth-child(4)
    animation-delay: 4 * .05s
  &:nth-child(5)
    animation-delay: 5 * .05s
  &:nth-child(6)
    animation-delay: 6 * .05s
  &:nth-child(7)
    animation-delay: 7 * .05s
  &:nth-child(8)
    animation-delay: 8 * .05s
  &:nth-child(9)
    animation-delay: 9 * .05s
  &:nth-child(10)
    animation-delay: 10 * .05s

@keyframes bounce
  0%
    transform: translateY(0px)
  100%
    transform: translateY(-1em)
</style>
