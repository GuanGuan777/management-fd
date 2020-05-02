
<template>
  <el-card class="profileCard" :body-style="{ padding: '0px' }">
    <!-- <div slot="header">个人信息</div> -->
    <section class="content">
      <aside class="aside">
        <div class="user-card">
          <el-avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            :size="90"
          ></el-avatar>
        </div>
        <div class="more-info">
          <h1>{{ info.name }}</h1>
        </div>
      </aside>
      <ul>
        <li class="item">
          <div>学号：{{info.sno}}</div>
        </li>
        <li class="item">
          <div>班级：{{info.classes}}</div>
        </li>
      </ul>
    </section>
  </el-card>
</template>
<script>
export default {
  name: "profileCard",
  data() {
    return {
      info: {
        name: "哈哈",
        sno: "d78913re45",
        classes: "微机1605"
      }
    };
  },
  methods: {},
  mounted() {},
  components: {}
};
</script>
<style lang="scss" scoped>
.profileCard {
  margin: 20px;
  box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.4);
  border-radius: 6px;

  .content {
    // padding: 20px 30px 50px 30px;
    display: flex;
    .aside {
      background: linear-gradient(rgb(146, 206, 175), rgb(162, 204, 182));
      width: 300px;
      display: flex;
      flex-direction: column;
      .user-card {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 20px;
      }
      .more-info {
        font-size: 20px;
      }
    }
    .item {
      height: 50px;
      display: flex;
      align-items: center;
    }
  }
}
</style>
<style scoped>
.profileCard >>> .el-card__header {
  /* height: 30px; */
  text-align: left;
}
</style>