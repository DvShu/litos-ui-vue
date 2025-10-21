<script lang="ts">
import { defineComponent, h, computed, inject } from 'vue';
import type { PropType } from 'vue';
import { CHECK_KEY } from './keys';

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
    appearance: {
      type: String as PropType<'default' | 'button'>,
      default: 'default',
    },
    label: String,
  },
  emits: ['change', 'update:modelValue'],
  setup(props, { emit }) {
    const { checkedList, updateCheck, name, type, appearance } = inject<any>(
      CHECK_KEY,
      {},
    );

    function handleChange(e: Event) {
      const target = e.target as HTMLInputElement;
      const checked = target.checked;
      const value = props.value == null ? checked : props.value;
      console.log(value);
      if (updateCheck) {
        updateCheck(value);
      }
      emit('update:modelValue', value);
      emit('change', value);
    }

    const isCheck = computed(() => {
      if (checkedList != null) {
        return (
          checkedList.value.includes(props.value) ||
          checkedList.value === props.value
        );
      }
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
            `l-check--${type || props.type}`,
            `l-check--${appearance || props.appearance}`,
            isCheck.value && !props.indeterminate ? 'l-check--checked' : '',
            props.indeterminate ? 'l-check--indeterminate' : '',
            props.disabled ? 'l-check--disabled' : '',
          ],
        },
        [
          h('input', {
            type: type || props.type,
            class: 'l-check--original',
            checked: isCheck.value,
            name: name || props.name,
            value: props.value,
            disabled: props.disabled,
            onChange: handleChange,
          }),
          h('span', { class: 'l-check--input' }, [
            h('span', { class: 'l-check--inner' }),
          ]),
          h('span', { class: 'l-check--label' }, props.label),
        ],
      );
  },
});
</script>
