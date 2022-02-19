import type { PropType } from 'vue'

export default {
  duration: {
    type: [Number, Object] as PropType<number | EnterLeaveI>,
    default: 300,
  },
  delay: {
    tyep: [Number, Object] as PropType<number | EnterLeaveI>,
    default: 0,
  },
  group: Boolean as PropType<boolean>,
};
