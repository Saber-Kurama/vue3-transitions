<!--
 * @Author: saber
 * @Date: 2022-02-18 10:12:22
 * @LastEditTime: 2022-03-21 20:24:16
 * @LastEditors: saber
 * @Description: 
-->
<script setup lang="ts">
import { ref, reactive } from "vue";
import Icon from "./Icon.vue";
import { generateRGBColors } from "./utils";
// import {
//   FadeTransition,
//   SlideYUpTransition,
//   SlideYDownTransition,
//   SlideXLeftTransition,
//   SlideXRightTransition,
//   ZoomCenterTransition
//   //@ts-ignore
// } from "../../es";
import {
  FadeTransition,
  SlideYUpTransition,
  SlideYDownTransition,
  SlideXLeftTransition,
  SlideXRightTransition,
  ZoomCenterTransition
  //@ts-ignore
} from "@dangojs/vue3-transitions";
import "@dangojs/vue3-transitions/es/style/index";

const show = ref(true);
// const group = ref(false);
const isGroup = ref(false);
const duration = ref(300);
const delay = ref(0);
const colors = ref<any[]>(generateRGBColors(5));
const transitionName = ref<string>("FadeTransition");

const TComponents: any = {
  FadeTransition,
  SlideYUpTransition,
  SlideYDownTransition,
  SlideXLeftTransition,
  SlideXRightTransition,
  ZoomCenterTransition
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
  if (isGroup.value) {
    add();
  } else {
    show.value = !show.value;
  }
};
const randomIndex = () => {
  return Math.floor(Math.random() * colors.value.length);
};
const add = () => {
  console.log("add");
  let newColor = generateRGBColors(1);
  colors.value.splice(randomIndex(), 0, newColor[0]);
};
const remove = (index: number) => {
  colors.value.splice(index, 1);
};
// todo: 组件提示？
const beforeEnter = () => {
  console.log("beforeEnter-----");
};
const onEnter = () => {
  console.log("onenter---");
};
const onAfterEnter = () => {
  console.log("onAfterEnter---");
};
const onEnterCancelled = () => {
  console.log("onEnterCancelled---");
};
const onBeforeLeave = () => {
  console.log("onBeforeLeave---");
};

const onLeave = (el: any, done: any) => {
  console.log("onLeave---");
  done();
};

const afterLeave = () => {
  console.log("afterLeave----");
};

const leaveCancelled = () => {
  console.log("leaveCancelled----");
};
</script>

<template>
  <div class="main-content">
    <div class="transition-wrapper" :class="{ group: isGroup }">
      <!-- <Transition @enter-cancelled="() => {onEnterCancelled()}">
       <div v-if="show">
          <div class="box">
            <p>{{ transitionName }}</p>
          </div>
        </div> 
      </Transition> -->
      <!-- <FadeTransition></FadeTransition> -->
      <component
        :is="TComponents[transitionName]"
        appear
        v-if="!isGroup"
        :duration="duration"
        :delay="delay"
        @before-enter="
          () => {
            beforeEnter();
          }
        "
        @enter="
          () => {
            onEnter();
          }
        "
        @after-enter="
          () => {
            onAfterEnter();
          }
        "
        @enter-cancelled="
          () => {
            onEnterCancelled();
          }
        "
        @before-leave="
          () => {
            onBeforeLeave();
          }
        "
        @leave="(el: any, done: any) => {
          onLeave(el, done);
        }"
        @after-leave="
          () => {
            afterLeave();
          }
        "
        @leave-cancelled="
          () => {
            leaveCancelled();
          }
        "
        move-class="saber"
      >
        <div v-if="show">
          <div class="box">
            <p>{{ transitionName }}</p>
          </div>
        </div>
      </component>
      <div class="transition-group-wrapper" v-else>
        <div>
          <component
            :is="TComponents[transitionName]"
            group
            :duration="duration"
            :delay="delay"
            @before-enter="beforeEnter"
          >
            <!-- <transition-group @before-enter="beforeEnter"> -->
            <Icon
              v-for="(color, index) in colors"
              :color="color"
              :key="color.key"
              :index="index"
              :with-button="true"
              @remove="remove(index)"
            ></Icon>
            <!-- </transition-group> -->
          </component>
        </div>
      </div>
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
          选择
          <a-switch v-model="isGroup">
            <template #checked> Group </template>
            <template #unchecked> Simple </template>
          </a-switch>
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
.transition-group-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
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
