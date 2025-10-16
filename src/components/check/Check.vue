<script lang="ts">
import { defineComponent, h } from 'vue';
import type { PropType } from 'vue';

export default defineComponent({
  props: {
    type: {
      type: String as PropType<'radio' | 'checkbox'>,
      default: 'radio',
    },
  },
  setup(props) {
    return () =>
      h('label', { class: 'l-check' }, [
        h('div', 'D'),
        h('div', 'H'),
        h('input', { type: props.type, class: 'l-check__inner' }),
      ]);
  },
});
</script>
