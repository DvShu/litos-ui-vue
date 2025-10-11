<template>
  <div class="l-radio-group">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide } from 'vue';

const checkedValue = defineModel<any>();
const emits = defineEmits(['change']);

function updateCheck(val: any) {
  checkedValue.value = val;
  emits('change', checkedValue.value);
}

provide('l-radio-group-check', {
  checkedValue,
  updateCheck,
});
</script>
