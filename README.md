# vue3-transitions

根据 `vue2-transitions` 来改写的成 `vue3-transitions`
## 参照

[vue2-transitions](https://github.com/BinarCode/vue2-transitions)

## 安装

```
npm i @dangojs/vue3-transitions
yarn add @dangojs/vue3-transitions
pnpm add @dangojs/vue3-transitions
```

## 使用

```
import { FadeTransition } from '@dangojs/vue3-transitions';
import '@dangojs/vue3-transitions/es/style/style.css';

<FadeTransition></FadeTransition>
```
## 后续规划

[ ] 解决ts提示问题

[ ] 解决样式问题

dango-vue  组件库的发布方案的调整

1. 支持 scss less 和 postcss
2. 考虑 css 独立 和 按需加载
3. 是否集成changeset
