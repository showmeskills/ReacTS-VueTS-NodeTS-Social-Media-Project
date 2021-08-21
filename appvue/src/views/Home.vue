<template>
  <div class="home">
    <NavBar />
    <Featured/>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import NavBar from "@/components/Navbar.vue";
import Featured from "@/components/Featured.vue";
export default defineComponent({
  components: {
    NavBar,
    Featured
  },
  setup() {
    return {};
  },
});
</script>
<style lang='scss' scoped>
.home {
  background-color: var(--main-color);
  height: 100%;
}
</style>