const routes = [
  {
    path: "/",
    redirect: "/index"
  },
  {
    name: "index",
    path: "/index",
    component: () => import("@/view/index"),
    meta: {title: "主页"},
    children: []
  },
  {
    name: "manage",
    path: "/manage",
    component: () => import("@/view/manage"),
    meta: {title: "管理网站"},
    children: []
  },
  {
    name: "login",
    path: "/login",
    meta: {title: "登入"},
    component : () => import("@/view/loginAndRegister")
  },
  {
    name: "404",
    path: "/404",
    meta: {title: "页面不见了"},
    component: () => import("@/view/404")
  },
  {
    name: "blog",
    path: "/blog",
    meta: {title: "博客"},
    component: () => import("@/view/blog"),
  },
  {
    name: "examples",
    path: "/examples",
    meta: {title: "小实例"},
    component: () => import("@/view/examples"),
  },
  {
    name: "examples-detail",
    path: "/examples-detail/:id",
    meta: {title: "实例"},
    component: () => import("@/view/examples/examples-detail.vue"),
  },
  {
    name: "article",
    path: "/article/:id", //这样子配置，保证接收参数
    meta: {title: "文章"},
    component: () => import("@/view/article")
  },
  {
    name: "search",
    path: "/search", 
    meta: {title: "搜索"},
    component: () => import("@/view/search")
  },
  //写在最底部，实现找不到路径跳转到404页面
  {
    path: '/:pathMatch(.*)',
    redirect: '/404'
  }
];

export default routes;