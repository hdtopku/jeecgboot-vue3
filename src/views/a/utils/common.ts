import { useCopyToClipboard } from '/@/hooks/web/useCopyToClipboard';
import { useMessage } from '/@/hooks/web/useMessage';
import { unref } from 'vue';

const { clipboardRef, copiedRef } = useCopyToClipboard();
const { createMessage } = useMessage();

export class Tool {
  public static copy = (data, msg = null) => {
    clipboardRef.value = data;
    if (unref(copiedRef)) {
      if (msg) {
        createMessage.success(msg);
      }
    } else {
      createMessage.error('复制失败');
    }
  };
}
