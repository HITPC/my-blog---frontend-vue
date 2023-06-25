<template>
  <div class="">
    <canvas></canvas>
    <audio src="" controls></audio>
    <button class="btn">点击选择歌曲</button>
    <input type="file" style="display:none" id="fileChooser"/>
    <input type="text" class="colorInput" placeholder="输入想要的律动颜色">
    <p class="tip-text">设置成功</p>
    <button class="btn1">确定</button>
    <button class="btn2">切换为浅色主题</button>
  </div>
</template>

<script>
export default {
  name: 'MusicViewer',
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
    document.title = "音乐可视化"
    //获取要操作的元素
const audio = document.querySelector("audio");
const cvs = document.querySelector("canvas");
//获取画笔
const ctx = cvs.getContext("2d");
//获取按钮以及文件上传
const btn = document.querySelector(".btn");
const fileChooser = document.getElementById("fileChooser");
//上传文件操作
fileChooser.onchange = ()=>{
  let reader = new FileReader();
  reader.readAsDataURL(fileChooser.files[0]);
  reader.onload = function(e){
      audio.src = e.target.result; //等同于reader.result
      // console.log(e,reader,reader.result);  
  }
}
btn.onclick = ()=>{
  fileChooser.click();
}
//获取律动颜色
const colorInput = document.querySelector(".colorInput");
const colorBtn = document.querySelector(".btn1");
let text = document.querySelector(".tip-text");
//律动颜色 默认值
let color = "#f7797d";
//改变律动颜色
colorBtn.onclick = ()=>{
  // console.log(colorInput.value);
  //注意原生获取input表单中的值用value属性
  color = colorInput.value;
  text.className = "tip-text show";
  setTimeout(()=>{
    text.className = "tip-text";
  }, 1500);
}

//切换主题颜色
const btnChange = document.querySelector(".btn2");
let body = document.querySelector("body");
let isBlack = btnChange.innerHTML==="切换为浅色主题"?true:false;
btnChange.addEventListener("click", ()=>{
  if(isBlack){
    btnChange.innerHTML = "切换为深色主题";
    body.style.backgroundColor = "#fff";
    text.className = "tip-text tip-text-white show";
    isBlack = false;
    setTimeout(()=>{
      text.className = "tip-text tip-text-white";
    }, 1500);
  }else{
    btnChange.innerHTML = "切换为浅色主题";
    body.style.backgroundColor = "#000";
    text.className = "tip-text show";
    isBlack = true;
    setTimeout(()=>{
      text.className = "tip-text";
    }, 1500);
  }
})


//初始化画布
function initCanvas(){
  cvs.width = window.innerWidth+devicePixelRatio;
  cvs.height = (window.innerHeight/2)*devicePixelRatio;
}
initCanvas();

//是否已经初始化
let isInit = false;
//数组 用于接收分析器节点的分析数据
let dataArray;
//分析器节点
let analyser;


//音频器播放事件
audio.onplay = ()=>{
  //判断是否初始化
  if(isInit){
    return;
  }
  //开始初始化
  //创建音频上下文对象
  const audioCtx = new AudioContext();
  //创建音频源节点
  const source = audioCtx.createMediaElementSource(audio);
  //创建分析器节点
  analyser = audioCtx.createAnalyser();
  analyser.fftSize = 512;
  //接收分析器结点的分析数据
  dataArray = new Uint8Array(analyser.frequencyBinCount);
  source.connect(analyser);
  analyser.connect(audioCtx.destination);
  //已初始化
  isInit = true;
}

//将分析出来的结果绘制在画布上
function draw(){
  //逐帧绘制
  requestAnimationFrame(draw);
  //接下来清空画布
  const {width, height} = cvs;
  //清除模式画矩形
  ctx.clearRect(0, 0, width, height);
  if(!isInit){
    return;
  }
  //让分析器节点分析出数据到数组中
  analyser.getByteFrequencyData(dataArray);
  const len = dataArray.length/2;//矩形数量(只取一半 因为高频部分人耳听不到 看到波形也无感)
  const barWidth = width / len;//矩形的宽度
  ctx.fillStyle = color;//填充颜色 
  //循环绘制
  for(let i = 0; i<len; ++i){
    const data = dataArray[i];
    const barHeight = (data/255)*height/1.5;//矩形高度
    const x1 = i*barWidth+width/2;//右边区域中矩形的x坐标
    const x2 = width/2-(i+1)*barWidth;//左边区域中矩形的x坐标
    const y = height-barHeight;//矩形的y坐标
    //填充模式绘制矩形
    ctx.fillRect(x1, y, barWidth-2, barHeight);
    ctx.fillRect(x2, y, barWidth-2, barHeight);
  }
}

draw();
  },
}
</script>

<style scoped>
  *{
  margin: 0;
  padding: 0;
}

body{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000; 
}

canvas{
  position: absolute;
  width: 100%;
  height: 100vh;
}

audio{
  position: absolute;
  top: 20px;
  right: 20px;
  opacity: 0.15;
  transition: opacity 0.5s;
}

audio:hover{
  opacity: 1;
}

.btn{
  position: relative;
  width: 120px;
  height: 30px;
  top: 32px;
  left: 70vw;
  opacity: 0.15;
  transition: opacity 0.5s;
  border-radius: 10px;
  border: none;
  cursor: pointer;
}

.btn:hover{
  opacity: 1;
}

.colorInput{
  position: absolute;
  width: 150px;
  height: 30px;
  padding: 5px;
  border-radius: 10px;
  left: 3px;
  top: 30px;
  opacity: 0.15;
  transition: opacity 0.5s;
  outline: none;
  border: none;
}

.colorInput:hover{
  opacity: 1;
}

.btn1{
  position: absolute;
  width: 120px;
  height: 30px;
  top: 34px;
  left: 180px;
  opacity: 0.15;
  transition: opacity 0.5s;
  border-radius: 10px;
  border: none;
  cursor: pointer;
}

.btn1:hover{
  opacity: 1;
}

.tip-text{
  position: relative;
  left: 43vw;
  color: #fff;
  opacity: 0;
  transition: opacity .5s;
}

.tip-text-white{
  color: #000;
}

.show{
  opacity: 1;
}

.btn2{
  position: absolute;
  width: 120px;
  height: 30px;
  top: 34px;
  left: 310px;
  opacity: 0.15;
  transition: opacity 0.5s;
  border-radius: 10px;
  border: none;
  cursor: pointer;
}

.btn2:hover{
  opacity: 1;
}
</style>
