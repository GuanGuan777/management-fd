<template>
  <div class="header">{{names}}</div>
</template>

<script>
export default {
  name: "Header",
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  height: 80px;
  background-color: pink;
}
</style>
