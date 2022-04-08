<template>
  <q-dialog
    ref="dialogRef"
    maximized
    full-height
    full-width
  >
    <q-card class="bg-leteu-40">
      <q-card-section class="q-pa-none relative-position full-height">
        <div class="absolute-center height-100px">
          <img
            src="~assets/plane-build.svg"
            alt=""
            class="height-100pct plane"
            :class="`plane__${pressKey}`"
          />
          <div class="q-mt-xl">
            <div class="flex justify-center items-center text-white fs-125">
              <div class="loading-text">L</div>
              <div class="loading-text">o</div>
              <div class="loading-text">a</div>
              <div class="loading-text">d</div>
              <div class="loading-text">i</div>
              <div class="loading-text">n</div>
              <div class="loading-text">g</div>
              <div class="loading-text">.</div>
              <div class="loading-text">.</div>
              <div class="loading-text">.</div>
            </div>
          </div>
        </div>
        <div class="absolute-bottom flex justify-center q-pb-xl">
          <ArrowKeyboad @update:pressKey="changePressKey" />
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { useDialogPluginComponent } from "quasar";
import { defineComponent, ref } from "vue";
import ArrowKeyboad from "src/components/ArrowKeyboad.vue";

export default defineComponent({
  components: {
    ArrowKeyboad
  },
  emits: [...useDialogPluginComponent.emits],
  setup() {
    const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } =
      useDialogPluginComponent();
    const pressKey = ref("default");

    function changePressKey(val: string) {
      pressKey.value = val;
    }

    return {
      dialogRef,
      onDialogHide,
      pressKey,
      changePressKey
    };
  },
});
</script>

<style lang="sass" scoped>
.loading-text
  animation: bounce .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) infinite alternate
  &:nth-child(1)
    animation-delay: 1 * .05s
  &:nth-child(2)
    animation-delay: 2 * .05s
  &:nth-child(3)
    animation-delay: 3 * .05s
  &:nth-child(4)
    animation-delay: 4 * .05s
  &:nth-child(5)
    animation-delay: 5 * .05s
  &:nth-child(6)
    animation-delay: 6 * .05s
  &:nth-child(7)
    animation-delay: 7 * .05s
  &:nth-child(8)
    animation-delay: 8 * .05s
  &:nth-child(9)
    animation-delay: 9 * .05s
  &:nth-child(10)
    animation-delay: 10 * .05s

@keyframes bounce
  0%
    transform: translateY(0px)
  100%
    transform: translateY(-1em)

$nudge-range: 30px

.plane
  &__default
    animation: nudge 10s ease-in-out infinite
  &__up
    animation: up 3s cubic-bezier(0.6, 0, 1, 1) 1s forwards
  &__down
    animation: down 3s cubic-bezier(0.6, 0, 1, 1) 1s forwards
  &__brake
    transform-origin: 0 100%
    animation: brake 3s cubic-bezier(0.6, 0, 1, 1) 1s forwards
  &__accel
    animation: accel 3s cubic-bezier(0.6, 0, 1, 1) 1s forwards

@keyframes nudge
  0%
    transform: translateY(0)
  20%
    transform: translateY($nudge-range)
  30%
    transform: translateY(0)
  50%
    transform: translateY($nudge-range)
  60%
    transform: translateY(0)
  80%
    transform: translateY($nudge-range)
  90%
    transform: translateY(0)

@keyframes up
  0%
    transform: rotate(0)
  40%
    transform: rotate(10deg) translateY(20px)
  100%
    transform: rotate(-25deg) translateY(-30px)

@keyframes down
  0%
    transform: rotate(0)
  30%
    transform: rotate(-5deg) translateY(-20px)
  100%
    transform: rotate(15deg) translateY(30px)

@keyframes brake
  0%
    transform: rotate(0)
  100%
    transform: rotate(-10deg) translateX(-40px)

@keyframes accel
  0%
    transform: translateX(0)
  40%
    transform: translateX(-10px)
  100%
    transform: translateX(50px)
</style>
