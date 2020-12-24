<template>
  <div class="hello">
    <h1>{{ massage }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs, watchEffect } from "vue";

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

    watchEffect(() => {
      massage.value = msg.value;
    });

    return {
      massage,
    };
  },
});
</script>

<style scoped>
.hello {
  margin: 20px;
}
</style>
