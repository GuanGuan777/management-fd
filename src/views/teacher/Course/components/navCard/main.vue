<template>
  <nav class="navCard">
    <el-button class="nav-button" type="primary" @click="dialogFormVisible = true">上传资源</el-button>
    <el-dialog title="上传资源" :visible.sync="dialogFormVisible">
      <el-steps :active="active" finish-status="success" align-center>
        <el-step title="输入资源类型"></el-step>
        <el-step title="输入标题"></el-step>
        <el-step title="上传资源"></el-step>
      </el-steps>
      <el-form :model="form" ref="form" label-position="top">
        <template v-if="active === 0">
          <el-form-item label="请输入您要上传的资源类型">
            <el-select v-model="form.type" placeholder="资源分类">
              <el-option
                v-for="item in categoryMap"
                :key="item"
                :label="item.title"
                :value="item.cid"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <div>
              <el-button type="primary" @click="handleNext">下一步</el-button>
              <el-button @click="handleCancel">取消</el-button>
            </div>
          </el-form-item>
        </template>
        <template v-else-if="active === 1">
          <h1>请输入您要上传资源的标题</h1>
          <el-form-item label="标题" required>
            <el-input v-model="form.title" placeholder="请输入标题"></el-input>
          </el-form-item>
          <el-form-item label="描述">
            <el-input v-model="form.desc" placeholder="请输入描述"></el-input>
          </el-form-item>
          <el-form-item label>
            <el-button type="success" @click="handlePrev">上一步</el-button>
            <el-button type="primary" @click="handleNext">下一步</el-button>
            <el-button @click="handleCancel">取消</el-button>
          </el-form-item>
        </template>
        <template v-else-if="active === 2">
          <template v-if="form.type === 0">
            <el-form-item required label="网盘地址">
              <el-input v-model="form.url" placeholder="网盘地址"></el-input>
            </el-form-item>
            <el-form-item label="提取码">
              <el-input v-model="form.code" placeholder="提取码"></el-input>
            </el-form-item>
          </template>
          <template v-else-if="form.type === 3">
            <el-form-item required label="链接地址">
              <el-input v-model="form.url" placeholder="链接地址"></el-input>
            </el-form-item>
          </template>
          <template v-else-if="form.type === 4">
            <el-form-item label>
              <pic-upload :limitNum="9"></pic-upload>
            </el-form-item>
          </template>
          <template v-else-if="form.type === 1 || form.type === 2">
            <el-form-item label="上传封面">
              <cover-upload :limitNum="1"></cover-upload>
            </el-form-item>
            <el-form-item label="上传文件">
              <video-upload @getFile="getFile"></video-upload>
            </el-form-item>
          </template>
          <el-form-item>
            <el-button type="success" @click="handlePrev">上一步</el-button>
            <el-button type="primary" @click="onSubmit">确认</el-button>
            <el-button @click="handleCancel">取消</el-button>
          </el-form-item>
        </template>
      </el-form>
    </el-dialog>
  </nav>
</template>
<script>
import { categoryMap } from "@/utils/index.js";
import picUpload from "./components/picUpload";
import coverUpload from "./components/coverUpload";
import videoUpload from "./components/videoUpload";
import { addResource } from "@/api/resource";
// import coverUpload from "./components/coverUpload";
export default {
  name: "navcard",
  data() {
    return {
      dialogFormVisible: false,
      form: {
        type: 1,
        title: "",
        url: "",
        code: "",
        cover: "",
        fileName: ""
      },
      active: 0,
      categoryMap: categoryMap
    };
  },
  methods: {
    getFile(file) {
      let { data } = file;
      this.$set(this.form, "fileName", file.fileName);
      this.$set(this.form, "fileType", file.fileType);
      this.$set(this.form, "url", file.fileDownloadUri);
      this.$set(this.form, "fileSize", file.size);
    },
    handleAdd() {},
    handleNext() {
      this.active++;
    },
    handleCancel() {
      this.dialogFormVisible = false;
    },
    handlePrev() {
      this.active--;
    },
    customUpload(file) {
      // fileupload(file)
      //   .then((result) => {})
      //   .catch((err) => {});
    },
    onSubmit() {
      addResource(this.form)
        .then(result => {
          console.info(result);
        })
        .catch(err => {
          console.erroe(err);
        });
    }
  },
  mounted() {
    console.log(categoryMap);
    this.$set(this.form, "courseId", this.cid);
  },
  components: {
    picUpload: picUpload,
    videoUpload: videoUpload,
    coverUpload: coverUpload
  },
  props: ["cid"]
};
</script>
<style lang="scss" scoped>
.navCard {
  width: 190px;
  height: 300px;
  // background-color: #000;
  .nav-button {
    width: 100%;
    height: 36px;
    background: rgb(77, 105, 142);
    border: none;
    &:hover {
      background-color: rgb(68, 93, 125);
    }
  }

  .el-steps {
  }

  .el-form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 30px;
    .el-form-item {
      width: 500px;
    }
  }
}
</style>
