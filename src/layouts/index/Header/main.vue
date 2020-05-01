<template>
  <header class="Header">
    <div class="container">
      <el-link class="header-title" :underline="false" @click="handleJumpHome">计算机资源库</el-link>
      <div class="second-menu">
        <div class="search">
          <el-input v-model="searchInfo" placeholder="搜索资源"></el-input>
        </div>
        <div class="info">
          <el-dropdown placement="bottom" trigger="click">
            <el-button>
              <div>
                <el-avatar
                  src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                  :size="30"
                ></el-avatar>
                <span class="name">{{info.name}}</span>
              </div>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item>注销登陆</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      searchInfo: "",
      info: {
        name: "哈哈哈"
      }
    };
  },
  methods: {
    handleJumpHome() {
      this.$router.push("/home");
    }
  },
  mounted() {},
  components: {}
};
</script>
<style lang="scss" scoped>
.Header {
  width: 100%;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 0 5px #e5e5e5;
  .container {
    height: 50px;
    width: 1100px;
    margin: 0 auto;
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .header-title {
      font-size: 18px;
      font-weight: 600;
      margin: 0 15px 0 0;
      line-height: 34px;
    }

    .second-menu {
      display: flex;
      align-items: center;

      .search {
      }
      .info {
        margin-left: 20px;
      }

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
}
</style>
