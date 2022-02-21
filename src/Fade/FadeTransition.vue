<!--
 * @Author: saber
 * @Date: 2022-02-18 10:12:22
 * @LastEditTime: 2022-02-21 18:32:16
 * @LastEditors: saber
 * @Description: 
-->
<script lang="ts">
import { computed, PropType, Transition, TransitionGroup, useAttrs } from "vue";
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
const attrs = useAttrs();
// todo: 这个 hook的逻辑对吗， 如果 props 发生修改呢
const { componentType, beforeEnter } = useBaseHook(props as BasePropsType, emits);

const hooks = {
  ...attrs,
  onBeforeEnter: beforeEnter
}
console.log('hooks---', hooks)
// const a = props.duration;
//    if( typeof(a) === 'number'){
//        a
//    } else {
//     a.saber
//    }

// const beforeEnter = (el: HTMLElement) => {
//   if (el) {
//     let enterDuration = 300;
//     if (typeof props.duration === "number") {
//       enterDuration = props.duration;
//     } else {
//       enterDuration = props.duration.enter;
//     }
//     if (el.style) {
//       el.style.animationDuration = `${enterDuration}ms`;
//       el.style.color = 'red';
//     }
//     emits('before-enter', el)
//   }
// };
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

<style>
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.fadeIn {
  animation-name: fadeIn;
  animation-duration: 0.3s;
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.fadeOut {
  animation-name: fadeOut;
  animation-duration: 0.3s;
}
.fade-move {
  transition: transform 0.3s ease-out;
}
</style>
