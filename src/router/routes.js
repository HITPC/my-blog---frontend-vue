const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    name: "index",
    path: "/index",
    component: () => import("@/view/index"),
    meta: {title: "主页"},
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
    children: [

    ],
  },
  {
    name: "examples",
    path: "/examples",
    meta: {title: "小实例"},
    component: () => import("@/view/examples")
  },
  //写在最底部，实现找不到路径跳转到404页面
  {
    path: '/:pathMatch(.*)',
    redirect: '/404'
  }
];

export default routes;