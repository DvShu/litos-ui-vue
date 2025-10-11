<template>
  <input v-model="value" type="color" class="l-input l-color-picker" />
</template>
<script setup lang="ts">
const value = defineModel<string>();
</script>
