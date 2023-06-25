<template>
  <component :is="examplesName"></component>
</template>

<script>
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
      if (id === '001') {
        return 'XiaoMiShop';
      } else if (id === '002') {
        return 'MusicViewer';
      } else {
        return null;
      }
    },
  },
};
</script>
