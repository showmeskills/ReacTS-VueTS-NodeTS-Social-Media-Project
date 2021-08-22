<template>
  <div class="list">
    <span class="listTitle">Continue to watch</span>
    <div class="wrapper">
      <LeftOutlined class="sliderArrow left" @click="handleClick('left')" />
      <div class="container" ref="container">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
      <RightOutlined class="sliderArrow right" @click="handleClick('right')" />
    </div>
  </div>
</template>

<script lang='ts'>
import {
  defineComponent,
  getCurrentInstance,
  ComponentInternalInstance,
} from "vue";

import { LeftOutlined, RightOutlined } from "@ant-design/icons-vue";
import ListItem from "@/components/ListItem.vue";
import Common from "@/utils/impl/common";
export default defineComponent({
  components: {
    [LeftOutlined.name]: LeftOutlined,
    [RightOutlined.name]: RightOutlined,
    ListItem,
  },
  setup() {
    const {throttle} = Common();
    const proxy: any = getCurrentInstance();

    
    const handleClick = throttle((direction: string): void => {
      let distance = proxy.refs.container.getBoundingClientRect().x - 50;
    
      console.log(distance);
      if (direction === "left") {
        proxy.refs.container.style.transform = `translateX(${
          distance + 230
        }px)`;
      } else if (direction === "right") {
        proxy.refs.container.style.transform = `translateX(${
          distance - 230
        }px)`;
      }
    },1000);
    return {
      handleClick,
    };
  },
});
</script>
<style lang='scss' scoped>
.list {
  width: 100%;
  margin-top: 10px;
  .listTitle {
    color: white;
    font-size: 20px;
    font-weight: 500;
    margin-left: 50px;
  }
  .wrapper {
    position: relative;
    .sliderArrow {
      width: 50px;
      max-height: 100%;
      background-color: rgba(22, 22, 22, 0.5);
      color: white;
      position: absolute;
      font-size: 35px;
      font-weight: 800;
      z-index: 99;
      top: 0;
      bottom: 0;
      margin: auto;
      cursor: pointer;
      line-height: 4;
      &.left {
        left: 0;
      }
      &.right {
        right: 0;
      }
    }
    .container {
      margin-left: 50px;
      display: flex;
      width: max-content;
      margin-top: 10px;
      transform: translateX(0px);
      transition: all 1s ease;
    }
  }
}
</style>