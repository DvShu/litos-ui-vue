<template>
  <div
    class="l-shadow"
    :class="{ 'l-shadow_transparent': transparent }"
    :style="{ zIndex: 100 + id }"
    @click="clickHandler"
    l-shadow
  >
    <div class="l-shadow-main" :class="shadowClass" l-shadow>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
let index = 0;
</script>

<script setup lang="ts">
let id = index;
index += 1;
const emits = defineEmits(['shadowClick']);

withDefaults(
  defineProps<{
    /** 传递给 shadow 主体的样式，而不是顶层样式 */
    shadowClass?: string;
    /** shadow 的背景是否是透明 */
    transparent?: boolean;
  }>(),
  {
    shadowClass: '',
    transparent: false,
  },
);

function clickHandler(e: Event) {
  let $target = e.target as HTMLElement;
  if ($target.hasAttribute('l-shadow')) {
    // 点击的是遮罩层
    emits('shadowClick', e);
  }
}
</script>
