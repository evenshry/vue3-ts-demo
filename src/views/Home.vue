<template>
  <div class="home">
    <button @click="changeMessage">更新标题</button>
    <HelloWorld :msg="massage" />
    <h1 class="token">Token：{{ token }}</h1>
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { computed, defineComponent, ref } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";

export default defineComponent({
  components: {
    HelloWorld,
  },

  setup() {
    const store = useStore();
    const token = computed(() => store.state.common.token);

    const massage = ref<string>("This is home page");

    const changeMessage = () => {
      if (massage.value === "This is index page") {
        massage.value = "This is home page";
      } else {
        massage.value = "This is index page";
      }
    };

    return { token, massage, changeMessage };
  },
});
</script>

<style scoped>
.home {
  margin: 20px;
  text-align: center;
}
.token {
  margin: 20px;
}
</style>
