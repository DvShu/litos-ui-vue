<template>
  <div
    :class="['l-polygon', shape ? `l-polygon-${shape}` : '']"
    :style="[background ? `--l-polygen-background: ${background}` : '']"
  ></div>
</template>

<script setup lang="ts">
defineProps<{
  /** 形状 */
  shape?:
    | 'triangle-top'
    | 'triangle-bottom'
    | 'triangle-left'
    | 'triangle-right'
    | 'triangle-top-right'
    | 'triangle-top-left'
    | 'triangle-bottom-right'
    | 'triangle-bottom-left'
    | string;
  background?: string;
}>();
</script>
