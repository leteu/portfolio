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

<style lang="sass" scoped>
.loading-text
	animation: bounce 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) infinite alternate

@for $i from 1 through 10
	.loading-text:nth-child(#{$i})
		animation-delay: calc(#{$i} * 0.05s)

@keyframes bounce
	from
		transform: translateY(0px)
	to
		transform: translateY(-1em)
</style>
