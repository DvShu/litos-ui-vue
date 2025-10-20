<script lang="ts">
import { defineComponent, h, computed } from 'vue';
import type { PropType } from 'vue';

export default defineComponent({
  props: {
    type: {
      type: String as PropType<'radio' | 'checkbox'>,
      default: 'radio',
    },
    checked: {
      type: Boolean,
      default: undefined,
    },
    /** 中间状态 */
    indeterminate: {
      type: Boolean,
      default: false,
    },
    name: String,
    value: {
      type: [String, Boolean, Number],
      default: undefined,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: [Boolean, String, Number],
      default: false,
    },
  },
  emits: ['change', 'update:modelValue'],
  setup(props, { emit }) {
    function handleChange(e: Event) {
      const target = e.target as HTMLInputElement;
      const checked = target.checked;
      const value = props.value == null ? checked : props.value;
      emit('update:modelValue', value);
      emit('change', value);
    }

    const isCheck = computed(() => {
      console.log(props.modelValue);
      if (props.value != null) {
        return props.modelValue === props.value;
      }
      if (props.checked != null) {
        return props.checked;
      }
      return props.modelValue as boolean;
    });

    return () =>
      h(
        'label',
        {
          class: [
            'l-check',
            `l-check--${props.type}`,
            isCheck.value ? 'l-check--checked' : '',
          ],
        },
        [
          h('span', { class: 'l-check--input' }, [
            h('input', {
              type: props.type,
              class: 'l-check--original',
              checked: props.checked,
              name: props.name,
              value: props.value,
              disabled: props.disabled,
              onChange: handleChange,
            }),
            h('span', { class: 'l-check--inner' }),
          ]),
          h('span', '选择协议'),
        ],
      );
  },
});
</script>
