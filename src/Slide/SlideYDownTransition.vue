<!--
 * @Author: saber
 * @Date: 2022-02-23 14:22:54
 * @LastEditTime: 2022-02-23 14:31:45
 * @LastEditors: saber
 * @Description: 
-->
<script lang="ts">
import baseProps from "../base/props";
import type { BasePropsType, EmitsI as BaseEmitsI } from "../base/props";
import useBaseHook from "../base/hooks";
// import { useAttrs } from "vue";

export default {
  name: "SlideYDownTransition",
  // https://vuejs.org/guide/components/attrs.html#nested-component-inheritance
  inheritAttrs: false,
};
</script>
<script setup lang="ts">
const props = defineProps({
  ...baseProps,
  styles: {
    type: Object,
    default: () => {
      return {
        animationFillMode: "both",
        animationTimingFunction: "cubic-bezier(.25,.8,.50,1)",
      };
    },
  },
});

// const emits = defineEmits<EmitsI>();
interface EmitsI extends BaseEmitsI {}
// todo: 如何解决 警告
// https://github.com/vitejs/vite/issues/5476
// https://github.com/vuejs/core/issues/4294
const emits = defineEmits<EmitsI>();

// // const emits = defineEmits(['before-enter'])
// const attrs = useAttrs();
// todo: 这个 hook的逻辑对吗， 如果 props 发生修改呢
const { componentType, hooks } = useBaseHook(props as BasePropsType, emits);
</script>
<template>
  <component
    :is="componentType"
    :tag="tag"
    type="animation"
    v-bind="hooks"
    enter-active-class="slideYDownIn"
    move-class="slide-move"
    leave-active-class="slideYDownOut">
    <slot></slot>
  </component>
</template>
