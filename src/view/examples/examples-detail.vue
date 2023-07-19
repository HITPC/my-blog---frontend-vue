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

export default {
  components: {
    XiaoMiShop,
    MusicViewer
  },
  computed: {
    examplesName() {
      const id = this.$route.params.id;
      if (id === '64b7e7d1228f5d7a6afac565') {
        return 'XiaoMiShop';
      } else if (id === '64b7e7e2228f5d7a6afac567') {
        return 'MusicViewer';
      } else {
        return null;
      }
    },
  },
};
</script>
