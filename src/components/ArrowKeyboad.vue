<template>
  <div class="keyboard">
    <template v-for="arrow in arrows" :key="`keyboard-arrow-${arrow}`">
      <div :class="`keyboard__${arrow}`">
        <q-icon
          :name="`keyboard_arrow_${arrow}`"
          size="lg"
          class="text-weight-bolder"
          @click="keyboardPressEvt({key: arrow})"
        />
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onBeforeUnmount, ref } from 'vue'

export default defineComponent({
  emits: [
    'update:pressKey'
  ],
  setup(props, { emit }){

    const arrows = ['up', 'left', 'down', 'right'];
    const pressState = ref(false);
    
    function keyboardPressEvt(evt: { key: string }) {
      if(!pressState.value) {
        switch(evt.key) {
          case 'w':
          case 'ArrowUp':
          case 'up':
            pressState.value = true;
            emit('update:pressKey', 'up');
            document.querySelector('.keyboard__up')?.classList.add('press');
            break;
          case 'a':
          case 'ArrowLeft':
          case 'brake':
            pressState.value = true;
            emit('update:pressKey', 'brake');
            document.querySelector('.keyboard__left')?.classList.add('press');
            break;
          case 's':
          case 'ArrowDown':
          case 'down':
            pressState.value = true;
            emit('update:pressKey', 'down');
            document.querySelector('.keyboard__down')?.classList.add('press');
            break;
          case 'd':
          case 'ArrowRight':
          case 'accel':
            pressState.value = true;
            emit('update:pressKey', 'accel');
            document.querySelector('.keyboard__right')?.classList.add('press');
            break;
          default:
            break;
        }
      }
    }
    
    function clearPlaneFn() {
      emit('update:pressKey', 'default');      
      pressState.value = false;
      document.querySelector('.press')?.classList.remove('press')
    }
    
    onMounted(() => {
      document.addEventListener('keydown', keyboardPressEvt);
      document.addEventListener('keyup', clearPlaneFn);
    })
    
    onBeforeUnmount(() => {
      document.removeEventListener('keydown', keyboardPressEvt);
      document.removeEventListener('keyup', clearPlaneFn);
    })

    return {
      arrows,
      keyboardPressEvt
    }
  }
})
</script>

<style lang="sass" scoped>
$highlight1: hsl(148, 60%, 75%)
$highlight2: hsl(148, 65%, 69%)
$shadow1:    hsl(148, 51%, 64%)
$shadow2:    hsl(148, 38%, 56%)

.keyboard
  display: grid
  grid-template-areas:  " . up . " "left down right"
  > div
    width: 4rem
    height: 4rem
    margin: 0.5rem 0.5rem
    text-align: center
    vertical-align: bottom
    color: white
    border-style: solid
    border-width: .4rem .45rem .6rem
    border-radius: .8rem
    border-color: $highlight1 $shadow2 $shadow2 $shadow1
    background: $highlight2
    font-weight: bolder
    display: flex
    align-items: center
    justify-content: center
  > .press
    border-bottom-width: 0.4rem
    text-shadow: 0 0 10px white
  &__up
    grid-area: up
  &__left
    grid-area: left
  &__down
    grid-area: down
  &__right
    grid-area: right
</style>
