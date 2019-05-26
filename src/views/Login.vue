<template>
    <div class="login" id="particles">
        <div class="login-wrap" v-show="showLogin">
            <div class="login_input">
                <h1>管理员登录</h1>
                <div class="login_input2">
                    <img src="../assets/user_icon_copy.png">
                    <input type="text" placeholder="请输入用户名" v-model="username">
                </div>
                <div class="login_input2">
                    <img src="../assets/lock_icon_copy.png">
                    <input type="password" placeholder="请输入密码" v-model="password">
                </div>
                <button class="login_go" v-on:click="login">登录</button>
            </div>
        </div>
    </div>
</template>

<script>
    import particles from 'particles.js'
    import particlesConfig from "../assets/particles.json";
import { setCookie } from "../plugins/cookie";
    import {  Message } from "element-ui";
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
  mounted() {
      particlesJS("particles", particlesConfig);
      // particlesJS.load('app','http://huangdingbo.work/school/api/web/index.php?r=json/index')
  },
  methods: {
    login() {
      if (this.username == "" || this.password == "") {
          Message.error('请输入用户名或密码');
        // alert("");
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
              Message.error('用户名或密码错误');
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
  background: url("../assets/bg.jpg");
  position: relative;
    z-index: 5;
}
.login_logo {
  width: 240px;
}
.login-wrap {
    position: absolute;
    height: 300px;
    width: 240px;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    padding:100px 40px 40px 40px;
    box-shadow: -15px 15px 15px rgba(6, 17, 47, 0.7);
    background: linear-gradient(230deg, rgba(53, 57, 74, 0) 0%, rgb(0, 0, 0) 100%);
}

h1 {
    color: #D3D7F7;
    height: 60px;
    text-align: left;
    font-size: 20px;
}
.login_input2{display: flex;align-items: center;padding-left:30px;}
.login_input input {
    font-size: 14px;
    margin-top: -2px;
    background: rgba(57, 61, 82, 0);
    left: 0;
    padding: 10px ;
    border-top: 2px solid rgba(57, 61, 82, 0);
    border-bottom: 2px solid rgba(57, 61, 82, 0);
    border-right: none;
    border-left: none;
    outline: none;
    font-family: 'Gudea', sans-serif;
    box-shadow: none;
    color: #afb1be;
}

button {
    outline:0 none !important; blr:expression(this.onFocus=this.blur());
    border-radius: 50px;
    background: transparent;
    padding: 10px 50px;
    border: 2px solid #4FA1D9;
    color: #4FA1D9;
    text-transform: uppercase;
    font-size: 11px;
    -webkit-transition-property: background,color;
    transition-property: background,color;
    -webkit-transition-duration: .2s;
    transition-duration: .2s;
}
button:hover{
    color: white;
    background: #4FA1D9;
    cursor: pointer;
    -webkit-transition-property: background,color;
    transition-property: background,color;
    -webkit-transition-duration: .2s;
    transition-duration: .2s;
}
#particles{
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: cover;
}

    .login_go{    position: relative;
        top: 40px;
        left: 0;
        width: 60%;
        right: 0;
        margin: auto;}
</style>
