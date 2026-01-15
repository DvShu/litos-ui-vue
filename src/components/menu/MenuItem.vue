<template>
  <li class="l-menu-item">
    <div><slot></slot></div>
    <ul v-if="children && children.length > 0" class="l-menu">
      <MenuItem v-for="item in children" :key="item.key" :item-key="item.key">{{
        item.title
      }}</MenuItem>
    </ul>
  </li>
</template>

<script setup lang="ts">
import type { MenuItem as MenuItemType } from './types';
const props = withDefaults(
  defineProps<{
    itemKey: string;
    children?: MenuItemType[];
  }>(),
  {},
);
</script>

<style lang="less"></style>
