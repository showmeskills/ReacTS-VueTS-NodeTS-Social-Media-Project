<template>
  <Home />
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import Home from "@/views/Home.vue";

export default defineComponent({
  components: {
    Home,
  },
  setup() {
    return {};
  },
});
</script>
<style lang='scss'>
* {
  margin: 0;
  padding: 0;
}
:root {
  --main-color: #0b0b0b;
}

</style>