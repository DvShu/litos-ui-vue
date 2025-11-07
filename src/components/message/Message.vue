<script lang="ts">
import { defineComponent, h } from 'vue';
import type { PropType } from 'vue';
import type { ShowMessageInstance, MessageType } from './types';

import MaskCloseIcon from '../icon/MaskClose.vue';
import SuccessIcon from '../icon/Success.vue';
import WarnIcon from '../icon/Warn.vue';
import InfoIcon from '../icon/Info.vue';
import LoadingIcon from '../icon/Loading.vue';

export default defineComponent({
  props: {
    type: {
      type: String as PropType<MessageType>,
      default: 'info',
    },
    customClass: {
      type: String,
      required: false,
    },
    content: {
      type: [String, Object] as PropType<ShowMessageInstance>,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      required: false,
    },
  },
  setup(props) {
    const Icon = (type: MessageType = 'info') => {
      if (type === 'success') {
        return SuccessIcon;
      } else if (type === 'warn') {
        return WarnIcon;
      } else if (type === 'error') {
        return MaskCloseIcon;
      } else if (type === 'loading') {
        return LoadingIcon;
      }
      return InfoIcon;
    };

    return () =>
      h(
        'div',
        {
          id: props.id,
          style: props.width ? { width: props.width } : {},
          class: ['l-message', `l-message-${props.type}`, props.customClass],
        },
        [
          h(Icon(props.type), {
            class: {
              'l-message-icon': true,
              'l-rotate-anim': props.type === 'loading',
            },
          }),
          h('span', { class: 'l-message-content' }, [props.content]),
        ],
      );
  },
});
</script>
