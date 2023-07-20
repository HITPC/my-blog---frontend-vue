<template>
  <div class="">
    <div class="container">
    <div class="word">雪霜茂茂</div>
    <div class="word">蕾蕾于冬</div>
    <div class="word">君子之守</div>
    <div class="word">子孙之昌</div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'FusionText',
  props: {},
  data () {
    return {}
  },
  components: {
    
  },
  computed: {
    
  },
  watch: {
    
  },
  methods: {
    
  },
  created () {
    
  },
  mounted () {
    document.title = "融合文字";
  },
}
</script>

<style scoped>
  *{
  margin: 0;
  padding: 0;
}

.container{
  /* 100%窗口宽高 */
  height: 100vh;
  width: 100vw;
  /* 弹性布局居中 */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: #fff;
  font-size: 60px;
  /* 对比度滤镜 */
  /* 对比度滤镜+模糊滤镜可以做出溶球效果 */
  filter: contrast(15);
}

.word{
  position: absolute;
  width: 100%;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* 模糊滤镜 默认设置为不模糊 */
  filter: blur(0px);
  /* 设置动画 时长 加速后减速播放效果 无限循环 */
  animation: wordChange 8s ease-in-out infinite;
}

/* 为每句话设置不同的动画延迟时间 */
.word:nth-child(1){
  animation-delay: -8s;
}

.word:nth-child(2){
  animation-delay: -6s;
}

.word:nth-child(3){
  animation-delay: -4s;
}

.word:nth-child(4){
  animation-delay: -2s;
}

/* 动画 */
@keyframes wordChange{
  0%,
  10%,
  100%{
    filter: blur(0px);
    opacity: 1;
  }
  70%, 80%{
    filter: blur(80px);
    opacity: 0;
  }
}
</style>
