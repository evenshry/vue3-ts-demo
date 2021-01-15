<template>
  <div className="appContainer">
    <h1>Multi Check Component</h1>
    <MultiCheck
      label="my-multi-check"
      :options="options"
      :values="selectedValues"
      :columns="2"
      @optionChange="onSelectedOptionsChange"
    />
    <div>
      <h2>Current selected values:</h2>
      <div>{{ selectedValues.join(",") }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import MultiCheck from "@/components/MultiCheck/index.vue";

const defaultOptions: MultiCheck.Option[] = [
  { label: "aaa", value: "111" },
  { label: "bbb", value: "222" },
  { label: "ccc", value: "333" },
  { label: "ddd", value: "444" },
  { label: "eee", value: "555" },
  { label: "fff", value: "666" },
  { label: "ggg", value: "777" },
  { label: "hhh", value: "888" },
  { label: "iii", value: "999" },
];

const defaultValues: string[] = ["333", "555"];

export default defineComponent({
  components: {
    MultiCheck,
  },

  setup() {
    const selectedValues = ref<string[]>(defaultValues);
    const options = ref<MultiCheck.Option[]>(defaultOptions);

    function onSelectedOptionsChange(data: MultiCheck.Option[]): void {
      selectedValues.value = data.map((it) => it.value);
    }
    return { options, selectedValues, onSelectedOptionsChange };
  },
});
</script>

<style scoped>
.appContainer {
  margin: 20px;
}
</style>