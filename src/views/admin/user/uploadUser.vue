<template>
  <div class="uploadUser" ref="upload">
    <upload-excel @excelData="getData"></upload-excel>
    <el-select select v-model="type" placeholder="请选择添加的角色">
      <el-option label="管理员" :value="1"></el-option>
      <el-option label="学生" :value="2"></el-option>
      <el-option label="教师" :value="3"></el-option>
    </el-select>
    <el-button
      style="margin-left: 10px;"
      size="small"
      type="success"
      @click="submitUpload"
      >上传到服务器</el-button
    >
    <el-table
      :data="tableData"
      border
      highlight-current-row
      style="width: 100%;margin-top:20px;"
    >
      <el-table-column
        v-for="item of tableHeader"
        align="center"
        :key="item"
        :prop="item"
        :label="item"
      >
        <template slot-scope="{ row }">
          <template v-if="row.edit">
            <el-input
              v-model="row[`${item}`]"
              class="edit-input"
              size="small"
            />
          </template>
          <span v-else>{{ row[`${item}`] }}</span>
        </template>
      </el-table-column>
      <el-table-column v-if="tableData" align="center" label="操作">
        <template slot-scope="{ row }">
          <el-button
            v-if="row.edit"
            type="success"
            size="small"
            icon="el-icon-circle-check-outline"
            @click="confirmEdit(row)"
            >确认</el-button
          >
          <el-button
            v-else
            type="primary"
            size="small"
            icon="el-icon-edit"
            @click="row.edit = !row.edit"
            >编辑</el-button
          >
          <template v-if="row.edit">
            <el-button
              class="cancel-btn"
              size="small"
              icon="el-icon-refresh"
              type="warning"
              @click="cancelEdit(row)"
              >取消</el-button
            >
          </template>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import uploadExcel from "@/components/global/uploadExcel";
import { addUsers } from "@/api/user";

export default {
  name: "uploadUser",
  data() {
    return {
      tableData: [],
      tableHeader: [],
      loading: false,
      type: 2,
    };
  },
  methods: {
    submitUpload() {
      addUsers(this.tableData, this.type)
        .then((result) => {})
        .catch((err) => {});
    },
    getData(data) {
      this.loading = true;
      this.tableHeader = data.header;
      this.tableData = data.results.map((item) => {
        this.$set(item, "edit", false);
        return item;
      });
      console.log(this.tableData, this.tableHeader);
      this.loading = false;
    },
    cancelEdit(row) {
      row.edit = false;
      this.$message({
        message: "取消",
        type: "warning",
      });
    },
    confirmEdit(row) {
      row.edit = false;
      this.$message({
        message: "编辑中",
        type: "success",
      });
    },
  },
  mounted() {},
  components: {
    uploadExcel: uploadExcel,
  },
};
</script>
<style lang="scss" scoped>
.uploadUser {
}
</style>
