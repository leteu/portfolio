<template>
  <div class="flex justify-center items-center text-white fs-125">
    <template
      v-for="(text, index) in 'Loading...'.split('')"
      :key="`loading-${index}`"
    >
      <div class="loading-text">{{ text }}</div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>

<style scoped>
.loading-text {
  animation: bounce .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) infinite alternate
}

@for $i from 1 to 10 {
  .loading-text:nth-child($(i)) {
    animation-delay: calc($(i) * .05s)
  }
}

@keyframes bounce {
  from {
    transform: translateY(0px)
  }
  to {
    transform: translateY(-1em)
  }
}
</style>
