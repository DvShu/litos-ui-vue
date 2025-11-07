<template>
  <TransitionGroup name="l-message-fade" @after-leave="afterLeave">
    <Message
      v-for="item in messages"
      :key="item.id"
      :type="item.type"
      :content="item.content"
      :id="item.id"
      :custom-class="item.customClass"
    ></Message>
  </TransitionGroup>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Message from './Message.vue';
import type { MessageInstance, MessageOption } from './types';

const emit = defineEmits(['empty']);
const messages = ref<MessageInstance[]>([]);
let timerMap: Record<string, number> = {};

function createMessageTimer(messageId: string, duration?: number) {
  if (duration && duration > 0) {
    const timerId = setTimeout(() => {
      removeMessage(messageId);
      delete timerMap[messageId];
    }, duration) as any;
    timerMap[messageId] = timerId;
  }
}

/**
 * 插入消息
 * @param id 消息id
 * @param content 消息内容
 * @param type 消息类型
 */
function insertMessage(msg: Required<MessageOption>) {
  messages.value.push({
    id: msg.id,
    type: msg.type,
    content: msg.content,
    customClass: msg.customClass,
  });
  createMessageTimer(msg.id, msg.duration);
}

function clearMessageTimer(messageId: string) {
  const timerId = timerMap[messageId];
  if (timerId) {
    clearTimeout(timerId);
    delete timerMap[messageId];
  }
}

/**
 * 删除消息
 * @param id 消息id
 */
function removeMessage(id: string) {
  const index = messages.value.findIndex((item) => item.id === id);
  if (index !== -1) {
    messages.value.splice(index, 1);
  }
  clearMessageTimer(id);
  if (messages.value.length === 0) {
    timerMap = {};
  }
}

function updateMessage(id: string, message: MessageOption) {
  const index = messages.value.findIndex((item) => item.id === id);
  if (index !== -1) {
    const msg = { ...messages.value[index], ...message };
    messages.value[index] = msg;
    if (msg.duration) {
      clearMessageTimer(id);
      createMessageTimer(id, msg.duration);
    }
  }
}

function afterLeave() {
  if (messages.value.length === 0) {
    emit('empty');
  }
}

/**
 * 删除所有消息
 */
function removeAllMessages() {
  messages.value = [];
  timerMap = {};
}

defineExpose({
  insertMessage: insertMessage,
  removeMessage: removeMessage,
  removeAllMessages: removeAllMessages,
  updateMessage: updateMessage,
});
</script>
