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
        <el-menu-item index="registerExample">注册小实例</el-menu-item>
        <el-menu-item index="changeExample">修改小实例</el-menu-item>
        <el-menu-item index="deleteExample">删除小实例</el-menu-item>
        <!-- <el-sub-menu index="2-4">
          <template #title>item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-sub-menu> -->
      </el-sub-menu>
      <el-menu-item index="toIndex" @click="goIndex">前去主页</el-menu-item>
      <el-menu-item index="LoginOut" @click="logout">退出登录</el-menu-item>
    </el-menu>
    <!-- 具体的展示使用组件实现 -->
    <ContentShow :showPart="showPart"></ContentShow>
  </div>
</template>

<script>
import ContentShow from "./component/content-show.vue";
import { ElMessage } from 'element-plus';
export default {
  name: 'ManageWebsitePage',
  props: {},
  data () {
    return {
      showPart: 'main', //默认值为main，展示LOGO对应的内容
    }
  },
  components: {
    ContentShow,
  },
  computed: {
    
  },
  watch: {
    
  },
  methods: {
    handleSelect(key) { // keyPath  待选参数
      this.showPart = key;
      // console.log(this.showPart);
      // //key为当前选中的菜单
      // console.log(key, keyPath);
    },
    goIndex(){
      this.$router.push("/index");
    },
    logout(){
      // 删除cookie
      document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
      ElMessage.success("退出登录成功！");
      this.$router.push("/index");
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
