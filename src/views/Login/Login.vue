<template>
  <div class="login">
    <div class="container" onclick="onclick">
      <div class="top"></div>
      <div class="bottom"></div>
      <!-- <div > -->
      <el-card class="center" :body-style="{ padding: '0px' }">
        <div slot="header">
          <h2>请登录</h2>
        </div>
        <!-- card body -->
        <el-form :model="form" ref="form">
          <el-form-item>
            <el-input
              class="input"
              placeholder="学号//工号"
              v-model="form.username"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              class="input"
              placeholder="密码"
              v-model="form.password"
            ></el-input>
            <router-link to="/forgetPassword">忘记密码?</router-link>
          </el-form-item>
          <el-form-item>
            <el-button class="submit-button" type="primary" @click="onSubmit"
              >登录</el-button
            >
          </el-form-item>
          <el-form-item>
            <el-radio-group v-model="form.category" @change="handleChange">
              <el-radio-button :label="1" title="学生" class="radio">
                <i class="el-icon-user-solid"></i>
              </el-radio-button>
              <el-radio-button :label="2" title="教师">
                <i class="el-icon-user"></i>
              </el-radio-button>
              <el-radio-button :label="3" title="管理员">
                <i class="el-icon-s-custom"></i>
              </el-radio-button>
            </el-radio-group>
          </el-form-item>
        </el-form>
      </el-card>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: "",
        category: 1
      }
    };
  },
  methods: {
    handleLogin() {
      //TODO：处理登录
    },
    handleChange() {
      // this.category = e;
    }
  },
  components: {}
};
</script>

<style lang="scss" scoped>
*,
*:before,
*:after {
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  font-family: "Raleway", sans-serif;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  // background-color: pink;
  overflow: hidden;
  position: absolute;

  &:hover,
  &:active {
    .top,
    .bottom {
      &:before,
      &:after {
        margin-left: 300px;
        transform-origin: -300px 50%;
      }
    }

    .center {
      opacity: 1;
    }
  }
}

.top,
.bottom {
  &:after,
  &:before {
    display: block;
    content: "";
    position: absolute;
    width: 200vmax;
    height: 200vmax;
    top: 50%;
    left: 50%;
    z-index: 10;
    margin-top: -100vmax;
    transform-origin: 0 50%;
    opacity: 0.65;
    transition: all 0.5s cubic-bezier(0.445, 0.05, 0, 1);
    transition-delay: 0.2s;
  }
}

.top {
  &:before {
    transform: rotate(45deg);
    background: #e46569;
  }
  &:after {
    transform: rotate(135deg);
    background: #ecaf81;
  }
}

.bottom {
  &:before {
    transform: rotate(-45deg);
    background: #60b8d4;
  }
  &:after {
    transform: rotate(-135deg);
    background: #3745b5;
  }
}

.center {
  width: 400px;
  // height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  opacity: 0;
  transition: all 0.5s cubic-bezier(0.445, 0.05, 0, 1);
  transition-delay: 0s;
  color: rgb(34, 32, 32);
  .el-form-item__content {
    margin: 20px auto;
  }
  .submit-button {
    border: 0;
    background: none;
    display: block;
    margin: 10px auto;
    text-align: center;
    border: 2px solid #2ecc71;
    padding: 14px 40px;
    color: #333;
    border-radius: 24px;
    transform: 0.25s;
    cursor: pointer;

    &:hover {
      background-color: #2ecc71;
      color: white;
    }
  }
  .el-radio-button {
    width: 40px;
    height: 40px;
    i {
      font-size: 20px;
      color: #000;
      transition: all 0.8s;
      transition: all 0.8s;
    }

    &:hover {
      i {
        transform: rotate(360deg);
        transition: all 0.2s;
      }
    }
  }
}
</style>

<style scoped>
.center >>> .el-form .el-input__inner {
  border: 0;
  margin: 20px auto;
  background: none;
  display: block;
  text-align: center;
  width: 250px;
  border-radius: 24px;
  transition: 0.25s;
  border: 2px solid #3498db;
  padding: 10px 10px;
  color: #333;
}

.center >>> .el-form .el-input__inner:focus {
  width: 300px;
  border-color: #2ecc71;
}

.center >>> .el-radio-group {
  display: flex;
  justify-content: space-evenly;
}

.center >>> .el-radio-button__inner {
  border-radius: 50%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: chartreuse;
}

.center >>> .el-radio-button__inner:hover {
  background-color: #b3e6e6;
}

.center >>> .el-radio-button.is-active .el-radio-button__inner {
  background-color: #b3e6cc;
}

.center >>> .el-radio-button__orig-radio:checked + .el-radio-button__inner {
  box-shadow: -1px 0 0 0 #b3e6cc;
}
</style>
