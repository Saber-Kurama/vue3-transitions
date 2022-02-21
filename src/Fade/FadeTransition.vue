<!--
 * @Author: saber
 * @Date: 2022-02-18 10:12:22
 * @LastEditTime: 2022-02-21 22:26:09
 * @LastEditors: saber
 * @Description: 
-->
<script lang="ts">
import baseProps from "../base/props";
import type { BasePropsType, EmitsI as BaseEmitsI} from "../base/props";
import useBaseHook from "../base/hooks";
import { useAttrs } from "vue";

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
const attrs = useAttrs();
console.log('attrs111', attrs)
// todo: 这个 hook的逻辑对吗， 如果 props 发生修改呢
const { componentType, hooks, beforeEnter } = useBaseHook(props as BasePropsType, emits);

const beforeEnter1 = (el: any) => {
  emits('beforeEnter', el)
  console.log('beforeEnterbeforeEnterbeforeEnterbeforeEnter')
}
const hooks1 = {
  ...attrs,
  onBeforeEnter: () => {}
}
console.log('hooks---', hooks1)

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
 <!-- v-bind="hooks" -->
 <!-- @beforeEnter="(el: any)=> {beforeEnter1(el)}" -->
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


