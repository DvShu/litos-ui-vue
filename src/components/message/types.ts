import type { VNode } from 'vue';

export type ShowMessageInstance = string | VNode;

export type MessageType = 'info' | 'success' | 'warn' | 'error' | 'loading';

export type MessageAddOption = {
  id?: string;
  type?: MessageType;
  content: string | VNode;
};

export type MessageInstance = Required<MessageAddOption> & {
  customClass?: string;
};

/** 消息配置 */
export interface MessageOption {
  /** 显示时间，单位为毫秒，默认为：3000。 设为 0 则不会自动关闭 */
  duration?: number;
  /** 显示的消息 */
  content: ShowMessageInstance;
  /** 消息类型：error、warning、success、info */
  type?: MessageType;
  /** 宽度 */
  width?: string;
  /** 自定义类名 */
  customClass?: string;
  id?: string;
}
