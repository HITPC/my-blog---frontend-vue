<template>
  <div class="example-container">
    <div class="example-header-container">
        <router-link to="/index">PC的个人网站</router-link>
        <router-link to="/blog">博客</router-link>
        <a href="https://gitee.com/piao-chen" target="_blank">前往PC仓库</a>
    </div>
    <div class="example-items-container">
      <div class="example-items" v-for="(item, index) in itemArr" :key="index" @click="goExampleDetail(item.id)">
          <h2 style="margin-top: 15px;">{{ item.title }}</h2>
          <span>{{ item.introduction }}</span>
          <p>{{ item.date }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExamplePage',
  props: {},
  data () {
    return {
      itemArr: [
        {
          id: "001",
          title: "小米商城",
          introduction: "小米商城页面（无网络交互版本）",
          date: "2021-01-23"
        },
        {
          id: "002",
          title: "音乐可视化",
          introduction: "音乐可视化小网页",
          date: "2023-04-23"
        },
      ], //小实例数组
    }
  },
  components: {
    
  },
  computed: {
    
  },
  mounted() {
    //此处发送网络请求，拿到对应id的文章内容。
  },
  watch: {
    
  },
  methods: {
    goExampleDetail(id){//跳转到具体的页面
      this.$router.push( { name: 'examples-detail', params: { id: id } } );
    }
  },
}
</script>

<style scoped>
  .example-container{
    min-height: 100vh;
    position: relative;
    background-color: #e8e5e5;
  }

  .example-header-container{
    position: fixed;
    top: 0;
    width: 100vw;
    height: 10vh;
  }

  /* .example-header-container::after{
    content: "";
    width: 88%;
    display: block;
    height: 1px;
    margin: 10vh auto 0;
    border-bottom: 1px solid black;
  } */

  .example-items-container{
    position: absolute;
    top: 20vh;
    width: 70vw;
    min-height: 79vh;
    overflow-wrap: break-word;
    left: 50%;
    transform: translateX(-50%);
  }

  .example-items{
    position: relative;
    transition: all .2s;
    width: 100%;
    height: 27vh;
    cursor: pointer;
    margin-bottom: 40px;
    background-color: #fff;
    border-radius: 15px;
  }

  .example-items span,
  .example-items p,
  .example-items h2{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  .example-items span{
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .example-items p{
    bottom: 15px;
  }

  .example-items:hover{
    box-shadow: 5px 5px 5px gray;
  }

  .example-header-container a{
    position: absolute;
    bottom: 1vh;
    text-decoration: none;
    color: black;
    font-size: 21px;
    border-bottom: 3px solid transparent; /* 添加透明边框 */
  }

  .example-header-container a:first-child{
    left: 6%;
    font-size: 32px;
    font-weight: 600;
  }

  .example-header-container a:nth-child(2){
    padding: 8px;
    left: 26%;
  }

  .example-header-container a:last-child{
    padding: 8px;
    left: 33%;
  }

  .example-header-container a:nth-child(2):hover{
    border-bottom: 3px solid #5999f9;
  }
  .example-header-container a:last-child:hover{
    border-bottom: 3px solid #5999f9;
  }
</style>
