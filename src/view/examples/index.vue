<template>
  <div class="out">
      <div class="out-header">
        <div class="header-container">
          <router-link to="/index">PC的个人网站</router-link>
          <router-link to="/blog">博客</router-link>
          <router-link to="/search">搜索</router-link>
          <a href="https://gitee.com/piao-chen" target="_blank">前往PC仓库</a>
        </div>
        
      </div>
      <div class="text-list-container" v-if="exampleArr.length > 0">
        <div class="example-container"
          v-for="(example) in exampleArr"
          :key="example.id"  
          @click="goExampleDetail(example.id)"
        >
          <h2 class="example-title">{{ example.title }}</h2>
          <span class="example-introdution">{{ example.description }}</span>
          <div><span class="example-date">{{ example.date }}</span></div>
        </div>
      </div>
      <div class="text-list-container" v-else>
        <span class="text-nodata">暂时没有数据哦</span>
      </div>
      <div class="footer-container" v-if="exampleArr.length > 0">
        <span>{{ lengthNow<lengthMax ? "下滑加载更多" : "已经到底啦" }}</span>
      </div>
  </div>
</template>

<script>
import { getExampleList, visitExample } from '@/API/example';
//引入事件总线
// import emitter from "../../untils/eventBus";

export default {
  name: 'ExamplePage',
  props: {},
  data () {
    return {
      exampleArr: [
        
      ],
      lengthMax: 0,
      pageNow: 1,
      pageSize: 5,
    }
  },
  //加载更多的实现可以是下拉然后发后端请求
  components: {
    
  },
  computed: {
    lengthNow(){
      return this.exampleArr.length;
    }
  },
  watch: {
    
  },
  methods: {
    goExampleDetail(id){//跳转到具体的页面
      visitExample({id}).then(()=>{
        window.open(`/examples-detail/${id}`, "_blank"); // 打开新页面进行跳转
        // this.$router.push( { name: 'examples-detail', params: { id } } );
      }).catch((error)=>{
        console.log(error);
      });
    },
    dealScroll(){
      //监听滚动，实现滚动到最后再去扩展页面内容。
      if((document.documentElement.scrollHeight - document.documentElement.scrollTop-document.documentElement.clientHeight) < 1){
        // console.log("到底部了，应该触发网络请求拿新的内容了。");
        // 注意网络请求的时候判断现在到底多少条了，如果没全部整完，接着发请求，已经全部整完了，不再发了
        if(this.lengthNow < this.lengthMax){
          ++this.pageNow;
          getExampleList({page: this.pageNow, pageSize: this.pageSize}).then((data)=>{
            let responseObj = data.data;
            this.lengthMax = responseObj.maxLength;
            responseObj.list.forEach((item)=>{
              this.exampleArr.push(item);
            });
          }).catch((error)=>{
            console.log(error);
          });
        }
      }
    }
  },
  mounted(){
    window.addEventListener("scroll", this.dealScroll);
    getExampleList({page: this.pageNow, pageSize: this.pageSize}).then((data)=>{
      let responseObj = data.data;
      this.lengthMax = responseObj.maxLength;
      responseObj.list.forEach((item)=>{
        this.exampleArr.push(item);
      });
    }).catch((error)=>{
      console.log(error);
    });
  },
  unmounted(){
    window.removeEventListener("scroll", this.dealScroll);
  }
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

  .header-container a:nth-child(3){
    padding: 8px;
    right: 5%;
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

  .header-container a:nth-child(3):hover{
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
  
  .example-container{
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

  .example-container:hover{
    box-shadow: 5px 5px 5px rgb(201, 201, 201);
  }

  .example-title{
    margin-top: 5px;
  }

  .example-introdution{
    position: relative;
    top: 60px;
    padding: 0 10px 0 10px;
  }

  .example-date{
    position: relative;
    top: 110px;
  }

  .text-nodata{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    color: #000;
    font-weight: 600;
    font-size: 3vh;
  }
</style>
