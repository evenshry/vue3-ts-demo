<template>
  <div class="hello">
    <h1>{{ massage }}</h1>
    <input type="text" v-model="inputValue" />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onUnmounted,
  ref,
  toRefs,
  watch,
  // watchEffect,
} from "vue";
import { useDebouncedRef } from "./../hooks/debounce";

export default defineComponent({
  props: {
    msg: {
      type: String,
      default: "",
    },
  },

  setup(props) {
    const { msg } = toRefs(props);

    let massage = ref<string>("");

    watch(
      () => msg.value,
      () => {
        massage.value = msg.value;
      }
    );

    // watchEffect(() => {
    //   massage.value = msg.value;
    // });

    // eslint-disable-next-line
    let debounceTimer: any;
    const inputValue = useDebouncedRef("hello", (timer) => {
      debounceTimer = timer;
    });

    onUnmounted(() => {
      clearTimeout(debounceTimer);
    });

    return {
      massage,
      inputValue,
    };
  },
});
</script>

<style scoped>
.hello {
  margin: 20px;
  text-align: center;
}
</style>
