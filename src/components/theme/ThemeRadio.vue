<template>
  <CheckGroup v-model="theme" type="radio" appearance="button">
    <Check label="跟随系统" value="auto" />
    <Check label="浅色主题" value="light" />
    <Check label="深色主题" value="dark" />
  </CheckGroup>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import Check from '../check/Check.vue';
import CheckGroup from '../check/CheckGroup.vue';
import { applyTheme, getTheme } from 'ph-utils/theme';

const theme = ref(getTheme());
const emits = defineEmits(['change']);

watch(theme, (val) => {
  applyTheme(val as 'auto').then();
  emits('change', val);
});
</script>

<style lang="less"></style>
