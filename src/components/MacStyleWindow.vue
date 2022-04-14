<template>
  <div class="window">
    <div class="window__header row">
      <div class="col flex items-center justify-start q-ml-sm">
        <div class="dot dot__close"></div>
        <div class="dot dot__min"></div>
        <div class="dot dot__max"></div>
      </div>
      <div class="col flex justify-center items-center">
        leteu / Gyuhyeon Shin / 신규현
      </div>
      <div class="col flex justify-end items-center">
        <div class="q-mr-sm">
          ⌥⌘1
        </div>
      </div>
    </div>
    <div class="window__body">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    
  },
})
</script>

<style lang="scss" scoped>

$--dot: (
  close: $red-7,
  min: $yellow-7,
  max: $green-7,

  size: 15px,
);

.window {
  border-radius: 15px;
  overflow: hidden;
  width: 100%;
  box-shadow: 15px 15px rgba($color: #000000, $alpha: 0.5);
  &__header {
    background: $grey-4;
    width: 100%;
    font-weight: bolder;
    color: $grey-10;
    .dot {
      height: map-get($map: $--dot, $key: size);
      width: map-get($map: $--dot, $key: size);
      border-radius: 50%;
      margin: 8px 4px 8px 4px;
      &__close {
        background: map-get($map: $--dot, $key: close);
      }
      &__min {
        background: map-get($map: $--dot, $key: min);
      }
      &__max {
        background: map-get($map: $--dot, $key: max);
      }
    }
  }

  &__body {
    padding: 24px;
    background: $dark;
  }
}
</style>