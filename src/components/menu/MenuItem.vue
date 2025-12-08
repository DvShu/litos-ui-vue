<script lang="ts">
import { defineComponent, h } from 'vue';

export default defineComponent({
  name: 'MenuItem',
  setup() {
    return () => {
      return h('div', 'MenuItem');
    };
  },
});
</script>
