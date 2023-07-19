import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

const router = createRouter({
  history: createWebHistory(),
  routes
});

//配置黑名单，名单中的路径需要守卫
const balckRouter = ["/manage"];

//配置前置路由守卫
router.beforeEach((to, from, next)=>{
  if(balckRouter.indexOf(to.path) !== -1){//要去的不是黑名单中的路由 不需要鉴权
    // 下面的没处理掉重名cookie变数组
    let cookies = document.cookie;
    let temp = cookies.split(";");
    let cookieObj = {};
    temp.forEach((item)=>{
      let tArr = item.split("=");
      for(let i = 0; i < tArr.length-1; ++i){
        if(tArr[i].charAt(0) === " "){
          tArr[i] = tArr[i].slice(1);
        }
        cookieObj[tArr[i]] = tArr[i+1];
      }
    });
    if(cookieObj.token && cookieObj.token !== ""){
      next();
    }else{
      next("/login");
    }
  }else{
    next();
  }
});

//后置路由守卫实现标题切换 
router.afterEach((to) => { 
  document.title = to.meta.title;
});

export default router;