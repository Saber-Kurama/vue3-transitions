<!--
 * @Author: saber
 * @Date: 2022-02-23 14:41:02
 * @LastEditTime: 2022-02-23 14:54:55
 * @LastEditors: saber
 * @Description: 
-->
<script lang="ts">
import baseProps from "../base/props";
import type { BasePropsType, EmitsI as BaseEmitsI } from "../base/props";
import useBaseHook from "../base/hooks";

export default {
  name: "SlideXRightTransition",
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

interface EmitsI extends BaseEmitsI {}
// todo:
const emits = defineEmits<EmitsI>();
// todo:
const { componentType, hooks } = useBaseHook(props as BasePropsType, emits);
</script>
<template>
  <component
    :is="componentType"
    :tag="tag"
    type="animation"
    v-bind="hooks"
    enter-active-class="slideXRightIn"
    move-class="slide-move"
    leave-active-class="slideXRightOut">
    <slot></slot>
  </component>
</template>