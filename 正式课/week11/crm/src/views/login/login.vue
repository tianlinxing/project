<template>
  <div class="bg">
    <div class="login_box">
      <el-input v-model="name" placeholder="请输入用户名" class="mg_20"></el-input>
      
      <el-input placeholder="请输入密码" v-model="password" show-password class="mg_20"></el-input>
      <el-button type="primary" class="mg_20" @click="fn">登录</el-button>
      <el-button type="primary">注册</el-button>
    </div>
  </div>
</template>

<script>
// 导入login 函数
import { login } from "@/api/getData.js";
export default {
  data() {
    return {
      name: "",
      password: ""
    };
  },

  methods: {
    // token
    fn() {
      // login({ name: this.name, psd: this.password })返回值就是一个promise实例 所以可以直接 .then();
      login({ name: this.name, psd: this.password }).then(data => {
        console.log(data.errorCode);

        if (data.errorCode === 0) {
          this.$router.push("/table");
        } else {
          this.$message.error('密码错误');
        }
      });
      // name 或者 psd 这两个属性名 是后台规定的
      // 点击登录按钮 把用户名和密码都发给后台
      // 后台验证通过之后 会给前端一个对应的字段
    }
  }
};
</script>

<style lang="less" scoped>
.bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background: salmon;
  .login_box {
    width: 250px;
    height: 250px;
    text-align: center;
    padding: 20px;
    border: 1px solid #ccc;
    background: #fff;
    margin: 120px auto;
    .mg_20 {
      margin: 20px auto;
    }
  }
}
</style>