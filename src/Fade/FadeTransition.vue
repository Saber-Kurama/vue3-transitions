<!--
 * @Author: saber
 * @Date: 2022-02-18 10:12:22
 * @LastEditTime: 2022-02-18 11:26:28
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

const componentType = computed(() => {
  return props.group ? TransitionGroup : Transition;
});
// const a = props.duration;
//    if( typeof(a) === 'number'){
//        a
//    } else {
//     a.saber
//    }
</script>
<template>
<TransitionGroup move-class=""></TransitionGroup>
  <component :is="componentType" >
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
}
.fade-move {
  transition: transform 0.3s ease-out;
}
</style>
