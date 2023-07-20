<template>
  <div class="container">
    <h2>↓滚轮滚一下呗↓</h2>
    <div class="bg">
        <span>Hello</span>
    </div>
    <h1 id="test">
       NOTHING IS TRUE
    </h1>
  </div>
</template>

<script>
export default {
  name: 'ScrollBGIChange',
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
    document.title = "高级滚动背景"
    // 获取背景对象
const bg = document.querySelector(".bg");
// 监听滚轮事件
document.addEventListener("scroll", function() {
    // 获取当前滚轮的位置
    const scrollY = window.scrollY;
    if (scrollY != 0) {
        // 滚轮位置不等于0时，修改背景的定位加上滚轮的值
        bg.style.backgroundPosition = "calc(50% + " + scrollY + "px) calc(50% + " + scrollY + "px)";
        // bg.style.backgroundPosition=`calc(50% + ${scrollY}px) calc(50% + ${scrollY}px)`;
    } else {
        // 否则清空背景的定位
        bg.style.backgroundPosition = "";
    }
})
  },
}
</script>

<style scoped>
  * {
    /* 初始化 */
    margin: 0;
    padding: 0;
}

.container {
    /* 200%窗口高度（两屏窗口的高度） */
    min-height: 200vh;
}

.bg {
    /* 背景图片 */
    background-image: url("./media/sda.jpg");
    /* 对图片进行剪切，保留原始比例 */
    background-size: cover;
    /* 设置背景图片的定位 */
    background-position: 50% 50%;
    height: 100vh;
    font-size: 450px;
    font-weight: 900;
    text-align: center;
    /* 以区块内的文字作为裁剪区域向外裁剪，文字的背景即为区块的背景，文字之外的区域都将被裁剪掉 */
    -webkit-background-clip: text;
    /* 将文字透明镂空 */
    -webkit-text-fill-color: transparent;
    /* 相对定位 */
    position: relative;
    /* 溢出隐藏 */
    overflow: hidden;
    padding-top: 100px;
}

.bg::before {
    content: "";
    /* 背景图片继承父元素 */
    background-image: inherit;
    background-size: cover;
    background-position: 50% 50%;
    /* 绝对定位 */
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -99;
}

h2 {
    position: absolute;
    top: 20px;
    width: 100%;
    text-align: center;
    letter-spacing: 8px;
    color: #fff;
}

h1 {
    position: absolute;
    top: 145vh;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    color: #fff;
    letter-spacing: 10px;
    padding: 100px 0;
    background-color: rgba(0, 0, 0, 0.5);
    text-align: center;
}
</style>
