<template>
  <div class="search-container">
    <h1 class="title">
      搜索
    </h1>
    <div class="input-container">
      <el-select v-model="type" placeholder="请选择类型" style="margin-right: 10px;" size="large">
        <el-option
          v-for="item in types"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-input
        v-model="title"
        style="width: 40vw; margin-right: 10px;"
        placeholder="请输入要搜索的小实例或博客的标题"
        size="large"
        clearable
      />
      <el-button type="primary" size="large" @click="doSearch">
        搜索
        <el-icon class="el-icon--right"><Search /></el-icon>
      </el-button>
      <el-button type="info" size="large" @click="goBack">
        返回上一页面
      </el-button>
    </div>
    <div class="result-container">
      <div class="result-item-container"
        v-for="(item) in resultArr" 
        :key="item.id"
        @click="toDetail(item)"
      >
          <h2 style="width: 100%;">{{ item.title }}</h2>
          <span style="width: 100%;">{{ item.description }}</span>
          <div><span style="width: 100%;">{{ item.date }}</span></div>
      </div>
    </div>
  </div>
</template>

<script>
import { search } from '@/API/common';
import { ElMessage } from 'element-plus';
import { visitExample } from '@/API/example';
export default {
  name: 'SearchPage',
  props: {},
  data () {
    return {
      title: "",
      type: "",
      resultArr: [

      ],
      types: [
        {
          label: "博客",
          value: "blog"
        },
        {
          label: "小实例",
          value: "example"
        }
      ]
    }
  },
  components: {
    
  },
  computed: {
    
  },
  watch: {
    
  },
  methods: {
    doSearch(){
      this.resultArr = [];
      if(this.type === "" || this.title === ""){
        ElMessage.error("标题未输入或类型未选择!");
      }else{
        search({
          title: this.title,
          type: this.type
        }).then((data)=>{
          this.resultArr.push(data.data);
        }).catch((error)=>{
          if(error.response.status == 503 || error.response.status == 502){
            ElMessage.error("未找到结果！");
          }
        });
      }
    },
    toDetail(result){
      if(result.type === "blog"){
        this.$router.push({ name: 'article', params: { id: result.id } });
      }else if(result.type === "example"){
        visitExample({id: result.id}).then(()=>{
          this.$router.push( { name: 'examples-detail', params: { id: result.id } } );
        }).catch((error)=>{
          console.log(error);
        });
      }else{
        ElMessage.error("页面错误！请联系管理员。");
      }
    },
    goBack(){
      window.history.go(-1);
    }
  },
  created () {
    
  },
  mounted () {
    
  },
}
</script>

<style scoped>
  .search-container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    min-height: 100vh;
    position: relative;
    background-color: #e8e5e5;
  }

  .title{
    width: 100vw;
    padding-top: 3vh;
    text-align: center;
  }

  .input-container{
   display: flex;
   justify-content: center;
   align-items: center;
   margin-top: 5vh;
  }

  .result-container{
    width: 65%;
    margin-bottom: 10px;
  }

  .result-item-container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    height: 220px;
    transition: all .2s;
    border: 1px solid white;
    border-radius: 15px;
    background-color: #fff;
    cursor: pointer;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-top: 15px;
    text-align: center;
  }

  .result-item-container:hover{
    box-shadow: 5px 5px 5px rgb(201, 201, 201);
  }
</style>
