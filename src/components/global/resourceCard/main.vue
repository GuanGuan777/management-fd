<template>
  <el-card class="resourceCard">
    <div slot="header">
      <span>
        <tag :data="category(data.type)"></tag>
      </span>
    </div>
    <template v-if="data.type === 0">
      <section>
        <el-link :underline="false" :href="data.url" target="_blank">{{data.title}}</el-link>

        <template v-if="data.extractingCode">
          <el-divider></el-divider>
          <span class="code">{{ `验证码：${data.extractingCode}` }}</span>
          <el-divider></el-divider>
          <el-button
            type="primary"
            v-clipboard:copy="data.extractingCode"
            v-clipboard:success="handleCopySuccess"
          >复制验证码</el-button>
        </template>
      </section>
    </template>
    <template v-else-if="data.type === 3">
      <section>
        <el-link :underline="false" :src="data.url">
          {{
          data.title
          }}
        </el-link>
        <el-divider></el-divider>
      </section>
    </template>
    <template v-else-if="data.type === 4">
      <section>
        <el-link :underline="false" :src="data.url">
          {{
          data.title
          }}
        </el-link>
        <el-divider></el-divider>
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
      </section>
    </template>
    <template v-else-if="data.type === 2">
      <section>
        <el-link :underline="false">{{ data.title }}</el-link>
        <el-divider></el-divider>
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
        <el-dialog title="视频播放" :visible.sync="dialogVideoVisible" @close="handleClose">
          <my-video ref="myPlayer" :src="data.url" :cover="data.cover"></my-video>
          <!-- <video class="video" controls>
              <source src="data.content.url" type="video/mp4" />
          </video>-->
        </el-dialog>
        <el-divider></el-divider>
        <el-button type="primary" @click="handleDownload(data.downloadUrl)">下载</el-button>
      </section>
    </template>
    <template v-else>
      <section>
        <el-link :underline="false">{{ data.title }}</el-link>
        <el-divider></el-divider>
        <el-button type="primary" @click="handleDownload(data.downloadUrl)">下载</el-button>
      </section>
    </template>
  </el-card>
</template>
<script>
import { download } from "@/api/resource";
import myVideo from "@/components/global/myVideo";
import clipboard from "@/directive/clipboard/index.js";
import tag from "@/components/global/tag";
import { parseCategory, option } from "@/utils/index.js";
export default {
  name: "resourceCard",
  data() {
    return {
      playerOptions: option,
      dialogVideoVisible: false
    };
  },
  computed: {
    category: () => c => {
      return parseCategory(c);
    },
    thumbnails() {
      return this.data.url.split(",");
    },
    player() {
      return this.$refs.myPlayer.$children[0].player;
    }
  },
  directives: {
    clipboard
  },
  methods: {
    handleClose() {
      this.player.pause();
    },
    handleCopySuccess() {
      this.$message({
        message: "复制成功",
        type: "success",
        duration: 1500
      });
    },
    handleDownload(url) {
      // this.$router.push(url);
      location.href = url;
      // download(this.data.fileName)
      // .then(res => {
      // console.log(result);
      // let blob = new Blob([res.data], { type: "application/octet-stream" });
      // let objectUrl = URL.createObjectURL(blob); // 创建URL
      // location.href = objectUrl;
      // URL.revokeObjectURL(objectUrl); // 释放内存
      // })
      // .catch(err => {
      //   console.error(err);
      // });
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
  props: {
    data: {
      type: Object
    }
  }
};
</script>
<style lang="scss" scoped>
.resourceCard {
  border-radius: 12px;
  box-shadow: 0 8px 16px 0 rgba(7, 17, 27, 0.1);
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(7, 17, 27, 0.2);
    cursor: pointer;
  }
  section {
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    .cover {
      cursor: pointer;
      margin: 10px 0;
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
    .code {
      font-size: 18px;
    }
    .el-link {
      font-size: 22px;
    }
  }
}
</style>
