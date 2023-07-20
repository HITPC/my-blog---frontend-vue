<template>
  <div class="container">
    <div class="clock">
        <p id="1">0</p>
        <p id="2">0</p>
        <p id="3">:</p>
        <p id="4">0</p>
        <p id="5">0</p>
        <p id="6">:</p>
        <p id="7">0</p>
        <p id="8">0</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WhitePinkClock',
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
    document.title = "白桃粉时钟";
    function myTime() {
        let time = new Date();
        let hh = time.getHours();
        let mm = time.getMinutes();
        let ss = time.getSeconds();
        document.getElementById('1').innerHTML = Math.floor(hh / 10);
        document.getElementById('2').innerHTML = hh % 10;
        document.getElementById('4').innerHTML = Math.floor(mm / 10);
        document.getElementById('5').innerHTML = mm % 10;
        document.getElementById('7').innerHTML = Math.floor(ss / 10);
        document.getElementById('8').innerHTML = ss % 10;
    }

    setInterval(myTime, 1000);
  },
}
</script>

<style scoped>
  * {
    padding: 0;
    margin: 0;
}

.container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #eacccc;
    user-select: none;
}

.clock {
    display: flex;
}

.clock p {
    width: 95px;
    font-size: 150px;
    color: white;
    text-align: center;
    font-weight: 900;
    text-shadow: 0 1px 0 #deafaf, 0 2px 0 #bda8a8, 0 3px 0 #d8a1a1, 0 4px 0 #d59999, 0 5px 0 #d29292, 0 6px 0 #cf8b8b, 0 7px 0 #cc8484, 0 8px 0 #c97d7d, 0 0 5px rgba(231, 156, 156, 0.05), 0 -1px 3px rgba(231, 156, 156, 0.2), 0 9px 9px rgba(231, 156, 156, 0.3), 0 12px 12px rgba(231, 156, 156, 0.3), 0 15px 15px rgba(231, 156, 156, 0.3);
}
</style>
