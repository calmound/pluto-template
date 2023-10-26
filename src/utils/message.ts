/**
 * 消息通知
 */
import { message as AntdMessage } from 'antd';

interface CustomMessageProps {
  msg: string;
  flag: boolean;
  onlyError?: boolean;
  duration?: number;
}

const customMessage = ({
  msg,
  flag,
  onlyError = false,
  duration,
}: CustomMessageProps) => {
  // 如果 onlyError 不存在或为 false，则不管 flag 是什么值，都会触发消息。
  // 如果 onlyError 存在且为 true，则只有当 flag 为 false 时才会触发消息。
  if (!onlyError || (onlyError && flag === false)) {
    if (flag) {
      AntdMessage.success(`${msg} 成功`, duration);
    } else {
      AntdMessage.error(`${msg} 失败`, duration);
    }
  }
};
export default customMessage;
