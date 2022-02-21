/*
 * @Author: saber
 * @Date: 2022-02-21 09:55:38
 * @LastEditTime: 2022-02-21 22:33:49
 * @LastEditors: saber
 * @Description: 
 */
import type { PropType } from "vue";

export interface EnterLeaveI {
  enter: number;
  leave: number;
}

export interface EmitsI {
  (e: 'before-enter', el: HTMLElement): void;
  (e: 'after-enter', el: HTMLElement): void;
  (e: 'before-leave', el: HTMLElement): void;
  (e: 'leave', el: HTMLElement, done: any): void;
  (e: 'after-leave', el: HTMLElement): void;
}
export interface BasePropsType {
  duration: number | { enter: number; leave: number };
  delay: number | { enter: number; leave: number };
  group?: boolean;
  tag: string;
  origin: string;
  styles: CSSStyleDeclaration
}

export default {
  duration: {
    type: [Number, Object],
    default: 300,
  },
  delay: {
    tyep: [Number, Object] as PropType<number | EnterLeaveI>,
    default: 0,
  },
  group: Boolean as PropType<boolean>,
  /**
   * transition-group 使用的
   */
  tag: {
    type: String,
    default: 'span'
  },
  origin: {
    type: String,
    default: ''
  },
  styles: {
    type: Object,
    default: () => {
      return {
        animationFillMode: 'both',
        animationTimingFunction: 'ease-out'
      }
    }
  }
};
