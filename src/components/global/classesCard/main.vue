<template>
  <div class="classesCard">
    <div class="container">
      <el-avatar
        :size="50"
        :style="{ color: '#fff', fontSize: '22px', background: `${c}` }"
      >{{ data.title.slice(0, 1) }}</el-avatar>
      <div class="menu">
        <div class="left">
          <div class="title">{{ data.title }}</div>
          <div class="tag">
            <el-tag effect="plain" size="mini">学分 ：{{ data.credit }}</el-tag>
            <el-tag effect="plain" size="mini">学时 ：{{ data.hours }}</el-tag>
          </div>
        </div>
        <div class="right">
          <el-tag v-if="data.category" type="primary" effect="plain">
            {{
            data.category
            }}
          </el-tag>
          <!-- <el-tag type="primary">必修课</el-tag> -->
        </div>
      </div>
      <el-popover placement="bottom" title="标题" width="200" trigger="click">
        <div class="id">{{ `课程编号: ${data.sno}` }}</div>
        <div class="desc">{{ `课程简介: ${data.desc}` }}</div>
        <el-button slot="reference" type="success" icon="el-icon-notebook-2" size="small">课程详情</el-button>
      </el-popover>
      <el-button type="primary" icon="el-icon-notebook-1" size="small" @click="handleResource">课程资源</el-button>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "classesCard",
  data() {
    return {
      // c: "#ccc"
    };
  },
  methods: {
    handleResource() {
      //TODO:跳转资源
      if (this.role === "STUDENT") {
        this.$router.push(`/course/${this.data.cid}`);
      } else if (this.role === "TEACHER") {
        // this.$router.push(`/course/${this.data.cid}`);
        this.$router.push(`/teacher/course/${this.data.cid}`);
      }
    },
    handleDetail() {
      //TODO:课程详情
    }
  },
  mounted() {
    console.log(this.role);
  },
  computed: {
    c() {
      return "#" + ((Math.random() * 0xffffff) << 0).toString(16);
    },
    ...mapGetters(["role"])
  },
  components: {},
  props: {
    data: {
      type: Object
    }
  },
  watch: {
    data: {
      handle: (val, oldval) => {
        this.data = val;
      },
      deep: true
    }
  }
};
</script>
<style lang="scss" scoped>
.classesCard {
  margin: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  &:hover {
    background: #f4f7fb;
  }
  .container {
    display: flex;
    justify-content: start;
    align-items: center;
    // background-color: pink;
    padding: 10px;
    box-sizing: border-box;
    .menu {
      box-sizing: border-box;
      padding-left: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex: 1;
      margin: 0 10px;
      .left {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        .title {
          font-size: 18px;
          font-weight: 600;
          color: #426799;
        }
        .tag {
          margin: 3px 0;
          .el-tag {
            margin-right: 4px;
          }
        }
      }
    }
    .el-button {
      // margin-left: 20px;
    }
  }
}
</style>
