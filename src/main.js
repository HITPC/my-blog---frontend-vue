import { createApp } from 'vue'
import App from './App.vue'
// 引入路由
import router from './router';
//引入全局样式
import "./style/index.css";

//引入element-plus
import ElementPlus from "element-plus";
//引入element-plusu样式
import "element-plus/theme-chalk/index.css";

//引入element-plus所用的local
import locale from "element-plus/lib/locale/lang/zh-cn";

createApp(App).use(router).use(ElementPlus, { locale }).mount('#app');//注意use要在mount之前