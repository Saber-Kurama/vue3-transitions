/*
 * @Author: saber
 * @Date: 2022-02-18 10:12:22
 * @LastEditTime: 2022-02-18 18:52:06
 * @LastEditors: saber
 * @Description: 
 */
import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
import App from './App.vue'

createApp(App).use(ArcoVue, {}).mount('#app')
