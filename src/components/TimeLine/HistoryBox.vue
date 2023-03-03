<template>
  <div
    class="history row gap-lg"
    :style="{ top: `${top}px` }"
  >
    <HistorySpot :active="active" />
    <div class="col">
      <slot name="left"></slot>
    </div>
    <div class="col">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { HistorySpot } from '.'

defineProps({
  top: {
    type: Number,
    default: () => 0,
  },
  active: {
    type: Boolean,
    default: () => false,
  },
})
</script>
