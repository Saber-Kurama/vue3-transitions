## 组件  ZoomCenterTransition




## Demos

```json type=description
[
  {
    "kind": "file",
    "title": "组件名",
    "memberOf": "组件类型，例如：数据输入",
    "description": "描述你的组件。"
  },
  {
    "kind": "member",
    "title": "基本用法",
    "description": "描述你的例子"
  }
]
```

```vue
<template>
  <tooltip-button tip="button tip">Demo Basic</tooltip-button>
</template>

<script lang="ts">
import TooltipButton from '@dangojs/saber-button-vue-test';

// 目前vue-live导出defineComponent存在问题，所以仅支持普通对象导出。
export default {
  name: 'BasicDemo',
  components: {
    TooltipButton,
  },
};
</script>

```

