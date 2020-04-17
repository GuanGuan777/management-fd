<template>
  <div class="student">
    <div class="filter-container">
      <el-input
        v-model="listQuery.name"
        placeholder="姓名"
        style="width: 200px;"
        class="filter-item"
        @keyup.enter.native="handleFilter"
      />
      <el-input
        v-model="listQuery.sno"
        placeholder="学号"
        style="width: 200px;"
        class="filter-item"
        @keyup.enter.native="handleFilter"
      />
      <el-select
        v-model="listQuery.sex"
        placeholder="性别"
        clearable
        style="width: 90px"
        class="filter-item"
      >
        <el-option label="男" :value="1"></el-option>
        <el-option label="女" :value="0"></el-option>
      </el-select>
      <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">查询</el-button>
      <el-button
        :loading="downloadLoading"
        class="filter-item"
        type="primary"
        icon="el-icon-download"
        @click="handleDownload"
      >导出</el-button>
    </div>

    <el-table
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%;"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="table-expand">
            <el-form-item label="用户名">
              <span>{{ props.row.username }}</span>
            </el-form-item>
            <el-form-item label="密码">
              <span>{{ props.row.password }}</span>
            </el-form-item>
            <el-form-item label="课程">
              <el-tag
                type="success"
                v-for="item in props.row.courses.split(',')"
                :key="item"
              >{{ item }}</el-tag>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <!-- @sort-change="sortChange" -->
      <el-table-column label="ID" prop="studentId" sortable align="center" width="80">
        <template slot-scope="{ row }">
          <span>{{ row.studentId }}</span>
        </template>
      </el-table-column>
      <el-table-column label="姓名" width="110px" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="出生年月" width="150px" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.birthdate }}</span>
        </template>
      </el-table-column>
      <el-table-column label="入学日期" width="150px" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.admissionDate }}</span>
        </template>
      </el-table-column>
      <el-table-column label="毕业日期" width="150px" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.graduationDate }}</span>
        </template>
      </el-table-column>
      <el-table-column label="邮箱" width="150px" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.email }}</span>
        </template>
      </el-table-column>
      <el-table-column label="联系电话" width="150px" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.phone }}</span>
        </template>
      </el-table-column>
      <el-table-column label="班级" width="110px" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.classes }}</span>
        </template>
      </el-table-column>
      <el-table-column label="性别" class-name width="100">
        <template slot-scope="{ row }">
          <el-tag :type="row.sex | statusFilter">{{ sex(row.sex) }}</el-tag>
        </template>
      </el-table-column>
      <!-- <el-table-column label="课程" class-name="courses-col">
        <template slot-scope="{row}"></template>
      </el-table-column>-->
      <el-table-column label="操作" align="center" width="300" class-name="small-padding fixed-width">
        <template slot-scope="{ row, $index }">
          <el-button type="primary" size="mini" @click="handleUpdate(row)">编辑</el-button>
          <el-button size="mini" type="success" @click="handleModifyStatus(row, 'locked')">锁定</el-button>
          <el-button size="mini" @click="handleModifyPassword(row)">设置密码</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(row, $index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- <pagination
      v-show="total>0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="getList"
    />-->

    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form
        ref="dataForm"
        :rules="rules"
        :model="temp"
        label-position="left"
        label-width="70px"
        style="width: 400px; margin-left:50px;"
      >
        <el-form-item label="姓名" prop="name">
          <el-input v-model="temp.name" />
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-select v-model="temp.sex" placeholder="请选择" clearable>
            <el-option label="男" :value="1"></el-option>
            <el-option label="女" :value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="出生年月" prop="birthdate">
          <el-date-picker v-model="temp.birthdate" type="datetime" placeholder="请选择一个日期" />
        </el-form-item>
        <el-form-item label="在校时长" prop="schoolTime">
          <!-- <el-date-picker v-model="temp.admissionDate" type="date" placeholder="请选择一个日期" /> -->
          <el-date-picker
            v-model="temp.schoolTime"
            type="daterange"
            range-separator="-"
            format="yyyy 年 MM 月 dd 日"
            start-placeholder="入学日期"
            end-placeholder="毕业日期"
            value-format="timestamp"
            @input="onClick"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="班级" prop="classes">
          <el-input v-model="temp.classes" />
          <!-- <el-select v-model="temp.classes" class="filter-item" placeholder="请选择班级">
            <el-option v-for="item in classesOption" :key="item" :label="item" :value="item" />
          </el-select>-->
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="temp.email" />
        </el-form-item>
        <el-form-item label="联系方式" prop="phone">
          <el-input v-model="temp.phone" />
        </el-form-item>
      </el-form>
      <div>{{ temp }}</div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="updateData()">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { parseTime } from "@/utils";
export default {
  name: "student",
  data() {
    return {
      dialogFormVisible: false,
      dialogStatus: "",
      textMap: {
        update: "编辑"
      },
      value1: undefined,
      temp: {
        studentId: undefined,
        sno: "",
        name: "",
        sex: 0,
        classes: "",
        courses: "",
        email: "",
        phone: "",
        admissionDate: "",
        graduationDate: "",
        birthdate: ""
      },
      list: [
        {
          studentId: 1,
          sno: "19160296",
          name: "李焕宇",
          sex: 0,
          classes: "微机1605班",
          createTime: "2020-02-21T00:38:40.000+0000",
          updateTime: "2020-04-13T21:43:01.000+0000",
          courses: "离散数学,计算机组成原理,操作系统",
          userId: 7,
          role: "STUDENT",
          email: "afyad@123.com",
          phone: "12323431243",
          admissionDate: "2020-04-09",
          graduationDate: "2020-04-09",
          birthdate: "2020-04-13"
        },

        {
          studentId: 1,
          sno: "19160296",
          name: "李焕宇",
          sex: 0,
          classes: "微机1605班",
          createTime: "2020-02-21T00:38:40.000+0000",
          updateTime: "2020-04-13T21:43:01.000+0000",
          courses: "离散数学,计算机组成原理,操作系统",
          userId: 7,
          role: "STUDENT",
          email: "afyad@123.com",
          phone: "12323431243",
          admissionDate: "2020-04-09",
          graduationDate: "2020-04-09",
          birthdate: "2020-04-13"
        }
      ],
      listQuery: {
        page: 1,
        limit: 20,
        studentId: 1,
        sno: "19160296",
        name: "李焕宇",
        sex: undefined,
        college: "东北农业大学",
        classes: "微机1605班",
        create_time: null,
        update_time: null,
        courses: null,
        userId: 7,
        role: "STUDENT",
        sort: "+id"
      },
      downloadLoading: false,
      bookType: "xlsx",
      multipleSelection: undefined
    };
  },
  filters: {
    statusFilter(status) {
      console.warn(status, typeof status);
      const sexMap = {
        0: "success",
        1: "info"
      };
      return sexMap[status];
    }
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleDownload() {
      this.downloadLoading = true;
      import("@/vendor/Export2Excel").then(excel => {
        const tHeader = [
          "学号",
          "姓名",
          "性别",
          "出生年月",
          "入学日期",
          "毕业日期",
          "班级",
          "邮箱",
          "联系电话"
        ];
        const filterVal = [
          "sno",
          "name",
          "sex",
          "birthdate",
          "admissionDate",
          "graduationDate",
          "classes",
          "email",
          "phone"
        ];
        let tmpList = this.multipleSelection || this.list;
        let data = this.formatJson(filterVal, tmpList);
        console.log(excel);
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: "学生用户",
          bookType: this.bookType
        });
        this.downloadLoading = false;
      });
    },
    formatJson(filterVal, list) {
      return list.map(item => {
        return filterVal.map(i => {
          if (i === "sex") {
            return item[i] ? "男" : "女";
          }
          return item[i];
        });
      });
    },
    handleUpdate(row) {
      this.temp = Object.assign({}, row);
      this.dialogStatus = "编辑";
      this.temp.schoolTime = [
        new Date(row.admissionDate).getTime(),
        new Date(row.graduationDate).getTime()
      ];
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        this.$refs["dataForm"].clearValidate();
      });
    },
    onClick(e) {
      // this.$nextTick(() => {
      //   this.temp.schoolTime = null;
      //   this.$set(this.temp, "schoolTime", [
      //     new Date(this.admissionDate).getTime(),
      //     new Date(this.graduationDate).getTime()
      //   ]);
      // });
    }
  },
  mounted() {},
  components: {},
  computed: {
    sex() {
      return function(sex) {
        return sex === "0" ? "女" : "男";
      };
    }
  }
};
</script>
<style lang="scss" scoped>
.student {
  padding: 20px;
}
</style>
