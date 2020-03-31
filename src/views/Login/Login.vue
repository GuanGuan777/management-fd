<template>
  <div class="login">
    <el-button type="primary" @click="handleLogin">
      登录
    </el-button>
    <el-tag type="danger" closable></el-tag>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Login",
  data() {
    return {};
  },
  methods: {
    handleLogin() {
      //TODO：处理登录
    }
  },
  components: {}
};
</script>

<style lang="scss" scoped></style>
