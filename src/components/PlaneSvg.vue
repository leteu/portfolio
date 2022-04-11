<template>
  <img
    src="~assets/plane-build.svg"
    alt=""
    class="height-100pct plane"
    :class="`plane__${pressKey}`"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    pressKey: {
      type: String,
      required: true
    }
  }
})
</script>

<style lang="sass" scoped>
$nudge-range: 30px

.plane
  &__default
    animation: nudge 10s ease-in-out infinite
  &__up
    animation: up 3s cubic-bezier(0.6, 0, 1, 1) 1s forwards
  &__down
    animation: down 3s cubic-bezier(0.6, 0, 1, 1) 1s forwards
  &__brake
    transform-origin: 0 100%
    animation: brake 3s cubic-bezier(0.6, 0, 1, 1) 1s forwards
  &__accel
    animation: accel 3s cubic-bezier(0.6, 0, 1, 1) 1s forwards

@keyframes nudge
  0%
    transform: translateY(0)
  20%
    transform: translateY($nudge-range)
  30%
    transform: translateY(0)
  50%
    transform: translateY($nudge-range)
  60%
    transform: translateY(0)
  80%
    transform: translateY($nudge-range)
  90%
    transform: translateY(0)

@keyframes up
  0%
    transform: rotate(0)
  40%
    transform: rotate(10deg) translateY(20px)
  100%
    transform: rotate(-25deg) translateY(-30px)

@keyframes down
  0%
    transform: rotate(0)
  30%
    transform: rotate(-5deg) translateY(-20px)
  100%
    transform: rotate(15deg) translateY(30px)

@keyframes brake
  0%
    transform: rotate(0)
  100%
    transform: rotate(-10deg) translateX(-40px)

@keyframes accel
  0%
    transform: translateX(0)
  40%
    transform: translateX(-10px)
  100%
    transform: translateX(50px)
</style>
