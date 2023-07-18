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
    // 下面是仅仅为了这一个而服务的cookie处理，还应该处理掉分号的（也就是这个处理方式是不对的）
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
    //   cookieObj[temp[i]] = temp[i+1]; // 将cookie由字符串转为对象（粗糙版，同名应该数组，并且处理分号）
    // }
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