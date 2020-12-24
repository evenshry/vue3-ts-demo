<template>
  <div class="home">
    <HelloWorld :msg="massage" />
    <button @click="changeMessage()">更新标题</button>
    <h1 class="hello">token:{{ token }}</h1>
  </div>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import { defineComponent, ref } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";

export default defineComponent({
  components: {
    HelloWorld,
  },

  computed: {
    ...mapGetters({
      token: "common/token",
    }),
  },

  setup() {
    const massage = ref<string>("This is home page");
    const changeMessage = () => {
      massage.value =
        massage.value === "This is index page"
          ? "This is home page"
          : "This is index page";
    };
    return { massage, changeMessage };
  },
});
</script>

<style scoped>
.hello {
  margin: 20px;
}
</style>
