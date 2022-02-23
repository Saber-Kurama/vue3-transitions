/*
 * @Author: saber
 * @Date: 2022-02-21 09:55:38
 * @LastEditTime: 2022-02-23 11:59:18
 * @LastEditors: saber
 * @Description:
 */
import {
  computed,
  PropType,
  Transition,
  TransitionGroup,
  useAttrs,
  watchEffect,
} from "vue";
import baseProps from "./props";
import type { BasePropsType, EmitsI, EnterLeaveI } from "./props";

const useBaseHooks = (props: BasePropsType, emits: EmitsI) => {
  // watchEffect(() => {
  const attrs = useAttrs();
  const componentType = computed(() => {
    return props.group ? TransitionGroup : Transition;
  });
  // todo： props 是 proxy 的原因吗
  // 进入前事件
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
      }
      const enterDelay = (props.delay as EnterLeaveI).enter ?? props.delay;
      el.style.animationDelay = `${enterDelay}ms`;
      setStyles(el);
      emits("before-enter", el);
    }
  };
  // 离开前事件
  const beforeLeave = (el: HTMLElement) => {
    const leaveDuration =
      (props.duration as EnterLeaveI).leave ?? props.duration;
    el.style.animationDuration = `${leaveDuration}ms`;

    const leaveDelay = (props.delay as EnterLeaveI).leave ?? props.delay;
    el.style.animationDelay = `${leaveDelay}ms`;
    setStyles(el);
    emits("before-leave", el);
  };
  const afterEnter = (el: HTMLElement) => {
    cleanUpStyles(el)
    emits('after-enter', el)
  };
  // 离开事件
  const leave = (el: HTMLElement, done: any) => {
    setAbsolutePosition(el);
    emits("leave", el, done);
    done();
  };
  const afterLeave = (el: HTMLElement) => {
    cleanUpStyles(el)
    emits('after-leave', el)
  };
  const setStyles = (el: HTMLElement) => {
    setTransformOrigin(el);
    Object.keys(props.styles).forEach((key: any) => {
      const styleValue = props.styles[key];
      if (styleValue) {
        el.style[key] = styleValue;
      }
    });
  };
  const cleanUpStyles = (el: HTMLElement) => {
    Object.keys(props.styles).forEach((key: any) => {
      const styleValue = props.styles[key];
      if (styleValue) {
        el.style[key] = "";
      }
    });
    el.style.animationDuration = "";
    el.style.animationDelay = "";
  };
  const setAbsolutePosition = (el: HTMLElement) => {
    if (props.group) {
      el.style.position = "absolute";
    }
  };
  const setTransformOrigin = (el: HTMLElement) => {
    if (props.origin) {
      el.style.transformOrigin = props.origin;
    }
  };
  const hooks = {
    ...attrs,
    onBeforeEnter: beforeEnter,
    onAfterEnter: afterEnter,
    onBeforeLeave: beforeLeave,
    onLeave: leave,
    onAfterLeave: afterLeave
  }
  return {
    componentType,
    beforeEnter,
    beforeLeave,
    leave,
    setStyles,
    cleanUpStyles,
    setAbsolutePosition,
    setTransformOrigin,
    hooks
  };
  // })
};

export default useBaseHooks;
