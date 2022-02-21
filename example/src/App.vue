<!--
 * @Author: saber
 * @Date: 2022-02-18 10:12:22
 * @LastEditTime: 2022-02-21 18:24:05
 * @LastEditors: saber
 * @Description: 
-->
<script setup lang="ts">
import { ref, reactive } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import { FadeTransition } from "../../src";

const show = ref(true);
const group = ref(false);
const isGroup = ref(false);
const duration = ref(300);
const delay = ref(0);
const transitionName = ref<string>("FadeTransition");

const TComponents: any = {
  FadeTransition,
};
const transitionOptions = [
  {
    label: "Fade",
    options: ["FadeTransition"],
  },
  {
    label: "Zoom",
    options: ["ZoomCenterTransition", "ZoomXTransition", "ZoomYTransition"],
  },
  {
    label: "Collapse",
    options: ["CollapseTransition"],
  },
  {
    label: "Scale",
    options: ["ScaleTransition"],
  },
  {
    label: "Slide",
    options: [
      "SlideYUpTransition",
      "SlideYDownTransition",
      "SlideXLeftTransition",
      "SlideXRightTransition",
    ],
  },
];

const triggerTransition = () => {
  if (group.value) {
  } else {
    show.value = !show.value;
  }
};
// todo: 组件提示？
const beforeEnter = () => {
  console.log('beforeEnter-----')
}
</script>

<template>
  <div class="main-content">
    <div class="transition-wrapper">
      <component
        :is="TComponents[transitionName]"
        appear
        v-if="!isGroup"
        :duration="duration"
        :delay="delay"
        @beforeEnter="() => { beforeEnter() }"
      >
        <div v-show="show">
          <div class="box">
            <p>{{ transitionName }}</p>
          </div>
        </div>
      </component>
    </div>

    <div class="transition-select">
      <a-space>
        <a-select :style="{ width: '320px' }" v-model="transitionName">
          <a-optgroup
            v-for="group in transitionOptions"
            :key="group.label"
            :label="group.label"
          >
            <a-option
              v-for="transition in group.options"
              :key="transition"
              :value="transition"
              :label="transition"
            ></a-option>
          </a-optgroup>
        </a-select>
        <a-button @click="triggerTransition">{{
          isGroup ? "添加一项" : "切换"
        }}</a-button>
        <a-select :style="{ width: '320px' }">
          <a-option>Beijing</a-option>
          <a-option>Shanghai</a-option>
          <a-option>Guangzhou</a-option>
        </a-select>
      </a-space>
    </div>
    <div class="transition-settings">
      <a-space>
        <div class="transition-settings_setting">
          Duration
          <a-input-number
            :style="{ width: '320px' }"
            placeholder="Please Enter Duration"
            v-model="duration"
            step="100"
            mode="button"
            class="input-demo"
          />
        </div>
        <div class="transition-settings_setting">
          Delay
          <a-input-number
            :style="{ width: '320px' }"
            placeholder="Please Enter"
            v-model="delay"
            step="100"
            mode="button"
            class="input-demo"
          />
        </div>
        <div class="transition-settings_setting">
          switch
          <a-input-number
            :style="{ width: '320px' }"
            placeholder="Please Enter"
            :default-value="500"
            mode="button"
            class="input-demo"
          />
        </div>
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
.transition-settings {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.transition-settings_setting {
  display: flex;
  flex-direction: column;
  margin-left: 0px;
}
.transition-select {
  width: 100%;
}

.box {
  margin: 10px 0px;
  width: 100%;
  height: 200px;
  border-radius: 4px;
  background-color: var(--secondary-color);
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  margin-right: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box p {
  color: white;
}
</style>
