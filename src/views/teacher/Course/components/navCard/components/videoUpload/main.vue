<template>
  <el-upload
    class="videoUpload"
    action="https://localhost:8085/api/v1/uploadFile"
    :multiple="false"
    :limit="1"
    :on-remove="handleRemove"
    :on-change="handleChange"
    :file-list="fileList"
    :auto-upload="true"
    :before-upload="handleBeforeUpload"
    drag
    :http-request="customUpload"
  >
    <i class="el-icon-upload"></i>
    <div class="el-upload__text">
      将文件拖到此处，或
      <em>点击上传</em>
    </div>
    <div slot="tip" class="el-upload__tip">上传文件不能超过1000M</div>
  </el-upload>
</template>
<script>
import { upload } from "@/api/resource";
export default {
  name: "videoUpload",
  data() {
    return {};
  },
  methods: {
    handleBeforeUpload(file, fileList) {
      console.log(file, fileList);
      //  const isJPG = file.type === 'image/jpeg';
      //   const isLt2M = file.size / 1024 / 1024 < 2;

      //   if (!isJPG) {
      //     this.$message.error('上传头像图片只能是 JPG 格式!');
      //   }
      //   if (!isLt2M) {
      //     this.$message.error('上传头像图片大小不能超过 2MB!');
      //   }
      //   return isJPG && isLt2M;
    },
    customUpload(param) {
      const formData = new FormData();
      formData.append("file", param.file);
      upload(formData)
        .then(result => {
          console.log("成功上传");
          this.$emit("getFile", result);
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
.videoUpload {
}
</style>
