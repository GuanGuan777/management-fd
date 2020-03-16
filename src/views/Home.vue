<template>
  <div class="home">
    <Header names="宝宝"></Header>
  </div>
</template>

<script>
// @ is an alias to /src

// import Header from "../components/Header.vue";
import Header from "@/components/Header.vue";
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    Header
  }
};
</script>

<style lang="scss" scoped>
</style>
