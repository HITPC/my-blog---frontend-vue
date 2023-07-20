<template>
  <div class="b">
    <div class="container">
        <h1>Welcome</h1>
        <div class="form">
            <input type="text" placeholder="账号">
            <input type="password" placeholder="密码">
            <button class="btn-login">登录</button>
        </div>
    </div>
    <ul class="bg-squares">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BeautifulLoginPage',
  props: {},
  data () {
    return {}
  },
  components: {
    
  },
  computed: {
    
  },
  watch: {
    
  },
  methods: {
    
  },
  created () {
    
  },
  mounted () {
    document.title = "好看登录特效";
    // 获取要操作的dom元素
const container = document.querySelector('.container');
const btn_login = document.querySelector('.btn-login');

btn_login.addEventListener('click', function() {
    container.classList.add('success');
})
  },
}
</script>

<style scoped>
  * {
    /* 初始化 */
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.b {
    /* 溢出隐藏 */
    overflow: hidden;
    height: 100vh;
    /* 弹性布局 居中显示 */
    display: flex;
    justify-content: center;
    align-items: center;
    /* 渐变背景 */
    background: linear-gradient(to top left, #ffe29f, #ffa99f, #ff719a);
}

.container {
    text-align: center;
    color: white;
}

.container h1 {
    font-size: 40px;
    font-weight: 100;
    letter-spacing: 2px;
    margin-bottom: 15px;
    /* 过渡效果 */
    transition: 1s ease-in-out;
}

.container.success h1 {
    transform: translateY(75px);
}

.container.success .form {
    opacity: 0;
}

.form {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 2;
    opacity: 1;
    /* 透明度改变时的过渡效果 */
    transition: opacity .5s;
}

.form input {
    outline: none;
    border: 1px solid rgba(255, 255, 255, 0.4);
    background-color: rgba(255, 255, 255, 0.2);
    width: 250px;
    padding: 10px 15px;
    border-radius: 3px;
    margin: 0 auto 10px auto;
    text-align: center;
    color: white;
    font-size: 15px;
    transition: .25s;
}

.form input::placeholder {
    color: white;
    font-size: 14px;
    font-weight: 300;
}

.form input:hover {
    background-color: rgba(255, 255, 255, 0.4);
}

.form input:focus {
    background-color: #fff;
    width: 300px;
    color: #ff719a;
}

.btn-login {
    outline: none;
    background-color: #fff;
    color: #ff719a;
    border: none;
    width: 250px;
    padding: 10px 25px;
    border-radius: 3px;
    font-size: 15px;
    cursor: pointer;
    transition: .25s;
}

.btn-login:hover {
    background-color: #f7f5f9;
}


/* 背景方块 */

.bg-squares {
    list-style: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}

.bg-squares li {
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.15);
    position: absolute;
    bottom: -160px;
    /* 执行动画 2s 线性 无限次 */
    animation: squre 8s linear infinite;
}


/* 为每一个方块设置大小 动画事件 */

.bg-squares li :nth-child(1) {
    left: 10%;
}

.bg-squares li:nth-child(2) {
    left: 20%;
    width: 80px;
    height: 80px;
    /* 动画延迟时间 */
    animation-delay: 2s;
    /* 动画时长 */
    animation-duration: 17s;
}

.bg-squares li :nth-child(3) {
    left: 25%;
    animation-delay: 4s;
}

.bg-squares li:nth-child(4) {
    left: 40%;
    width: 60px;
    height: 60px;
    /* 动画延迟时间 */
    background-color: rgba(255, 255, 255, 0.25);
    /* 动画时长 */
    animation-duration: 22s;
}

.bg-squares li :nth-child(5) {
    left: 70%;
}

.bg-squares li:nth-child(6) {
    left: 80%;
    width: 120px;
    height: 120px;
    /* 动画延迟时间 */
    background-color: rgba(255, 255, 255, 0.2);
    /* 动画时长 */
    animation-delay: 3s;
}

.bg-squares li:nth-child(7) {
    left: 32%;
    width: 160px;
    height: 160px;
    animation-delay: 7s;
}

.bg-squares li:nth-child(8) {
    left: 55%;
    width: 20px;
    height: 20px;
    animation-duration: 40s;
    animation-delay: 15s;
}

.bg-squares li:nth-child(9) {
    left: 25%;
    width: 10px;
    height: 10px;
    background-color: rgba(255, 255, 255, 0.3);
    animation-duration: 40s;
    animation-delay: 2s;
}

.bg-squares li:nth-child(10) {
    left: 90%;
    width: 160px;
    height: 160px;
    animation-delay: 11s;
}


/* 定义动画 */

@keyframes squre {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-120vh) rotate(600deg);
    }
}
</style>
