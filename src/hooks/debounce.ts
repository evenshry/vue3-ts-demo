import { customRef, Ref } from 'vue';

export function useDebouncedRef(value: string, callback: (timer: NodeJS.Timeout) => void, delay = 100): Ref<string> {
  let timer: NodeJS.Timeout;
  // 两个参数分别是用于追踪的 track 与用于触发响应的 trigger
  // 这两个参数对 值的追踪 在当前并没有用,比如watchEffect的出发机制
  // 不调用这两个值没问题, 但是如果写成插件的话还是要调用的, 因为别人没准在追踪这个值,
  return customRef((track, trigger) => {
    return {
      get() {
        track();

        return value;
      },
      set(newValue: string) {
        clearTimeout(timer);

        timer = setTimeout(() => {
          value = newValue;

          trigger();

          callback(timer);
        }, delay);
      },
    };
  });
}
