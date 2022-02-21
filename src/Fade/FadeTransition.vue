<!--
 * @Author: saber
 * @Date: 2022-02-18 10:12:22
 * @LastEditTime: 2022-02-21 20:38:13
 * @LastEditors: saber
 * @Description: 
-->
<script lang="ts">
import baseProps from "../base/props";
import type { BasePropsType, EmitsI as BaseEmitsI} from "../base/props";
import useBaseHook from "../base/hooks";

export default {
  name: "FadeTransition",
  // https://vuejs.org/guide/components/attrs.html#nested-component-inheritance
  inheritAttrs: false,
};
</script>
<script setup lang="ts">
const props = defineProps({
  ...baseProps,
});

// const emits = defineEmits<EmitsI>();
interface EmitsI extends BaseEmitsI{
    (e: 'emits', data: number): void
    (e: 'ws', data: string): void
}
// todo:
// https://github.com/vitejs/vite/issues/5476
// https://github.com/vuejs/core/issues/4294
const emits = defineEmits<EmitsI>()

// // const emits = defineEmits(['before-enter'])
// const attrs = useAttrs();
// todo: 这个 hook的逻辑对吗， 如果 props 发生修改呢
const { componentType, hooks } = useBaseHook(props as BasePropsType, emits);

// const hooks = {
//   ...attrs,
//   onBeforeEnter: beforeEnter
// }
// console.log('hooks---', hooks)

</script>
<template>
  <!-- <transition
    @enter="
      (el) => {
        beforeEnter(el);
      }
    "
    enter-active-class="fadeIn"
    move-class="fade-move"
    leave-active-class="fadeOut"
  >
    <slot></slot
  ></transition> -->
 
  <component
    :is="componentType"
    :tag="props.tag"
    v-bind="hooks"
    enter-active-class="fadeIn"
    move-class="fade-move"
    leave-active-class="fadeOut"
  >
    <slot></slot>
  </component>
</template>


