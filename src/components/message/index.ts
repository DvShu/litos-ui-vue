import { h, render } from 'vue';
import type { VNode } from 'vue';
import MessageTemplate from './MessageList.vue';
import type { MessageType, MessageOption } from './types';

let instance: VNode | null = null;
let seed = 0; // 用于构建多个消息时，构建消息的id，避免重复

function createInstance() {
  if (!instance) {
    let container = document.createElement('div');
    container.className = 'l-message-wrapper';
    document.body.appendChild(container);

    instance = h(MessageTemplate, {
      onEmpty: () => {
        instance = null;
        render(null, container);
        container.remove();
        container = undefined as any;
      },
    });
    render(instance, container);
  }
}

function addMessage(option: MessageOption | string, type?: MessageType) {
  createInstance();
  const opts = typeof option === 'string' ? { content: option } : option;
  opts.id = opts.id || `l-message${++seed}`;
  if (opts.duration == null) {
    opts.duration = 3000;
  }
  opts.type = type || opts.type || 'info';
  if (instance && instance.component) {
    (instance.component as any).exposed.insertMessage(opts);
  }
  return opts.id;
}

function removeMessage(msgId: string) {
  if (instance && instance.component) {
    (instance.component as any).exposed.removeMessage(msgId);
  }
}

function closeAll() {
  if (instance && instance.component) {
    (instance.component as any).exposed.removeAllMessages();
  }
}

function updateMessage(id: string, message: MessageOption) {
  if (instance && instance.component) {
    (instance.component as any).exposed.updateMessage(id, message);
  }
}

export default {
  show: (option: MessageOption | string) => addMessage(option),
  info: (option: MessageOption | string) => addMessage(option, 'info'),
  success: (option: MessageOption | string) => addMessage(option, 'success'),
  error: (option: MessageOption | string) => addMessage(option, 'error'),
  warn: (option: MessageOption | string) => addMessage(option, 'warn'),
  loading: (option: MessageOption | string) => addMessage(option, 'loading'),
  close: removeMessage,
  closeAll,
  update: updateMessage,
};
