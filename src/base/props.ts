import type { PropType } from "vue";

interface EnterLeaveI {
  enter: number;
  leave: number;
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
