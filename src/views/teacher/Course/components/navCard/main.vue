<template>
  <nav class="navCard">
    <el-button type="primary" @click="dialogFormVisible = true"
      >上传资源</el-button
    >
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-table :data="gridData">
        <el-table-column
          property="date"
          label="日期"
          width="150"
        ></el-table-column>
        <el-table-column
          property="name"
          label="姓名"
          width="200"
        ></el-table-column>
        <el-table-column property="address" label="地址"></el-table-column>
      </el-table>
    </el-dialog>
  </nav>
</template>
<script>
export default {
  name: "navCard",
  data() {
    return {
      dialogFormVisible: false,
    };
  },
  methods: {
    handleAdd() {},
  },
  mounted() {},
  components: {},
};
</script>
<style lang="scss" scoped>
.navCard {
  width: 190px;
  height: 300px;
  // background-color: #000;
  .el-button {
    width: 100%;
    height: 36px;
    background-color: rgb(68, 93, 125);
    border: none;
    &:hover {
      background-color: rgb(212, 223, 237);
    }
  }
}
</style>
