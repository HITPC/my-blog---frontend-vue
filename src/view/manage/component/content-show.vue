<template>
  <div class="show-container">
      <div class="content-container">
        <div class="main-container" v-show="showPart==='main'" ref="mainC">
          <h2>
            <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ea893728="" v-if="iconChoose===1"><path fill="currentColor" d="M32 768h960a32 32 0 1 1 0 64H32a32 32 0 1 1 0-64zm129.408-96a352 352 0 0 1 701.184 0h-64.32a288 288 0 0 0-572.544 0h-64.32zM512 128a32 32 0 0 1 32 32v96a32 32 0 0 1-64 0v-96a32 32 0 0 1 32-32zm407.296 168.704a32 32 0 0 1 0 45.248l-67.84 67.84a32 32 0 1 1-45.248-45.248l67.84-67.84a32 32 0 0 1 45.248 0zm-814.592 0a32 32 0 0 1 45.248 0l67.84 67.84a32 32 0 1 1-45.248 45.248l-67.84-67.84a32 32 0 0 1 0-45.248z"></path></svg>
            <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ea893728="" v-else-if="iconChoose===2"><path fill="currentColor" d="M512 704a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm0-704a32 32 0 0 1 32 32v64a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 768a32 32 0 0 1 32 32v64a32 32 0 1 1-64 0v-64a32 32 0 0 1 32-32zM195.2 195.2a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 1 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm543.104 543.104a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 0 1-45.248 45.248l-45.248-45.248a32 32 0 0 1 0-45.248zM64 512a32 32 0 0 1 32-32h64a32 32 0 0 1 0 64H96a32 32 0 0 1-32-32zm768 0a32 32 0 0 1 32-32h64a32 32 0 1 1 0 64h-64a32 32 0 0 1-32-32zM195.2 828.8a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248L240.448 828.8a32 32 0 0 1-45.248 0zm543.104-543.104a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248l-45.248 45.248a32 32 0 0 1-45.248 0z"></path></svg>
            <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ea893728="" v-else-if="iconChoose === 3"><path fill="currentColor" d="M82.56 640a448 448 0 1 1 858.88 0h-67.2a384 384 0 1 0-724.288 0H82.56zM32 704h960q32 0 32 32t-32 32H32q-32 0-32-32t32-32zm256 128h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"></path></svg>
            <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ea893728=""  v-else-if="iconChoose===4"><path fill="currentColor" d="M240.448 240.448a384 384 0 1 0 559.424 525.696 448 448 0 0 1-542.016-542.08 390.592 390.592 0 0 0-17.408 16.384zm181.056 362.048a384 384 0 0 0 525.632 16.384A448 448 0 1 1 405.056 76.8a384 384 0 0 0 16.448 525.696z"></path></svg>
            <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ea893728="" v-else-if="iconChoose===5"><path fill="currentColor" d="M384 512a448 448 0 0 1 215.872-383.296A384 384 0 0 0 213.76 640h188.8A448.256 448.256 0 0 1 384 512zM171.136 704a448 448 0 0 1 636.992-575.296A384 384 0 0 0 499.328 704h-328.32z"></path><path fill="currentColor" d="M32 640h960q32 0 32 32t-32 32H32q-32 0-32-32t32-32zm128 128h384a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm160 127.68 224 .256a32 32 0 0 1 32 32V928a32 32 0 0 1-32 32l-224-.384a32 32 0 0 1-32-32v-.064a32 32 0 0 1 32-32z"></path></svg>
            {{ goodWords }}, 欢迎使用本系统！
          </h2>
        </div>
        <div class="dataCenter-container" v-show="showPart==='dataCenter'">
          <h3>数据中心</h3>
          <!-- 构思的是展示哪一个小实例，那一篇文章被点击的最多，点击次数为多少 -->
          <el-table :data="tableData" :border="true" style="width: 70%; margin-top: 15%;">
            <el-table-column prop="no" label="排名" width="180" />
            <el-table-column prop="type" label="类型" width="180" />
            <el-table-column prop="title" label="标题" width="180" />
            <el-table-column prop="times" label="点击量" />
          </el-table>
        </div>
        <div class="addBlog-container" v-show="showPart==='addBlog'">
          <h3>书写博客</h3>
          <span>博客标题：</span>
          <el-input
            v-model="textTitle"
            autosize
            type="textarea"
            style="width: 51%; margin-top: 200px; margin-bottom: 30px;"
            maxlength="25"
            show-word-limit
            placeholder="请输入博客标题"
          />
          <!-- <div style="margin: 50px 0"></div> -->
          <span>博客简介：</span>
          <el-input
            v-model="textDescription"
            :autosize="{ minRows: 3, maxRows: 4 }"
            type="textarea"
            style="width: 51%; margin-bottom: 30px;"
            maxlength="120"
            show-word-limit
            placeholder="请输入博客简介"
          />
          <span>博客内容：</span>
          <el-input
            v-model="textContent"
            :autosize="{ minRows: 8, maxRows: 100 }"
            type="textarea"
            style="width: 51%;"
            placeholder="请输入文章内容"
          />
          <div class="addBlog-btn-container">
            <el-button type="primary" @click="saveBlog">保存</el-button>
            <el-button type="danger" @click="isShowCancleConfirm = true">取消</el-button>
          </div>
        </div>
        <el-dialog v-model="isShowCancleConfirm" title="需要确认" width="30%" center>
          <span>
            确认取消保存博客内容吗？
          </span>
          <template #footer>
            <span class="dialog-footer">
              <el-button @click="isShowCancleConfirm = false">取消</el-button>
              <el-button type="primary" @click="cancleSaveBlog">
                确定
              </el-button>
            </span>
          </template>
        </el-dialog>
        <div class="deleteBlog-container" v-show="showPart==='deleteBlog'">
          <h3>删除博客</h3>
          <span>博客标题：</span>
          <el-input
            v-model="textToDeleteTitle"
            autosize
            type="textarea"
            style="width: 51%; margin-top: 200px; margin-bottom: 30px;"
            maxlength="25"
            show-word-limit
            placeholder="请输入要删除的博客标题"
          />
          <div class="deleteBlog-btn-container">
            <el-button type="primary" @click="showDeleteConfirm">删除</el-button>
          </div>
        </div>
        <el-dialog v-model="isShowDeleteConfirm" title="需要确认" width="30%" center>
          <span>
            确认删除博客“{{ textToDeleteTitle }}”吗？
          </span>
          <template #footer>
            <span class="dialog-footer">
              <el-button @click="cancleDelete">取消</el-button>
              <el-button type="primary" @click="deleteBlog">
                确定
              </el-button>
            </span>
          </template>
        </el-dialog>
        <div class="changeBlog-caontainer" v-show="showPart==='changeBlog'">
