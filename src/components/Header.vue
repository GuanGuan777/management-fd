<template>
  <div class="header">{{ names }}</div>
</template>

<script>
export default {
  name: "header",
  data() {
    return {
      name: "fjsdkl"
    };
  },
  props: {
    names: String
  }
};
</script>

<!-- add "scoped" attribute to limit css to this component only -->
<style scoped lang="scss">
.header {
  height: 80px;
  background-color: pink;
}
</style>
