import {
  computed,
  PropType,
  Transition,
  TransitionGroup,
  watchEffect,
} from "vue";
import baseProps from "./props";
import type { BasePropsType } from './props';

const useBaseHooks = (props: BasePropsType) => {
  // watchEffect(() => {
  const componentType = computed(() => {
    return props.group ? TransitionGroup : Transition;
  });
  // todo： props 是 proxy 的原因吗
  const beforeEnter = (el: HTMLElement) => {
    if (el) {
      let enterDuration = 300;
      if (typeof props.duration === "number") {
        enterDuration = props.duration;
      } else {
        enterDuration = props.duration?.enter;
      }
      if (el.style) {
        el.style.animationDuration = `${enterDuration}ms`;
        el.style.color = "red";
      }
      // emits('before-enter', el)
    }
  };
  const enter = (el: HTMLElement) => {
    console.log("props-enter-----", props);
  };

  const setTransformOrigin = (el: HTMLElement) => {
    if(props.origin){
      el.style.transformOrigin = props.origin
    }
  }
  return {
    componentType,
    beforeEnter,
    enter,
    setTransformOrigin
  };
  // })
};

export default useBaseHooks;
