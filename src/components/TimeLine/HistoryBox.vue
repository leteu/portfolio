<template>
  <div
    class="history row gap-lg full-width"
    :style="{ top: `${top}px` }"
  >
    <HistorySpot :active="active" />
    <div
      class="col relative-position flex"
      :class="`justify-${slotAlign[0]}`"
    >
      <slot name="left"></slot>
    </div>
    <div
      class="col relative-position flex"
      :class="`justify-${slotAlign[1]}`"
    >
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'

import { HistorySpot } from '.'

type Align = 'start' | 'center' | 'end'

defineProps({
  top: {
    type: Number,
    default: () => 0,
  },
  active: {
    type: Boolean,
    default: () => false,
  },
  slotAlign: {
    type: Array as unknown as PropType<[Align, Align]>,
    default: () => ['center', 'center'],
  },
})
</script>
