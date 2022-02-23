<!--
 * @Author: saber
 * @Date: 2022-02-23 14:54:09
 * @LastEditTime: 2022-02-23 14:56:32
 * @LastEditors: saber
 * @Description: 
-->
<script lang="ts">
import baseProps from "../base/props";
import type { BasePropsType, EmitsI as BaseEmitsI } from "../base/props";
import useBaseHook from "../base/hooks";

export default {
  name: "ZoomCenterTransition",
  inheritAttrs: false,
};
</script>
<script setup lang="ts">
const props = defineProps({
  ...baseProps
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
    enter-active-class="zoomIn"
    move-class="zoom-move"
    leave-active-class="zoomOut">
    <slot></slot>
  </component>
</template>