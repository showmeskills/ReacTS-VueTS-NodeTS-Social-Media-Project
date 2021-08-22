<template>
  <div class="home">
    <NavBar />
    <Featured type="movie"/>
    <List/>
    <List/>
    <List/>
    <List/>
    <List/>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import NavBar from "@/components/Navbar.vue";
import Featured from "@/components/Featured.vue";
import List from "@/components/List.vue";
export default defineComponent({
  components: {
    NavBar,
    Featured,
    List
  },
  setup() {
    return {};
  },
});
</script>
<style lang='scss' scoped>
.home {
  background-color: var(--main-color);
  overflow: hidden;
}
</style>