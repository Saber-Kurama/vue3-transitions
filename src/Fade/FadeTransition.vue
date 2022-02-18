<!--
 * @Author: saber
 * @Date: 2022-02-18 10:12:22
 * @LastEditTime: 2022-02-18 19:06:59
 * @LastEditors: saber
 * @Description: 
-->
<script lang="ts">
import { computed, PropType, Transition, TransitionGroup } from "vue";

export default {
  name: "FadeTransition",
};
</script>
<script setup lang="ts">
interface EnterLeaveI {
  enter: number;
  leave: number;
}
const props = defineProps({
  duration: {
    type: [Number, Object] as PropType<number | EnterLeaveI>,
    default: 300,
  },
  delay: {
    tyep: [Number, Object] as PropType<number | EnterLeaveI>,
    default: 0,
  },
  group: Boolean as PropType<boolean>,
});

const emits = defineEmits(['before-enter']);

const componentType = computed(() => {
  return props.group ? TransitionGroup : Transition;
});
// const a = props.duration;
//    if( typeof(a) === 'number'){
//        a
//    } else {
//     a.saber
//    }

const beforeEnter = (el: HTMLElement) => {
  if (el) {
    let enterDuration = 300;
    if (typeof props.duration === "number") {
      enterDuration = props.duration;
    } else {
      enterDuration = props.duration.enter;
    }
    if (el.style) {
      el.style.animationDuration = `${enterDuration}ms`;
      el.style.color = 'red';
    }
    emits('before-enter', el)
  }
};
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
    @beforeEnter="($el: HTMLElement) => beforeEnter($el)" 
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
