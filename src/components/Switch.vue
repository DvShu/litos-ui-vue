<template>
  <div
    :class="{
      'l-switch': true,
      'l-switch--disabled': disabled,
      'l-switch--checked': checked,
    }"
    @click="handleChange"
  >
    <div class="l-switch-action">
      <slot name="action" :checked="checked"></slot>
    </div>
    <span v-if="checked || uncheckedText" class="l-switch-text">
      {{ checked ? checkedText || '' : uncheckedText || '' }}
    </span>
  </div>
</template>
<script setup lang="ts">
const checked = defineModel({ default: false });

const emits = defineEmits(['change']);

withDefaults(
  defineProps<{
    disabled?: boolean;
    checkedText?: string;
    uncheckedText?: string;
  }>(),
  {
    disabled: false,
  },
);

function handleChange() {
  checked.value = !checked.value;
  emits('change', checked.value);
}
</script>
