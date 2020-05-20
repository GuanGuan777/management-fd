<template>
  <el-card class="ResourceItem" :body-style="{ padding: '0px' }">
    <div class="left">
      <tag :data="category(data.type)"></tag>
    </div>
    <div class="menu">
      <template v-if="data.type === 0 || data.type === 3">
        <div class="up">
          <h1>{{ data.title }}</h1>
          <div>
            链接：
            <el-link v-if="data.url" :underline="false" :href="data.url">{{ data.url }}</el-link>
          </div>
        </div>
        <div class="down" v-if="data.extractingCode">
          <span>{{ `提取码：${data.extractingCode}` }}</span>
        </div>
      </template>
      <template v-else-if="data.type === 1">
        <div class="up">
          <h1>{{ data.title }}</h1>
          <el-link v-if="data.url" :underline="false">
            {{
            data.url
            }}
          </el-link>
        </div>
      </template>
      <template v-else-if="data.type === 2">
        <div class="up">
          <h1>{{ data.title }}</h1>
          <div style="position:relative;margin:10px 0;">
            <el-image
              class="cover"
              :src="data.cover"
              @click="dialogVideoVisible = true"
              style="width: 160px; height: 100px;border-radius:8px;"
            >
              <div slot="placeholder" class="image-slot">
                加载中
                <span class="dot">...</span>
              </div>
            </el-image>
            <icon v-if="data.type === 2" class="iconfont fd-bofang icon-start"></icon>
          </div>
          <span>{{ data.description }}</span>
          <el-dialog title="视频播放" :visible.sync="dialogVideoVisible" @close="handleClose">
            <my-video ref="myPlayer" :src="data.url" :cover="data.cover"></my-video>
            <!-- <video class="video" controls>
              <source src="data.content.url" type="video/mp4" />
            </video>-->
          </el-dialog>
        </div>
      </template>
      <template v-else-if="data.type === 4">
        <div class="up">
          <h1>{{ data.title }}</h1>
          <el-image
            class="thuminals"
            v-for="item in thumbnails"
            :key="item"
            :src="item"
            fit="contain"
            style="width: 80px; height: 100px;border-radius:8px;"
            :preview-src-list="thumbnails"
          >
            <div slot="placeholder" class="image-slot">
              加载中
              <span class="dot">...</span>
            </div>
          </el-image>
        </div>
      </template>
      <template v-else>
        <div class="up">
          <h1>{{ data.title }}</h1>
        </div>
      </template>
    </div>
    <div>
      <div class="ebg">
        <el-button type="primary" @click="handleUpdate" icon="el-icon-edit" circle></el-button>
        <el-button type="danger" @click="handleDelete" icon="el-icon-delete" circle></el-button>
      </div>
    </div>
  </el-card>
</template>
<script>
import { parseCategory, option } from "@/utils/index.js";
import myVideo from "@/components/global/myVideo";
import tag from "@/components/global/tag";
import { deleteResource, updateResource } from "@/api/resource";
import { MessageBox, Message } from "element-ui";

export default {
  name: "ResourceItem",
  data() {
    return {
      dialogVideoVisible: false,
      playerOptions: option
    };
  },
  computed: {
    category: () => c => {
      return parseCategory(c);
    },
    player() {
      return this.$refs.myPlayer.$children[0].player;
    },
    thumbnails() {
      return this.data.url.split(",");
    }
  },
  watch: {
    data: {
      handler: function(newVal, oldVal) {
        this.data = newVal;
        console.warn("this");
        console.log(this.data);
        // this.$set(this.playerOptions.sources, 0, {
        //   type: "video/mp4",
        //   src: newVal.content.url,
        // });
        if (this.data.type === 2) {
          console.log(this.playerOptions.sources);
        }
      },
      deep: true
    }
  },
  methods: {
    handleClose() {
      this.player.pause();
    },
    handleUpdate(id) {
      updateResource(id, this.form)
        .then(result => {
          console.log(result);
        })
        .catch(err => {});
    },
    handleDelete() {
      deleteResource(this.data.resourceId)
        .then(result => {
          console.log(result);
          this.$message({
            message: "删除成功",
            type: "success"
          });
        })
        .catch(err => {});
    }
  },
  mounted() {
    let op = this.data.url;
    this.$set(this.playerOptions.sources, 0, {
      type: "video/mp4",
      src: op
    });
    if (this.data.type === 2) {
      console.log(this.playerOptions.sources);
    }
  },
  components: {
    tag: tag,
    myVideo: myVideo
  },
  props: ["data"]
};
</script>
<style lang="scss" scoped>
.ResourceItem {
  text-align: left;
  // box-shadow: none;
  border: none;
  border-radius: 5px;
  &:hover {
    background: #f4f7fb;
  }

  .left {
    width: 100px;
    display: flex;
    justify-content: center;
  }

  .menu {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    margin: 0 20px;
    // width: 550px;
    overflow: hidden;
    .up {
      width: 550px;
      flex-shrink: 0;
      .el-link {
        display: block;
        overflow: hidden; //超出的文本隐藏
        text-overflow: ellipsis; //溢出用省略号显示
        white-space: nowrap; //溢出不换行
      }
      h1 {
        margin: 0;
        font-size: 18px;
      }
      .cover {
        cursor: pointer;
        margin: 10px 0;
      }
      .thuminals {
        margin: 20px 10px 20px 0;
      }
      .icon-start {
        cursor: pointer;
        font-size: 18px;
        z-index: 1000;
        color: #0c8164;
        position: absolute;
        left: 73px;
        top: 40px;
        color: #ccc;
      }
    }
  }

  .ebg {
    // width: 120px;
  }
}
</style>
<style scoped>
.ResourceItem >>> .el-card__body {
  margin: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
