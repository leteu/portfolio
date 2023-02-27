<template>
  <svg
    id="L"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 300 650"
    style="enable-background: new 0 0 300 650"
    xml:space="preserve"
  >
    <polygon
      class="st0"
      points="0,350 0,550 100,650 100,450"
    />
    <polygon
      class="st1"
      points="0,0 0,350 100,450 100,100 	"
    />
  </svg>
</template>

<style lang="sass" scoped>
#L
  height: 100%
  position: relative
  animation: MoveY 2s forwards
  .st0
    fill: #4da89b
    transform-origin: 0pt 262pt
    animation: fold 2s forwards
  .st1
    fill: #62decc

@keyframes fold
  0%
    fill: #62decc
    transform: rotate(-90deg) skew(-45deg, 20deg) scale(-1.5, 0.5)
  100%
    fill: #4da89b
    transform: rotate(-90deg) skew(-45deg, 70deg) scale(0.5, 0.5)

@keyframes MoveY
  from
    transform: translateY(0)
  to
    transform: translateY(150px)
</style>
