<template>
  <div
    class="history row gap-lg full-width"
    :style="{ top: `${top}px` }"
  >
    <HistorySpot :active="active" />
    <div
      class="col relative-position flex"
      :class="`justify-${slotAlign[0]}`"
      :style="
        !slots.left
          ? {
              zIndex: -100,
            }
          : {
              zIndex: 400,
            }
      "
    >
      <slot name="left"></slot>
    </div>
    <div
      class="col relative-position flex"
      :class="`justify-${slotAlign[1]}`"
      :style="
        !slots.right
          ? {
              zIndex: -100,
            }
          : {
              zIndex: 400,
            }
      "
    >
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType, useSlots } from 'vue'

import { HistorySpot } from '.'

import { Align } from 'app/types'

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

const slots = useSlots()
</script>
