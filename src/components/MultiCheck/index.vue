<template>
  <div className="MultiCheck">
    <div className="MultiCheck_Title">{{ label }}</div>
    <div className="MultiCheck_Content">
      <div className="MultiCheck_Panel">
        <template
          v-for="(column, columnIndex) in sequences"
          :key="`column_${columnIndex}`"
        >
          <ul className="MultiCheck_Column">
            <li v-if="columnIndex === 0" className="MultiCheck_Column_Item">
              <label className="MultiCheck_Column_Label">
                <input
                  type="checkbox"
                  :checked="checkAll"
                  className="MultiCheck_Column_Check"
                  @change="handleCheckAll(!checkAll)"
                />
                Select All
              </label>
            </li>

            <template
              v-for="(item, index) in options.slice(column.start, column.end)"
              :key="`item_${index}`"
            >
              <li className="MultiCheck_Column_Item">
                <label className="MultiCheck_Column_Label">
                  <input
                    type="checkbox"
                    className="MultiCheck_Column_Check"
                    :checked="values.includes(item.value)"
                    @change="
                      handleCheckItem(item.value, !values.includes(item.value))
                    "
                  />
                  {{ item.label }}
                </label>
              </li>
            </template>
          </ul>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import Utils from "./utils";

interface Props {
  label: string;
  options: unknown[];
  columns: number;
  values: unknown[];
}

export default defineComponent({
  props: {
    label: {
      type: String,
      default: "MultiCheck",
    },
    options: {
      type: Array,
      default() {
        return [];
      },
    },
    columns: {
      type: Number,
      default: 2,
    },
    values: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  setup(props: Props, context) {
    const sequences = computed(() => {
      if (props.options.length && props.columns) {
        return Utils.getSequences(props.options.length, props.columns);
      } else {
        return [];
      }
    });

    const checkAll = computed(() => {
      // If every option is checked, then checkAll is checked, otherwise checkAll is unchecked
      return props.options.every((item: any) =>
        props.values.includes(item.value)
      );
    });

    const handleCheckAll = (checked: boolean): void => {
      // check all options or none option
      context.emit("optionChange", checked ? [...props.options] : []);
    };

    const handleCheckItem = (value: string, checked: boolean): void => {
      const tempValues = [...props.values];
      if (checked) {
        // add value to values
        tempValues.push(value);
      } else {
        // remove value from values
        const removeIndex: number = tempValues.findIndex((v) => v === value);
        tempValues.splice(removeIndex, 1);
      }
      // collect options from values
      const items = props.options.filter((item: any) =>
        tempValues.includes(item.value)
      );
      context.emit("optionChange", items);
    };

    return {
      sequences,
      checkAll,
      handleCheckAll,
      handleCheckItem,
    };
  },
});
</script>

<style scoped>
.MultiCheck {
  box-shadow: 0 0 10px 2px rgba(194, 193, 193, 0.2);
  background-color: #ffffff;
}

.MultiCheck_Title {
  background-color: #dadada;
  line-height: 30px;
  padding: 0 10px;
  font-size: 20px;
  color: #000000;
}

.MultiCheck_Content {
  padding: 10px;
}

.MultiCheck_Panel {
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  padding: 5px;
}

.MultiCheck_Column {
  flex: 1;
  margin: 0px;
  padding: 0px;
  list-style: none;
}

.MultiCheck_Column_Item {
  line-height: 24px;
  padding: 0px;
}

.MultiCheck_Column_Label {
  font-size: 16px;
  color: #000000;
  cursor: pointer;
}

.MultiCheck_Column_Check {
  vertical-align: middle;
  margin-right: 7px;
  margin-left: 2px;
  cursor: pointer;
}
</style>
