<template>
  <div :class="['l-tag', `l-tag--${type}`]" :style="styleObj">
    <div class="l-tag--content"><slot></slot></div>
    <i v-if="closable" class="l-tag--close" @click="handleClose">
      <Close></Close>
    </i>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { adjust } from 'ph-utils/color';
import { isBlank } from 'ph-utils';
import Close from './icon/Close.vue';

const props = withDefaults(
  defineProps<{
    type?: 'primary' | 'error' | 'success' | 'info';
    color?: string;
    /** 是否可关闭 */
    closable?: boolean;
  }>(),
  {
    type: 'primary',
    closable: false,
  },
);

const emits = defineEmits(['close']);

function handleClose(e: Event) {
  emits('close', e);
}

const styleObj = computed(() => {
  let obj: any = {};
  if (!isBlank(props.color)) {
    obj = {
      '--l-tag-color': props.color,
      '--l-tag-border-color': props.color,
      '--l-tag-bg': adjust(props.color as string, 5, true),
    };
  }
  return obj;
});
</script>
