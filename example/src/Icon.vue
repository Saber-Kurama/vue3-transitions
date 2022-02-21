<!--
 * @Author: saber
 * @Date: 2022-02-21 19:28:45
 * @LastEditTime: 2022-02-21 21:37:51
 * @LastEditors: saber
 * @Description: 
-->
<script lang="ts" setup>
import { computed, type PropType, type StyleValue } from "vue";

const props = defineProps({
  index: {
    type: Number as PropType<number>,
  },
  withButton: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  color: {
    type: Object as PropType<any>,
    default: () => {
      return null;
    },
  },
});

const brightness = computed<number>(() => {
  let { r, g, b } = props.color;
  return 0.299 * r + 0.587 * g + 0.114 * b;
});
const style = computed<StyleValue | undefined>(() => {
  if (props.color) {
    let { r, g, b } = props.color;
    let background = `rgb(${r}, ${g}, ${b})`;
    let shadow = `rgba(${r}, ${g}, ${b}, 0.5)`;
    return {
      "background-color": background,
      "box-shadow": `0px 6px 20px ${shadow}`,
      color: brightness.value > 180 ? "#777" : "#f3f3f3",
    };
  }
  return undefined;
});
const emits = defineEmits<{ (e: "remove", data: { index: number }): void }>();
const remove = () => {
  emits("remove", { index: props.index || 0 });
};
</script>
<template>
  <div class="icon" :style="style" >
    <div v-if="withButton" class="icon-delete-btn" @mousedown="remove"></div>
    <slot> </slot>
  </div>
</template>
<style>
@keyframes shake {
  from {
    transform: rotate(-4deg);
  }
  to {
    transform: rotate(4deg);
  }
}
.icon {
  position: relative;
  background-color: transparent;
  margin: 14px;
  height: 52px;
  width: 52px;
  border-radius: 10px;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.07);
  color: #777;
  font-weight: 900;
  font-size: 12px;
  line-height: 52px;
  text-align: center;
  cursor: pointer;
  display: inline-block;
}
.icon .icon-delete-btn {
  display: block;
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 7px;
  right: 6px;
  top: 6px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  background: rgba(255, 255, 255, 0.2);
}
</style>
