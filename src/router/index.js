import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

const router = createRouter({
  history: createWebHistory(),
  routes
});

//配置白名单，名单中的路径无需守卫
const whiteRouter = ["/login", "/404"];

//配置前置路由守卫
router.beforeEach((to, from, next)=>{
  if(whiteRouter.indexOf(to.path) == -1){//要去的不是白名单中的路由 需要鉴权
    let token = localStorage.getItem("token");
    if(token){
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
  document.title = to.meta.title
});

export default router;