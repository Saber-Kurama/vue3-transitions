<!--
 * @Author: saber
 * @Date: 2022-02-18 10:12:22
 * @LastEditTime: 2022-02-18 19:00:49
 * @LastEditors: saber
 * @Description: 
-->
<script setup lang="ts">
import { ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import { FadeTransition } from "../../src";

const show = ref(true);

const TComponents = {
  fade: FadeTransition,
};
</script>

<template>
  <div><button @click="show = !show">Toggle</button></div>
  <div class="main-content">
    <div class="transition-wrapper">
      <component :is="TComponents['fade']">
        <div v-show="show">
          <div class="box">
            <p>{{ "saber----saber" }}</p>
          </div>
        </div>
      </component>
    </div>

    <div class="transition-select">
      <a-space>
        <a-select :style="{width:'320px'}">
          <a-option>Beijing</a-option>
          <a-option>Shanghai</a-option>
          <a-option>Guangzhou</a-option>
        </a-select>
        <a-select :style="{width:'320px'}">
          <a-option>Beijing</a-option>
          <a-option>Shanghai</a-option>
          <a-option>Guangzhou</a-option>
        </a-select>
        <a-select :style="{width:'320px'}">
          <a-option>Beijing</a-option>
          <a-option>Shanghai</a-option>
          <a-option>Guangzhou</a-option>
        </a-select>
      </a-space>
    </div>
  </div>
</template>

<style>
@import "./assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}

.main-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 320px);
  padding: 0px 40px 80px;
}

.transition-wrapper {
  width: 400px;
  min-height: 250px;
  margin-top: 50px;
  margin-bottom: 20px;
}
.transition-wrapper.group {
  width: 600px;
}
.transition-select{
  width: 100%;
}
</style>
