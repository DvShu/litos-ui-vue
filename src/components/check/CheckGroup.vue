<template>
  <div
    :class="{
      'l-check-group': true,
    }"
    :style="groupStyle"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide, computed } from 'vue';
import { random } from 'ph-utils';
import { CHECK_KEY } from './keys';

const props = withDefaults(
  defineProps<{
    name?: string;
    type?: 'checkbox' | 'radio';
    appearance?: 'default' | 'button';
    gap?: number;
  }>(),
  {
    type: 'radio',
    appearance: 'default',
  },
);

const checkList = defineModel({
  default: () => '' as any,
});
const emits = defineEmits(['change']);

function updateCheck(val: any) {
  if (props.type === 'radio') {
    checkList.value = val;
    emits('change', val);
  } else {
    let oldValues = checkList.value;
    if (oldValues == '') {
      oldValues = [val];
    } else {
      let index = oldValues.indexOf(val);
      if (index === -1) {
        // 新增
        oldValues.push(val);
      } else {
        // 删除
        oldValues.splice(index, 1);
      }
    }
    checkList.value = [...oldValues];
    emits('change', [...oldValues]);
  }
}

const groupStyle = computed(() => {
  const styl: any = {};
  let gap = props.gap;
  if (props.appearance === 'button') {
    gap = 0;
  }
  if (gap != null) {
    styl['--l-check-group-gap'] = `${gap}px`;
  }
  return styl;
});

provide(CHECK_KEY, {
  checkedList: checkList,
  updateCheck,
  name: props.name || `l-check-${random(6)}`,
  type: props.type,
  appearance: props.appearance,
});
</script>
