<template>
  <!-- 使用动态组件完成 -->
  <component :is="examplesName"></component>
</template>

<script>
// 添加新的小实例的方式：首先导入组件 然后注册组件 然后在下面根据id进行匹配
// 目前存在的问题：这样自己手写是不是还是太麻烦了... 毕竟id啥的实在是不太好搞
// 但是这样的想法出现的主要原因是我不知道服务端那边到底怎么写... 是一个纯API还是说要负责对应好页面展示，根据不同路径挂载不同页面？（反转了，就是用这个了）
import XiaoMiShop from './examplesIn/XiaoMiShop';
import MusicViewer from "./examplesIn/MusicViewer";
import WhitePinkClock from "./examplesIn/WhitePinkClock";
import ScrollBGIChange from "./examplesIn/ScrollBGIChange";
import FogToClear from "./examplesIn/FogToClear";
import BeautifulLoginPage from "./examplesIn/BeautifulLoginPage";
import JumpText from "./examplesIn/JumpText";
import FusionText from "./examplesIn/FusionText";
import MouseMoveDepthOfField from './examplesIn/MouseMoveDepthOfField';
import WeiHaiMIPsDecoder from "./examplesIn/WeiHaiMIps";

export default {
  components: {
    XiaoMiShop,
    MusicViewer,
    WhitePinkClock,
    ScrollBGIChange,
    FogToClear,
    BeautifulLoginPage,
    JumpText,
    FusionText,
    MouseMoveDepthOfField,
    WeiHaiMIPsDecoder,
  },
  computed: {
    examplesName() {
      const id = this.$route.params.id;
      switch(id){
        case '64b7e7d1228f5d7a6afac565':{
          return 'XiaoMiShop';
        }
        case '64b7e7e2228f5d7a6afac567':{
          return 'MusicViewer';
        }
        case '64b8f3860282de7b71714adf':{
          return 'WhitePinkClock';
        }
        case "64b8fabb0282de7b71714ae7": {
          return "ScrollBGIChange";
        }
        case "64b8fdb60282de7b71714af5":{
          return "FogToClear";
        }
        case "64b8ff510282de7b71714b01":{
          return "BeautifulLoginPage";
        }
        case "64b900000282de7b71714b04":{
          return "JumpText";
        }
        case "64b900fa0282de7b71714b07":{
          return "FusionText";
        }
        case "64b904b80282de7b71714b12":{
          return "MouseMoveDepthOfField";
        }
        case "64bb87404e6218306bc358fc":{
          return "WeiHaiMIPsDecoder";
        }
        default: {
          return null
        }
      }
      
    },
  },
};
</script>
