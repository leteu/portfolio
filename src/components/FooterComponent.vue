<template>
  <div class="footer">
    <WaveInfinite
      fill="#0080a3"
      class="wave"
    />
    <WaveInfinite
      fill="#62decc"
      class="wave"
    />
    <WaveInfinite
      fill="#4da89b"
      class="wave"
    />
    <div class="copyright">Copyright 2022-2023. leteu. All rights reserved.</div>
  </div>
</template>

<script lang="ts" setup>
import { WaveInfinite } from 'src/components/misc'
</script>

<style lang="scss">
:root {
  --wave: white;
}

.footer {
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 400;
  width: 100%;
  .copyright {
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 0;
    padding: 16px;
    color: white;
    font-weight: bold;
  }
}

@keyframes wave {
  to {
    transform: translate(-50%, 0);
  }
}

.wave {
  animation: wave calc(var(--speed, 0) * 1s) infinite linear;
  background-size: 50% 100%;
  bottom: -5%;
  height: calc(var(--height, 0) * 1vh);
  left: 0;
  opacity: var(--opacity);
  position: absolute;
  right: 0;
  width: calc(var(--width, 0) * 1vw);

  &:nth-of-type(1) {
    --height: 19;
    --opacity: 0.1;
    --speed: 40;
    --width: 800;
  }
  &:nth-of-type(2) {
    --height: 12;
    --opacity: 0.3;
    --speed: 20;
    --width: 800;
  }
  &:nth-of-type(3) {
    --height: 16;
    --opacity: 0.2;
    --speed: 30;
    --width: 700;
  }
}
</style>
