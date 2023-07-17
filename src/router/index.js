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
    let cookies = document.cookie;
    let temp = cookies.split("=");
    let cookieObj = {};
    for(let i = 0; i < temp.length; ++i){
      if(temp[i] === "token"){
        cookieObj[temp[i]] = temp[i+1];
        break;
      }
    }
    // for(let i = 0; i < temp.length-1; ++i){
    //   cookieObj[temp[i]] = temp[i+1]; // 将cookie由字符串转为对象（粗糙版，同名应该数组）
    // }
    console.log(cookieObj);
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