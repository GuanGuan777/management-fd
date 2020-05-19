<template>
  <div class="coverUpload">
    <el-upload
      class="avatar-uploader"
      action="https://localhost:8085/api/v1/uploadFile"
      :show-file-list="true"
      :on-success="handleAvatarSuccess"
      :http-request="handleUploadCover"
      :before-upload="beforeAvatarUpload"
    >
      <img v-if="imageUrl" :src="imageUrl" class="avatar" />
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </div>
</template>
<script>
import { upload } from "@/api/resource";
export default {
  name: "coverUpload",
  data() {
    return {
      imageUrl: ""
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    handleUploadCover(param) {
      console.log("-----------------------");
      const formData = new FormData();
      formData.append("file", param.file);
      upload(formData)
        .then(result => {
          console.log("成功上传");
          this.$emit("getCover", result.data.fileUri);
          param.onSuccess();
        })
        .catch(err => {
          console.log("失败上传");
          param.onError();
        });
    }
  },
  mounted() {},
  components: {}
};
</script>
<style lang="scss" scoped>
.coverUpload {
  display: flex;
  justify-content: center;
  align-items: center;
  .avatar-uploader {
    // .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    width: 178px;
    height: 178px;
    &:hover {
      border-color: #409eff;
    }
    // }
    .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 178px;
      height: 178px;
      line-height: 178px;
      text-align: center;
    }
    .avatar {
      width: 178px;
      height: 178px;
      display: block;
    }
  }
}
</style>
