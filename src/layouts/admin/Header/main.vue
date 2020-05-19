<template>
  <div class="Header">
    <div class="info">
      <el-dropdown @command="handleLogout" placement="bottom" trigger="click">
        <el-button>
          <div>
            <el-avatar
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              :size="30"
            ></el-avatar>
            <span class="name">{{ info.name }}</span>
          </div>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item>注销登陆</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      info: {
        name: "哈哈哈"
      }
    };
  },
  methods: {
    handleLogout(commond) {
      this.$store
        .dispatch("user/resetToken")
        .then(result => {})
        .catch(err => {});
      this.$router.push("/login");
    }
  },
  mounted() {},
  components: {}
};
</script>
<style lang="scss" scoped>
.Header {
  width: 100%;
  margin-right: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .info {
    border: none;
    .el-button {
      border: none;
      border-radius: 18px;
      padding: 3px 5px;
      div {
        display: flex;
        align-items: center;
        justify-content: center;
        .name {
          margin-left: 2px;
        }
      }
    }
  }
}
</style>
