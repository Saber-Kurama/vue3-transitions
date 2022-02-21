/*
 * @Author: saber
 * @Date: 2022-02-21 09:55:38
 * @LastEditTime: 2022-02-21 18:39:14
 * @LastEditors: saber
 * @Description: 
 */
import {
  computed,
  PropType,
  Transition,
  TransitionGroup,
  watchEffect,
} from "vue";
import baseProps from "./props";
import type { BasePropsType, EmitsI } from './props';

const useBaseHooks = (props: BasePropsType, emits: EmitsI) => { 
  // watchEffect(() => {
  const componentType = computed(() => {
    return props.group ? TransitionGroup : Transition;
  });
  // todo： props 是 proxy 的原因吗
  const beforeEnter = (el: HTMLElement) => {
    console.log('xxxxx')
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
      setStyles(el);
      emits('before-enter', el)
    }
  };
  const enter = (el: HTMLElement) => {
    console.log("props-enter-----", props);
  };
  
  const setStyles = (el: HTMLElement) => {
    setTransformOrigin(el);
    Object.keys(props.styles).forEach((key: any) => {
      const styleValue = props.styles[key]
      if (styleValue) {
        el.style[key] = styleValue
      }
    })
  }
  const setAbsolutePosition = (el: HTMLElement) => {
    if(props.group){
      el.style.position = 'absolute'
    }
  }
  const setTransformOrigin = (el: HTMLElement) => {
    if(props.origin){
      el.style.transformOrigin = props.origin
    }
  }
  return {
    componentType,
    beforeEnter,
    enter,
    setStyles,
    setAbsolutePosition,
    setTransformOrigin
  };
  // })
};

export default useBaseHooks;
