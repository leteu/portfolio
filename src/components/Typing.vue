<template>
  <div class="typing-text d2coding">
    <p>
      Hello!!!
    </p>
    <p>
      I'm leteu
    </p>
    <p>
      Web <span class="gradient-text">frontend</span> Developer
    </p>
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
    border-right: .05em solid
    white-space: nowrap
    overflow: hidden
    color: #ededed
    &:nth-child(1)
      width: 7ch
      animation: type 1s steps(7, end)
      animation-fill-mode: forwards
    &:nth-child(2) 
      width: 9ch
      opacity: 0
      animation: type2 1s steps(9, end)
      animation-delay: 1s
      animation-fill-mode: forwards
    &:nth-child(3)
      width: 21ch
      opacity: 0
      animation: type3 2s steps(21, end), blink .5s step-end infinite alternate
      animation-delay: 2s
      animation-fill-mode: forwards

@keyframes type
  0%
    width: 0
  99.9%
    border-right: .15em solid
  100%
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
