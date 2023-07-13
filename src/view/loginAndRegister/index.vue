<template>
  <div class="out">
    <router-link to="/index" class="login-link">点我进入主页</router-link>
    <div class="container">
        <div class="register-box slide-up" ref="register_box">
            <h2 class="register-title" @click="slider">
                <span>没有账号? 去</span>注册
            </h2>
            <div class="input-box">
                <input type="text" placeholder="用户名" v-model="registerUsername">
                <input type="password" placeholder="密码" v-model="registerPassword">
                <input type="password" placeholder="确认密码" v-model="registerPasswordAgain">
            </div>
            <button @click="register">注册</button>
        </div>
        <div class="login-box" ref="login_box">
            <div class="center">
                <h2 class="login-title" @click="slidel">
                    <span>已有账号? 去</span>登录
                </h2>
                <div class="input-box">
                    <input type="text" placeholder="用户名" v-model="loginUsername">
                    <input type="password" placeholder="密码" v-model="loginPassword">
                </div>
                <button @click="login">登录</button>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import { ElMessage } from 'element-plus';

export default {
  name: 'LoginPage',
  props: {},
  data () {
    return {
      loginUsername: "",
      loginPassword: "",
      registerUsername: "",
      registerPassword: "",
      registerPasswordAgain: ""
    }
  },
  computed: {
   
  },
  mounted(){
    
  },
  methods: {
    slidel(){
      if(this.$refs["login_box"].classList.contains("slide-up")){
        this.$refs["register_box"].classList.add("slide-up");
        this.$refs["login_box"].classList.remove("slide-up");
      }
    },

    slider(){
      ElMessage.warning('当前未开放注册！注册就是个摆设');
      if(this.$refs["register_box"].classList.contains("slide-up")){
        this.$refs["login_box"].classList.add("slide-up");
        this.$refs["register_box"].classList.remove("slide-up");
      }
    },

    login(){
      if(this.loginUsername===""){
        ElMessage.error('用户名不能为空！');
        return;
      }
      if(this.loginPassword===""){
        ElMessage.error('密码不能为空！');
        return;
      }
      //这里加网络请求
      localStorage.setItem("token", "123");
      this.$router.push("/manage");
    },

    register(){
      if(this.registerUsername===""){
        ElMessage.error('用户名不能为空！');
        return;
      }
      if(this.registerPassword===""){
        ElMessage.error('密码不能为空！');
        return;
      }
      if(this.registerPasswordAgain===""){
        ElMessage.error('请再次输入密码！');
        return;
      }
      if(this.registerPassword!==this.registerPasswordAgain){
        ElMessage.error('两次输入的密码不一致！');
        return;
      }
      //这里加网络请求
    },
  },
}
</script>

<style scoped>
  .out{
    min-height: 100vh;
    /* 弹性布局 居中 */
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #94bfb560;
  }

  .container{
      background-color: #222;
      width: 350px;
      height: 550px;
      border-radius: 15px;
      overflow: hidden;
      position: relative;
  }
  .container::after{
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: url("./media/bg.jpg") no-repeat;
      background-size: 500px;
      background-position: left bottom;
      opacity: 0.8;
  }

  .register-box{
      width: 70%;
      position: absolute;
      z-index: 1;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      transition: 0.3s ease;
  }
  .register-title,
  .login-title{
      color: #fff;
      font-size: 27px;
      text-align: center;
  }
  .register-title span,
  .login-title span{
      color: rgba(0,0,0,0.4);
      display: none;
  }
  .register-box .input-box,
  .login-box .input-box{
      background-color: #fff;
      border-radius: 15px;
      overflow: hidden;
      margin-top: 50px;
      opacity: 1;
      visibility: visible;
      transition: 0.6s ease;
  }
  .register-box input,
  .login-box input{
      width: 100%;
      height: 30px;
      border: none;
      border-bottom: 1px solid rgba(0,0,0,0.1);
      font-size: 12px;
      padding: 8px 0;
      text-indent: 15px;
      outline: none;
  }
  .register-box input:last-child,
  .login-box input:last-child{
      border-bottom: none;
  }
  .register-box input::placeholder,
  .login-box input::placeholder{
      color: rgba(0,0,0,0.4);
  }
  .register-box button,
  .login-box button{
      width: 100%;
      padding: 15px 45px;
      margin: 15px 0;
      background: rgba(0,0,0,0.4);
      border: none;
      border-radius: 15px;
      color: rgba(255,255,255,0.8);
      font-size: 13px;
      font-weight: bold;
      cursor: pointer;
      opacity: 1;
      visibility: visible;
      transition: 0.3s ease;
  }
  .register-box button:hover,
  .login-box button:hover{
      background-color: rgba(0,0,0,0.8);
  }

  .login-box{
      position: absolute;
      inset: 0;
      top: 20%;
      z-index: 2;
      background-color: #fff;
      transition: 0.3s ease;
  }
  .login-box::before{
      content: "";
      background-color: #fff;
      width: 200%;
      height: 250px;
      border-radius: 50%;
      position: absolute;
      top: -20px;
      left: 50%;
      transform: translateX(-50%);
  }
  .login-box .center{
      width: 70%;
      position: absolute;
      z-index: 3;
      left: 50%;
      top: 40%;
      transform: translate(-50%,-50%);
  }
  .login-title{
      color: #000;
  }
  .login-box .input-box{
      border: 1px solid rgba(0,0,0,0.1);
  }
  .login-box button{
      background-color: #75a297;
  }
  /* 注册、登录区域收起 */
  .login-box.slide-up{
      top: 90%;
  }
  .login-box.slide-up .center{
      top: 10%;
      transform: translate(-50%,0%);
  }
  .login-box.slide-up .login-title,
  .register-box.slide-up .register-title{
      font-size: 16px;
      cursor: pointer;
  }
  .login-box.slide-up .login-title span,
  .register-box.slide-up .register-title span{
      margin-right: 5px;
      display: inline-block;
  }
  .login-box.slide-up .input-box,
  .login-box.slide-up .button,
  .register-box.slide-up .input-box,
  .register-box.slide-up .button{
      opacity: 0;
      visibility: hidden;
  }
  .register-box.slide-up{
      top: 6%;
      transform: translate(-50%,0%);
  }

  .login-link{
    position: absolute;
    display: inline-block;
    right: 5%;
    top: 5%;
    text-decoration: none;
    color: #303030;
    width: 120px;
    height: 30px;
    border: 1px solid rgb(166, 190, 246);
    border-radius: 10px;
    line-height: 30px;
    text-align: center;
    transition: all .2s;
  }

  .login-link:hover{
    background-color: rgba(0, 0, 0, .1);
    color: #fff;
  }
</style>
