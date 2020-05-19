<template>
  <div>
    <el-upload
      ref="upload"
      class="picUpload"
      action="#"
      list-type="picture-card"
      :limit="limitNum"
      :file-list="fileArr"
      :on-change="handleChange"
      :http-request="handleUploadPic"
      :auto-upload="false"
    >
      <i slot="default" class="el-icon-plus"></i>
      <div slot="file" slot-scope="{ file }">
        <img class="el-upload-list__item-thumbnail" :src="file.url" alt />
        <span class="el-upload-list__item-actions">
          <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
            <i class="el-icon-zoom-in"></i>
          </span>
          <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleDownload(file)">
            <i class="el-icon-download"></i>
          </span>
          <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
            <i class="el-icon-delete"></i>
          </span>
        </span>
      </div>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt />
      </el-dialog>
    </el-upload>
    <el-button type="success" @click="handleSubmit" style="margin-top:20px;">上传至服务器</el-button>
  </div>
</template>
<script>
import { multipleUpload } from "@/api/resource";
export default {
  name: "picUpload",
  data() {
    return {
      dialogVisible: false,
      disabled: false,
      fileArr: [],
      formData: ""
    };
  },
  methods: {
    handleSubmit() {
      this.formData = new FormData();
      this.$refs.upload.submit();
      multipleUpload(this.formData)
        .then(result => {
          console.info(result);
          console.log(result);
        })
        .catch(err => {
          console.error(err);
        });
    },
    handleChange() {},
    handleRemove(file) {
      this.$refs.upload.handleRemove(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload(file) {
      //TODO下载图片
      console.log(file);
    },
    handleUploadPic(param) {
      console.log("----------------------------");
      console.log(this.fileArr);
      console.log(param.file);
      this.formData.append("files", param.file);
    }
  },
  mounted() {},
  components: {},
  props: ["limitNum"]
};
</script>
<style lang="scss" scoped>
.picUpload {
}
</style>
