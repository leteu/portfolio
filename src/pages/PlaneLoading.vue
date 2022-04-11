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
          <PlaneSvg :pressKey="pressKey" />
          <div class="q-mt-xl">
            <NudgeLoading />
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
import PlaneSvg from "src/components/PlaneSvg.vue";
import NudgeLoading from "src/components/NudgeLoading.vue";

export default defineComponent({
  components: {
    ArrowKeyboad,
    PlaneSvg,
    NudgeLoading
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
