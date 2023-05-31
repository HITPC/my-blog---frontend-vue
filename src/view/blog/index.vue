<template>
  <div class="out">
      <div class="out-header">
        <div class="header-container">
         <router-link to="/index">PC的个人网站</router-link>
          <router-link to="/examples">小实例</router-link>
          <a href="https://gitee.com/piao-chen" target="_blank">前往PC仓库</a>
        </div>
      </div>
      <div class="text-list-container">
        <div class="article-container" v-for="(article, index) in articleArr" :key="index">
          <h2 class="article-title">{{ article.title }}</h2>
          <span class="article-introdution">{{ article.introduction }}</span>
          <div><span class="article-date">{{ article.date }}</span></div>
        </div>
      </div>
      <div class="footer-container">
        <span>{{ lengthNow<lengthMax ? "下滑加载更多" : "已经到底啦" }}</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'BlogPage',
  props: {},
  data () {
    return {
      articleArr: [
        {
          title: "123",
          introduction: "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest",
          date: "2012-12-31",
        },
        {
          title: "asd",
          introduction: "tresad",
          date: "2013-12-30",
        },
        {
          title: "asd",
          introduction: "tresad",
          date: "2013-12-30",
        },
        {
          title: "asd",
          introduction: "tresad",
          date: "2013-12-30",
        },
        {
          title: "asd",
          introduction: "tresad",
          date: "2013-12-30",
        },{
          title: "asd",
          introduction: "tresad",
          date: "2013-12-30",
        },
      ],
      lengthNow: 0,
      lengthMax: 5,
    }
  },
  //加载更多的实现可以是下拉然后发后端请求
  components: {
    
  },
  computed: {
    
  },
  watch: {
    
  },
  methods: {
    
  },
  mounted(){
    window.addEventListener("scroll", ()=>{
      if((document.documentElement.scrollHeight - document.documentElement.scrollTop-document.documentElement.clientHeight) < 1){
        console.log("a");
      }
    })
  },
}
</script>

<style scoped>
  .out{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    min-width: 100%;
    min-height: 100vh;
    background-color: #e8e5e5;
  }

  .out-header{
    position: fixed;
    top: 0px;
    z-index: 99;
    width: 100%;
    height: 110px;
    background-color: #e8e5e5;
  }

  .header-container{
    position: relative;
    top: 30px;
    width: 100%;
    height: 80px;
  }

  .header-container a{
    position: absolute;
    text-decoration: none;
    color: black;
    font-size: 21px;
  }

  .header-container a:first-child{
    left: 6%;
    font-size: 32px;
    font-weight: 600;
  }

  .header-container a:nth-child(2){
    padding: 8px;
    left: 26%;
  }

  .header-container a:last-child{
    padding: 8px;
    left: 33%;
  }

  .header-container a:nth-child(2):hover{
    border-bottom: 3px solid #5999f9;
  }
  .header-container a:last-child:hover{
    border-bottom: 3px solid #5999f9;
  }

  .text-list-container{
    margin-top: 140px;
    width: 65%;
    border-radius: 15px;
    margin-bottom: 20px;
  }

  .footer-container{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 35px;
    width: 100%;
    height: 30px;
    background-color: #e8e5e5;
  }
  .footer-container span{
    padding-bottom: 9px;
    font-weight: 600;
  }
  
  .article-container{
    width: 100%;
    height: 220px;
    transition: all .2s;
    border: 1px solid white;
    border-radius: 15px;
    background-color: #fff;
    margin-top: 15px;
    text-align: center;
    cursor: pointer;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .article-container:hover{
    box-shadow: 5px 5px 5px gray;
  }

  .article-title{
    margin-top: 5px;
  }

  .article-introdution{
    position: relative;
    top: 60px;
    padding: 0 10px 0 10px;
  }

  .article-date{
    position: relative;
    top: 110px;
  }
</style>
