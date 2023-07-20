<template>
  <div class="b">
    <div class="container">
        <div class="image"></div>
        <div class="cursor"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FogToClear',
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
    document.title = "雾化清晰";
    const container = document.querySelector('.container');
const cursor = document.querySelector('.cursor');
// 为容器绑定鼠标移动事件
container.addEventListener('mousemove', (e) => {
    //获取container和cursor的大小以及相对于视口的位置 
    let conRect = container.getBoundingClientRect();
    let cursRect = cursor.getBoundingClientRect();
    // 计算高清园的位置,跟随鼠标
    let cursX = e.clientX - conRect.left - cursRect.width / 2;
    let cursY = e.clientY - conRect.top - cursRect.height / 2;
    // 设置高清圆的位置
    cursor.style.left = `${cursX}px`;
    cursor.style.top = `${cursY}px`;
})
  },
}
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
}

.b {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.75);
}

.container {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
}

.image {
    width: 100%;
    height: 100%;
    background-image: url('./media/src=http___img.ivsky.com_img_tupian_pre_201801_22_nadanfanxiangjideshou-011.jpg&refer=http___img.ivsky.jpg');
    /* 不平铺 */
    background-repeat: no-repeat;
    /* 保持图像比例，裁切长边 */
    background-size: cover;
    /* 图像定位居中 */
    background-position: center;
    /* 固定背景图像 */
    background-attachment: fixed;
    /* 模糊 */
    filter: blur(6px);
    /* 溢出隐藏 */
    overflow: hidden;
}


/* 半透明的白色蒙版 */

.image::before {
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
}


/* 清晰的图像 */

.cursor {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    border: 8px solid rgba(0, 0, 0, 0.2);
    position: absolute;
    background-image: url('./media/src=http___img.ivsky.com_img_tupian_pre_201801_22_nadanfanxiangjideshou-011.jpg&refer=http___img.ivsky.jpg');
    background-repeat: no-repeat;
    /* 保持图像比例，裁切长边 */
    background-size: cover;
    /* 图像定位居中 */
    background-position: center;
    /* 固定背景图像 */
    background-attachment: fixed;
}
</style>
