<template>
  <div class="manage-container">
    <el-menu
      :default-active="showPart"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
    >
      <el-menu-item index="main">PC的个人网站</el-menu-item>
      <div class="flex-grow"></div>
      <el-menu-item index="dataCenter">数据中心</el-menu-item>
      <el-sub-menu index="manageWebsite">
        <template #title>管理网站</template>
        <el-menu-item index="addBlog">新增博客</el-menu-item>
        <el-menu-item index="changeBlog">修改博客</el-menu-item>
        <el-menu-item index="deleteBlog">删除博客</el-menu-item>
        <!-- <el-sub-menu index="2-4">
          <template #title>item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-sub-menu> -->
      </el-sub-menu>
    </el-menu>
    <!-- 具体的展示使用组件实现 -->
    <ContentShow :showPart="showPart"></ContentShow>
  </div>
</template>

<script>
import { ref } from 'vue';
import ContentShow from "./component/content-show.vue"
export default {
  name: 'ManageWebsitePage',
  props: {},
  data () {
    return {
      showPart: ref('main'), //默认值为0，展示LOGO对应的内容
    }
  },
  components: {
    ContentShow
  },
  computed: {
    
  },
  watch: {
    
  },
  methods: {
    handleSelect(key, keyPath) {
      this.showPart = key;
      // console.log(this.showPart);
      // //key为当前选中的菜单
      console.log(key, keyPath);
    }
  },
  created () {
    
  },
  mounted () {

  },
}
</script>

<style scoped>
  .manage-container{
    width: 100vw;
    min-height: 100vh;
    background-color: #e8e5e5;
  }
</style>
