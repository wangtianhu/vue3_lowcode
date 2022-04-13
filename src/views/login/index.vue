<template>
  <div class="login-wrapper">
    <el-card class="login-form-wrapper">
      <div class="title">xx登录系统</div>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="name">
          <el-input
            prefix-icon="el-icon-user"
            v-model="ruleForm.name"
          ></el-input>
        </el-form-item>
        <el-form-item label="用户密码" prop="password">
          <el-input
            prefix-icon="el-icon-key"
            show-password
            v-model="ruleForm.password"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button
            class="btn-log"
            type="primary"
            @click="submitForm('ruleForm')"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
      <div class="text-user">
        <p>管理员账户：admin</p>
        <p>密码：654321</p>
      </div>
      <div class="text-user">
        <p>管理员账户：people</p>
        <p>密码：123456</p>
      </div>
    </el-card>
  </div>
</template>
<script>
import { Message } from "element-ui";
import USER_INFO from "../../mock/user_info";
export default {
  name: "indexPage",
  data() {
    return {
      ruleForm: {
        name: "",
        password: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  created() {
    let ds = 33;
    console.log(ds);
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        window.localStorage.removeItem("userInfo");
        if (valid) {
          let userInfo = USER_INFO.find(
            (v) =>
              v.username === this.ruleForm.name &&
              v.password === this.ruleForm.password
          );
          if (userInfo) {
            window.localStorage.setItem(JSON.stringify(userInfo));
            Message({
              type: "success",
              message: "登录成功",
              showClose: true,
              duration: 3000,
            });
            return this.$router.replace({ path: "/" });
          }
          Message({
            type: "warning",
            message: "账户或者密码错误",
            showClose: true,
            duration: 3000,
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style lang="scss" scoped>
.login-wrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-form-wrapper {
    width: 400px;
    height: auto;
    .title {
      font-size: 32px;
      color: aquamarine;
      width: 100%;
      text-align: center;
      margin-bottom: 20px;
    }
    .text-user {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        font-size: 0.24rem;
        color: #222222;
        font-weight: bold;
      }
    }
    .btn-log {
      width: 100%;
    }
  }
}
</style>
