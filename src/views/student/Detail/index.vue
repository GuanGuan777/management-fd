<template>
  <div class="Detail">
    <header class="head">
      <div class="container">
        <el-tag>2019-2020 2</el-tag>
        <div class="title">
          <h2>高等数学</h2>
        </div>
      </div>
    </header>
    <div class="mainColumn">
      <section>
        <el-timeline>
          <el-timeline-item
            v-for="item in fileterResourceList"
            :key="item.resourceId"
            timestamp="2018/4/12"
            placement="top"
          >
            <resource-card :data="item"></resource-card>
          </el-timeline-item>
        </el-timeline>
      </section>
      <aside-card></aside-card>
    </div>
  </div>
</template>
<script>
import { getCourseDetail } from "@/api/user";
import { getResource } from "@/api/course";
import resourceCard from "@/components/global/resourceCard";
import asideCard from "./components/asideCard";
import { mapGetters } from "vuex";

export default {
  name: "Detail",
  data() {
    return {
      resourceList: []
    };
  },
  computed: {
    ...mapGetters(["category"]),
    fileterResourceList() {
      return this.category === undefined
        ? this.resourceList
        : this.resourceList.filter(item => item.type === this.category.cid);
    }
  },
  watch: {
    resourceList: {
      handler: function(newVal, oldVal) {
        this.resourceList = newVal;
      },
      deep: true
    }
  },
  methods: {
    getResourceList(id) {
      getResource(id)
        .then(result => {
          console.log("----------");
          this.resourceList = result.data.data;
          console.log(this.resourceList);
        })
        .catch(err => {
          console.error(err);
        });
    }
  },
  mounted() {
    this.getResourceList(this.$route.params.cid);
  },
  components: {
    resourceCard: resourceCard,
    asideCard: asideCard
  }
};
</script>
<style lang="scss" scoped>
.Detail {
  // box-sizing: content-box;
  .head {
    background: #626262;
    // background: #eee;
    color: rgb(255, 255, 255);
    font-weight: normal;
    .container {
      margin: 0 auto;
      width: 1100px;
      width: 1100px;
      padding-top: 40px;
      padding-bottom: 30px;
      .el-tag {
        color: #626262;
        background-color: #fff;
        font-weight: 600;
        font-family: Helvetica, Arial, sans-serif;
      }
      .title {
        margin-top: 15px;
        h2 {
          font-size: 22px;
          margin: 0;
          line-height: 1.5em;
        }
      }
    }
  }
  .mainColumn {
    margin: 20px auto 30px;
    width: 1100px;
    display: flex;
    section {
      background-color: #fff;
      width: 70%;
    }
    aside {
      width: 30%;
      // width: 300px;
      margin-left: 50px;
      // position: fixed;
      // left: 1150px;
    }
  }
}
</style>
