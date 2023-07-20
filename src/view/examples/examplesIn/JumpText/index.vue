<template>
  <div class="boo">
    <article>
        <p id="text">
            兰之猗猗，扬扬其香。众香拱之，幽幽其芳。不采而佩，于兰何伤?以日以年，我行四方。文王梦熊，渭水泱泱。采而佩之，奕奕清芳。雪霜茂茂，蕾蕾于冬，君子之守，子孙之昌。雪霜茂茂，蕾蕾于冬，君子之守，子孙之昌。兰之猗猗，扬扬其香。众香拱之，幽幽其芳。不采而佩，于兰何伤?以日以年，我行四方。文王梦熊，渭水泱泱。采而佩之，奕奕清芳。雪霜茂茂，蕾蕾于冬，君子之守，子孙之昌。雪霜茂茂，蕾蕾于冬，君子之守，子孙之昌。
        </p>
        <button id="btn">点我放松一下</button>
    </article>
  </div>
</template>

<script>
export default {
  name: 'JumpText',
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
    document.title = "乱跑的文字";
    function Neontext(n) {
    var e = document.getElementById(n),
        o = e.innerText.split(""),
        t = this;
    window;
    this.resetTime = 10, this.color = ["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#9e9e9e", "#607d8b"],
        this.randomColor = function() {
            var n = Math.floor(this.color.length * Math.random());
            return this.color[n]
        },
        this.posRangencala = function() { return e.hasAttribute("ele-range") ? { minRange: { x: e.offsetLeft, y: e.offsetTop }, maxRange: { x: e.offsetLeft + e.offsetWidth, y: e.offsetTop + e.offsetHeight } } : { minRange: { x: 0, y: 0 }, maxRange: { x: document.documentElement.clientWidth, y: document.documentElement.clientHeight } } },
        this.spanArr = function() {
            e.innerHTML = "";
            var n = [];
            return o.forEach(function(o) {
                var a = document.createElement("span");
                a.style.display = "inline-block", a.innerHTML = o, a.style.position = "relative", a.style.zIndex = e.hasAttribute("ele-range") ? "1" : "-1", a.style.color = t.randomColor(), a.own = { pos: { x: 0, y: 0 }, ran: { x: -.5 + Math.random(), y: -.5 + Math.random() }, speed: { x: 1, y: 1 }, dir: { x: 1, y: 1 } }, e.appendChild(a), n.push(a)
            }), n
        }(), this.spanOrigin = function() { this.spanArr.forEach(function(n) { n.own.realPos = { minx: n.offsetLeft, maxx: n.offsetLeft + n.offsetWidth, miny: n.offsetTop, maxy: n.offsetTop + n.offsetHeight } }), this.posRangen = this.posRangencala() }, this.spanOrigin(), this.resetpos = function() { this.spanOrigin(), console.log(e + "====" + this.spanArr[0].own.pos.x + "====" + this.posRangen.maxRange.x), this.spanArr.forEach(function(n) { n.own.realPos.minx + n.own.pos.x < t.posRangen.minRange.x && (n.own.pos.x = 0), n.own.realPos.maxx + n.own.pos.x > t.posRangen.maxRange.x && (n.own.pos.x = 0), n.own.realPos.miny + n.own.pos.y < t.posRangen.minRange.y && (n.own.pos.y = 0), n.own.realPos.maxy + n.own.pos.y > t.posRangen.maxRange.y && (n.own.pos.y = 0) }) }, this.floatText = function() {
            this.spanArr.forEach(function(n) {
                (n.own.realPos.minx + n.own.pos.x < t.posRangen.minRange.x || n.own.realPos.maxx + n.own.pos.x > t.posRangen.maxRange.x) && (n.own.dir.x = -n.own.dir.x), (n.own.realPos.miny + n.own.pos.y < t.posRangen.minRange.y || n.own.realPos.maxy + n.own.pos.y > t.posRangen.maxRange.y) && (n.own.dir.y = -n.own.dir.y), n.own.pos.x += n.own.ran.x * n.own.speed.x * n.own.dir.x, n.own.pos.y += n.own.ran.y * n.own.speed.y * n.own.dir.y, n.style.transform = "translateX(" + n.own.pos.x + "px) translateY(" + n.own.pos.y + "px)"
            })
        }, this.floatBack = function() {
            if (this.spanArr.forEach(function(n) {
                    var o = n.own.pos.x - n.own.pos.x * t.resetTime / 100,
                        s = n.own.pos.y - n.own.pos.y * t.resetTime / 100;
                    n.style.transform = "translateX(" + o + "px) translateY(" + s + "px)"
                }), 100 === this.resetTime) return cancelAnimationFrame(t.send), !0;
            this.resetTime += 5
        }, this.restart = function() { this.spanArr.forEach(function(n) { n.own.pos.x = 0, n.own.pos.y = 0 }) }, this.render = { run: function() { t.sren = requestAnimationFrame(t.render.run), t.floatText() }, end: function() { t.send = requestAnimationFrame(t.render.end), t.floatBack() }, killer: function() { t.floatBack() ? (cancelAnimationFrame(t.send), t.restart(), t.resetTime = 10, t.render.run()) : (cancelAnimationFrame(t.sren), t.render.end()) } }, window.onresize = function() { t.resetpos() }
}
const resetBtn = document.getElementById('btn');
const nenotext = new Neontext('text');
nenotext.render.run();
resetBtn.addEventListener('click', () => {
    nenotext.render.killer();
})
  },
}
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
}

.boo {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
}

#text {
    color: white;
    font-size: 20px;
    width: 80vw;
    line-height: 1.5;
    margin: 100 auto;
}

#btn {
    display: block;
    width: 150px;
    height: 50px;
    border: 1px solid #000;
    background-color: #fff;
    color: rgb(248, 208, 65);
    font-size: 20px;
    outline: none;
    cursor: pointer;
    border-radius: 8px;
    margin: 0 auto;
}
</style>
