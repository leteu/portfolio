<template>
  <div
    class="history__spot"
    :class="{
      history__spot__active: active,
    }"
  >
    <div v-if="active" />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  active: {
    type: Boolean,
    default: () => false,
  },
})
</script>
