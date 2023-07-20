<template>
  <div class="b">
    <div class="container">
        <div><img src="./imgs/1.png" alt=""></div>
        <div><img src="./imgs/2.png" alt=""></div>
        <div><img src="./imgs/3.png" alt=""></div>
        <div><img src="./imgs/4.png" alt=""></div>
        <div><img src="./imgs/5.png" alt=""></div>
        <div><img src="./imgs/6.png" alt=""></div>
    </div>
    <h3>请在图片上左右移动鼠标查看效果！</h3>
  </div>
</template>

<script>
export default {
  name: 'MouseMoveDepthOfField',
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
    document.title = "鼠标景深";
    const container = document.querySelector('.container');
const imgs = document.querySelectorAll('.container img');

container.addEventListener('mousemove', function(e) {
    let percent = e.clientX / window.outerWidth;
    let offset = 10 * percent;
    let blur = 20;
    imgs.forEach((img, index) => {
        offset *= 1.3;
        let blurValue = Math.pow(index / imgs.length - percent, 2) * blur;
        img.style.setProperty('--offset', offset + 'px');
        img.style.setProperty('--blur', blurValue + 'px');
    });
});
  },
}
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
}

.b {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.container {
    width: 100%;
    height: 160px;
    position: relative;
    overflow: hidden;
}

.container div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    top: 0;
}

.container div img {
    width: 100%;
    height: 100%;
    /* 剪切图片 保留原始比例 */
    object-fit: cover;
    /* 下面这俩是css自定义属性 可以通过var函数进行调用 一个是水平偏移量 一个是模糊度 */
    --offset: 0px;
    --blur: 2px;
    transform: translateX(var(--offset));
    filter: blur(var(--blur));
}

h3 {
    margin-top: 25px;
}
</style>
