<template>
  <div class="out">
    <header>
      <router-link class="logo" to="/index">PC的个人网站</router-link>
      <nav class="navigation" ref="navList">
        <router-link to="/index" class="active">主页</router-link>
        <router-link to="/blog">博客</router-link>
        <router-link to="/examples">小实例</router-link>
        <router-link to="/manage" style="margin-left: 8px;">管理页面</router-link>
        <a href="https://gitee.com/piao-chen" target="_blank">前往PC仓库</a>
      </nav>
    </header>

    <section class="parallax">
      <img src="./media/hill1.png" ref="hill1">
      <img src="./media/hill2.png" ref="hill2">
      <img src="./media/hill3.png" ref="hill3">
      <img src="./media/hill4.png" ref="hill4">
      <img src="./media/hill5.png" ref="hill5">
      <img src="./media/tree.png" ref="tree">
      <h2 ref="text" class="text">
        欢迎你的访问！四处看看吧！
      </h2>
      <img src="./media/leaf.png" ref="leaf">
      <img src="./media/plant.png" ref="plant">
    </section>

    <section class="sec">
      <h2>关于本站</h2>
      <p>
        本站是我自己搭着玩的一个小网站，用于记录一些WEB前端的小实例，以及是对自己学的WEB前端和一些小的关于后端的服务器的一些知识的检验。
        <br><br>
        博客页面用于展示我的一些博客，写着玩的东西。然后小实例是我跟着别人的教程自己写成的一些静态的没有和后端进行交互的小例子，都很炫酷，但是不知道具体有无作用。
        <br><br>
        最后，祝玩的开心！
      </p>
    </section>

    <div class="footer-contanier">
      <span>玩的开心！</span>
      <span><a href="https://space.bilibili.com/28836808?spm_id_from=333.1007.0.0" target="_blank">点击前往PC的B站首页</a></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  props: {},
  data () {
    return {}
  },
  methods:{
    unLogin(){
      localStorage.removeItem("token");
      this.$router.push("/login");
    }
  },
  mounted(){
    let text = this.$refs["text"];
    let leaf = this.$refs["leaf"];
    let hill1 = this.$refs["hill1"];
    let hill4 = this.$refs["hill4"];
    let hill5 = this.$refs["hill5"]; 
    let navList = this.$refs["navList"];

    window.addEventListener("scroll", ()=>{
      let value = window.scrollY;
      text.style.marginTop = value*2.5+"px";
      leaf.style.top = value*-1.5+"px";
      leaf.style.left = value*1.5+"px";
      hill5.style.left = value*1.5+"px";
      hill4.style.left = value*-1.5+"px";
      hill1.style.top = value*1+"px";
    });

    for(let i = 0; i<navList.children.length; ++i){
      navList.children[i].addEventListener("click", (e)=>{
        //先去掉
        for(let i = 0; i<navList.children.length; ++i){
          if(navList.children[i].classList.contains("active")){
            navList.children[i].classList.remove("active");
          }
        }
        //再加上
        //使用e.path[0]来取得当前触发事件的html元素
        e.path[0].classList.add("active");
      })
    }
  },
}
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .out{
    background-color: #f9f9f9;
    min-height: 100vh;
    overflow-x: hidden;
  }

  header{
    position: absolute;
    display: flex;
    top: 0;
    left: 0;
    width: 100%;
    padding: 10px 100px;
    justify-content: flex-start;
    align-items: center;
    z-index: 100;
  }

  .logo{
    font-size: 2em;
    color: #359381;
    text-decoration: none;
    font-weight: 600;
  }

  .navigation{
    margin-left: 25%;
  }

  .navigation a{
    display: inline-block;
    width: 80px;
    height: 30px;
    text-decoration: none;
    text-align: center;
    line-height: 30px;
    color: #359381;
    border-radius: 20px;
    font-weight: 600;
    margin-left: 3px;
  }

  .navigation a:last-child{
    position: absolute;
    right: 30px;
    color: white;
    width: 110px;
    border: 1px white solid;
  }

  .navigation a:hover, 
  .navigation .active{
    background-color: #359381;
    color: #fff;
  }

  .parallax{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .text{
    position: absolute;
    font-size: 5em;
    color: #fff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, .2);
  }

  .parallax img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .sec{
    position: relative;
    background-color: #003329;
    padding: 100px;
  }

  .sec h2{
    font-size: 3em;
    color: #fff;
    margin-bottom: 10px;
  }

  .sec p{
    font-size: 1em;
    color: #fff;
    font-weight: 300;
  }

  .footer-contanier{
    display: flex;
    width: 100vw;
    height: 40px;
    background-color: #003329;
    justify-content: center;
    align-items: center;
  }

  .footer-contanier span:first-child{
    font-size: 12px;
    font-weight: 500;
    color: #fff;
  }

  .footer-contanier span:last-child{
    line-height: 12px;
  }

  .footer-contanier>span>a{
    text-decoration: none;
    font-size: 12px;
    font-weight: 500;
    color: #fff;
    margin-left: 5px;
  }
</style>
