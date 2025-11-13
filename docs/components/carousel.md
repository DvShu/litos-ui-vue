# Carousel 轮播

在同一平级(水平、垂直)内容下，循环播放展示子内容。

## 示例

<script setup>
  import { Carousel, CarouselItem } from '../../src';
  import { ref } from 'vue';
  const items = ref([1, 2, 3, 4, 5]);
</script>

### 基础用法

结合使用 `lv-carousel` 和 `lv-carousel-item` 标签就能实现轮播。把想要展示的内容放在 `lv-carousel-item` 标签内。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html" >
  <lv-carousel :loop="false" autoplay>
    <lv-carousel-item class="demo-carousel-item carousel1">1</lv-carousel-item>
    <lv-carousel-item class="demo-carousel-item carousel2">2</lv-carousel-item>
    <lv-carousel-item class="demo-carousel-item carousel3">3</lv-carousel-item>
    <lv-carousel-item class="demo-carousel-item carousel4">4</lv-carousel-item>
    <lv-carousel-item class="demo-carousel-item carousel5">5</lv-carousel-item>
  </lv-carousel>
  </textarea>
  <template #preview>
  <Carousel :loop="true" autoplay>
    <CarouselItem v-for="(item, i) in items" :key="item" :class="['demo-carousel-item', 'carousel' + item]">{{item}}</CarouselItem>
  </Carousel>
  </template>
  </CodePreview>
</ClientOnly>
