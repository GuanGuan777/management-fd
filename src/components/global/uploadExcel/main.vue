<template>
  <el-upload
    action="/EXCEL"
    drag
    :auto-upload="false"
    :on-change="handleChange"
    accept=".xlsx, .xls"
    :before-upload="render"
    :on-preview="render"
  >
    <i class="el-icon-upload"></i>
    <div class="el-upload__text">
      将文件拖到此处，或
      <em>点击上传</em>
    </div>
    <div slot="tip" class="el-upload__tip">只能上传xlsx/xls文件，且不超过500kb</div>
  </el-upload>
</template>
<script>
import XLSX from "xlsx";

export default {
  name: "uploadExcel",
  data() {
    return {
      excelData: {
        header: null,
        results: null
      },
      loading: false
    };
  },
  props: {},
  methods: {
    async handleChange(file, filelist) {
      console.log("exit", file, filelist);
      await this.renderData(file.raw);
      this.$emit("excelData", this.excelData);
    },

    async render(file) {
      file = !(file instanceof File) && file.raw;
      await this.renderData(file);
      this.$emit("excelData", this.excelData);
    },
    generateData({ header, results }) {
      this.excelData.header = header;
      this.excelData.results = results;
    },
    getHeaderRow(sheet) {
      const headers = [];
      const range = XLSX.utils.decode_range(sheet["!ref"]);
      let C;
      const R = range.s.r;
      /* start in the first row */
      for (C = range.s.c; C <= range.e.c; ++C) {
        /* walk every column in the range */
        const cell = sheet[XLSX.utils.encode_cell({ c: C, r: R })];
        /* find the cell in the first row */
        let hdr = "UNKNOWN " + C; // <-- replace with your desired default
        if (cell && cell.t) hdr = XLSX.utils.format_cell(cell);
        headers.push(hdr);
      }
      return headers;
    },
    renderData(file) {
      this.loading = true;
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = e => {
          const data = e.target.result;
          const workbook = XLSX.read(data, { type: "array" });
          const firstSheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[firstSheetName];
          const header = this.getHeaderRow(worksheet);
          const results = XLSX.utils.sheet_to_json(worksheet);
          this.generateData({ header, results });
          this.loading = false;
          resolve();
        };
        reader.readAsArrayBuffer(file);
      });
    },
    handleSuccess({ results, header }) {
      this.tableData = results;
      this.tableHeader = header;
    }
  },
  mounted() {},
  components: {}
};
</script>
<style lang="scss" scoped>
</style>