123
        </div>
      </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { ElMessage } from 'element-plus';

export default {
  name: 'ContentShow',
  props: {
    showPart: String,
  },
  data () {
    return {
      goodWords: ref(""),
      iconChoose: 0,
      tableData: [
        {
          no: '1',
          type: '博客',
          title: "test",
          times: '1234',
        },
        {
          no: '2',
          type: '小实例',
          title: "test",
          times: '124',
        },
        {
          no: '3',
          type: '博客',
          title: "test",
          times: '34',
        },
        {
          no: '4',
          type: '博客',
          title: "test",
          times: '4',
        },
      ],
      textTitle: "",
      textDescription: "",
      textContent: "",
      isShowCancleConfirm: ref(false),
      isShowDeleteConfirm: ref(false),
      textToDeleteTitle: "",
    }
  },
  components: {
    
  },
  computed: {
   
  },
  watch: {
    
  },
  methods: {
    saveBlog(){
      if(this.textTitle!==""&&this.textContent!==""){
        //发送网络请求塞到数据库里去
        ElMessage.success("保存成功！");
      }else{
        ElMessage.error("标题或内容为空！");
      }
      
    },
    cancleSaveBlog(){
      this.isShowCancleConfirm = false;
      this.textContent = "";
      this.textDescription = "";
      this.textTitle = "";
      ElMessage.info("已取消保存。");
    },
    cancleDelete(){
      this.isShowDeleteConfirm = false; 
      ElMessage.info("已取消保存。");
    },
    showDeleteConfirm(){
      if(this.textToDeleteTitle === ""){
        ElMessage.error("请输入要删除博客的标题！");
      }else{
        this.isShowDeleteConfirm = true;
      }
    },
    deleteBlog(){
      //发网络请求
      this.isShowDeleteConfirm = false;
      ElMessage.success("删除成功！");
    },
  },
  created () {
    
  },
  mounted () {
    //根据时间整一个欢迎词
    var date = new Date();
    var hour = date.getHours();
    // var hour = 4;
    if(hour>=6&&hour<=9){
      this.goodWords = "早上好";
      this.iconChoose = 1;
      this.$refs["mainC"].classList.add("morning");
    }else if(hour>=10&&hour<=12){
      this.goodWords = "上午好";
      this.iconChoose = 2;
      this.$refs["mainC"].classList.add("noon");
    }else if(hour>=13&&hour<=17){
      this.goodWords = "下午好";
      this.iconChoose = 3;
      this.$refs["mainC"].classList.add("afternoon");
    }else if(hour>=18&&hour<=23){
      this.goodWords = "晚上好";
      this.iconChoose = 4;
      this.$refs["mainC"].classList.add("night");
    }else {
      this.goodWords = "凌晨好";
      this.iconChoose = 5;
      this.$refs["mainC"].classList.add("beforemorning");
    }
  },
}
</script>

<style scoped>
  .show-container{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    min-height: 90vh;
    background-color: #e8e5e5;
  }

  .content-container{
    position: relative;
    width: 95vw;
    height: 85vh;
    background-color: #fff;
    overflow: auto;
    margin-top: 15px;
  }

  .main-container{
    position: relative;
    width: 100%;
    height: 100%;
  }

  .morning{
    background: linear-gradient(to bottom,#fdfcfb, #e2d1c3);
  }

  .noon{
    background: linear-gradient(to bottom, rgb(85,167,179), rgb(189,220,226));
  }

  .night{
    background: linear-gradient(to bottom,#09203f, #537895);
    color: #e8e5e5;
  }

  .afternoon{
    background: linear-gradient(to bottom, #ffb284, #ffdca2);
  }

  .beforemorning{
    background: linear-gradient(to bottom,#fddb92, #d1fdff);
  }


  .main-container h2{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .dataCenter-container{
    display: flex;
    justify-content: center;
  }

  .dataCenter-container h3, 
  .addBlog-container h3, 
  .deleteBlog-container h3{
    position: absolute;
    top: 15%;
  }

  .addBlog-container, 
  .deleteBlog-container{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-content: space-between;
  }

  .addBlog-container span,
  .deleteBlog-container span{
    position: absolute;
    left: 18%;
  }

  .addBlog-container span:nth-child(2),
  .deleteBlog-container span{
    top: 33%;
  }

  .addBlog-container span:nth-child(4){
    top: 45%;
  }

  .addBlog-container span:nth-child(6){
    top: 70%;
  }

  .addBlog-btn-container, 
  .deleteBlog-btn-container{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 51%; 
    height: 50px; 
    margin-top: 20px;
  }

  .dialog-footer button:first-child {
    margin-right: 10px;
  }
</style>
