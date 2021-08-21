<template>
  <div class="featured">
    <img
      src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      alt="feature picture"
    />
  </div>
  <div class="info">
    <img
      src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
      alt="info pic"
    />
    <span class="desc">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae adipisci
      repellendus eum quasi illo, velit numquam, maxime tempora sint deleniti,
      aliquid qui? Facilis, adipisci! Ratione hic repudiandae temporibus eum
      earum?
    </span>
    <div class="buttons">
      <button class="play">
        <PlayCircleOutlined />
        <span>play</span>
      </button>
      <button class="more">
          <InfoCircleOutlined />
          <span>Info</span>
      </button>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import { PlayCircleOutlined,InfoCircleOutlined } from "@ant-design/icons-vue";
export default defineComponent({
  components: {
    [PlayCircleOutlined.name]: PlayCircleOutlined,
    [InfoCircleOutlined.name]:InfoCircleOutlined
  },
  setup() {
    return {};
  },
});
</script>
<style lang='scss' scoped>
</style>