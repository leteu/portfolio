<template>
  <div class="typing-text d2coding">
    <p>
      Hello, I'm leteu.
    </p>
    <p>
      Web <span class="gradient-text">frontend</span> developer.
    </p>
    <!-- <p class="fs-80">
      Always think about
    </p>
    <p class="fs-80">
      optimize <span class="gradient-text">performance.</span>
    </p> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    strArray: {
      type: Array
    }
  },
  setup(props) {

  },
})
</script>

<style lang="sass" scoped>
.typing-text
  p
    line-height: 1.25em
    margin-block: .25em !important
    border-right: .05em solid
    white-space: nowrap
    overflow: hidden
    color: $grey-5
    &:nth-child(1)
      width: 13.7ch
      opacity: 0
      animation: type 0.7s steps(14, end)
      animation-fill-mode: forwards
    &:nth-child(2) 
      width: 21.3ch
      opacity: 0
      animation: type2 1s steps(22, end)
      animation-delay: 0.7s
      animation-fill-mode: forwards
    &:nth-child(3)
      width: 16.5ch
      opacity: 0
      animation: type2 1s steps(17, end), blink .5s step-end infinite alternate
      animation-delay: 2s
      animation-fill-mode: forwards
    &:nth-child(4)
      width: 19.5ch
      opacity: 0
      animation: type3 1s steps(20, end), blink .5s step-end infinite alternate
      animation-delay: 3s
      animation-fill-mode: forwards

@keyframes type
  0%
    width: 0
  1%
    opacity: 1
  99.9%
    border-right: .15em solid
  100%
    opacity: 1
    border: none

@keyframes type2
  0%
    width: 0
  1%
    opacity: 1
  99.9%
    border-right: .15em solid
  100%
    opacity: 1
    border: none

@keyframes type3 
  0%
    width: 0
  1%
    opacity: 1
  100%
    opacity: 1

@keyframes blink
  50%
    border-color: transparent
</style>
