<template>
  <div class="article-container">
    <div class="article-header-container">
        <router-link to="/index">PC的个人网站</router-link>
        <router-link to="/examples">小实例</router-link>
        <a href="https://gitee.com/piao-chen" target="_blank">前往PC仓库</a>
    </div>
    <div class="article-text-container">
      <mdViewer :text="content"></mdViewer>
    </div>
  </div>
</template>

<script>
import { getBlog } from '@/API/blog';
import mdViewer from "../../plugins/mdEditor-view.vue";

export default {
  name: 'ArticlePage',
  props: {},
  data () {
    return {
      articleID: this.$route.params.id,
      content: ""
      // articleID: "this.$route.params.id",
    }
  },
  components: {
    mdViewer
  },
  computed: {
    
  },
  mounted() {
    //此处发送网络请求，拿到对应id的文章内容。
    getBlog({id: this.articleID}).then((data)=>{
      this.content = data.data;
    }).catch((error)=>{
      console.log(error);
    });
  },
  watch: {
    
  },
  methods: {
    
  },
}
</script>

<style scoped>
  .article-container{
    min-height: 100vh;
    position: relative;
    background-color: #e8e5e5;
  }

  .article-header-container{
    position: absolute;
    top: 0;
    width: 100vw;
    height: 10vh;
  }

  /* 实现header部分的下划线，好像不太好看，去了吧 */
  /* .article-header-container::after{
    content: "";
    width: 88%;
    display: block;
    height: 1px;
    margin: 10vh auto 0;
    border-bottom: 1px solid black;
  } */

  .article-text-container{
    position: absolute;
    top: 20vh;
    width: 70vw;
    min-height: 79vh;
    overflow-wrap: break-word;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
  }

  .article-header-container a{
    position: absolute;
    bottom: 1vh;
    text-decoration: none;
    color: black;
    font-size: 21px;
    border-bottom: 3px solid transparent; /* 添加透明边框 */
  }

  .article-header-container a:first-child{
    left: 6%;
    font-size: 32px;
    font-weight: 600;
  }

  .article-header-container a:nth-child(2){
    padding: 8px;
    left: 26%;
  }

  .article-header-container a:last-child{
    padding: 8px;
    left: 33%;
  }

  .article-header-container a:nth-child(2):hover{
    border-bottom: 3px solid #5999f9;
  }
  .article-header-container a:last-child:hover{
    border-bottom: 3px solid #5999f9;
  }
</style>
