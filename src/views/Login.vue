<template>
  <div class="login">
    <div class="login-wrap" v-show="showLogin">
      <img class="login_logo" src="../assets/login_logo.jpg" />
      <div class="login_input">
        <h1>登录</h1>
        <input type="text" placeholder="请输入用户名" v-model="username" />
        <input type="password" placeholder="请输入密码" v-model="password" />
        <button v-on:click="login">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import { setCookie } from "../plugins/cookie";
export default {
  name: "login",
  data() {
    return {
      showLogin: true,
      showRegister: false,
      username: "",
      password: "",
      newUsername: "",
      newPassword: ""
    };
  },
  mounted() {},
  methods: {
    login() {
      if (this.username == "" || this.password == "") {
        alert("请输入用户名或密码");
      } else {
        // this.$router.push("/home");
        // setCookie('username',this.username,1000*60);
        /*接口请求*/
        let data = {
          "Login[username]": this.username,
          "Login[password]": this.password
        };
        this.$api.login(data).then(res => {
          if (res.isPass == false) {
            alert("密码或者账号错误");
          } else {
            setCookie("username", this.username, 1000 * 60);
            this.$router.push("/home");
          }
        });
      }
    }
  }
};
</script>

<style scoped>
.login {
  width: 100%;
  height: 100%;
  background: url("../assets/login_bg.jpg");
  position: relative;
}
.login_logo {
  width: 240px;
}
.login-wrap {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 300px;
  padding: 20px;
  background: #fff;
  display: flex;
  justify-content: space-around;
}

h1 {
  margin: 30px 0 40px;
}
input {
  display: block;
  width: 250px;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
  margin-bottom: 10px;
  outline: none;
  border: 1px solid #888;
  padding: 10px;
  box-sizing: border-box;
}

button {
  display: block;
  width: 250px;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
  border: none;
  background-color: #41b883;
  color: #fff;
  font-size: 16px;
}
</style>
