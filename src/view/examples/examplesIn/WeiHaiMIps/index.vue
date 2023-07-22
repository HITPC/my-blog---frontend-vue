<template>
  <div class="">
    <input type="text" placeholder="请输入指令，指令的逗号后必须加空格" id="input" style="width: 300px; height: 100px;">
  <button id="btn" style="width: 300px; height: 100px; cursor: pointer;">转换</button>
  <div>
    <span id="result"></span>
  </div>
  <div>
    <span id="result16"></span>
  </div>
  </div>
</template>

<script>
export default {
  name: 'WeiHaiMIPs',
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
    document.title = "WHMipsDecoder";
    function binary(number, bit) {
    let binary = (number >>> 0).toString(2);
    while (binary.length < bit) {
        binary = '0' + binary;
    }
    while(binary.length > bit){
      binary = binary.slice(1);
    }
    return binary;
  }


  // function dec2bin(decNumber, bit) {
  //     // 在这里实现你的转化方法，注意需要判断输入必须为一个非负整数
  //       if (decNumber < 0) {
  //           alert("请输入一个非负整数");
  //     } else {
  //         var q = binary(decNumber, bit);
  //         return q;
  //     }
  // }

  function getNumber(s){
    // var ds = "asdas"
    if(s.charAt(0)==="$"){
      s = s.slice(1);
    }
    if(s.charAt(s.length-1) === ","){
      s = s.substring(0, s.length - 1);
    }
    return Number.parseInt(s);
  }

  let input = document.getElementById("input");
  let btn = document.getElementById("btn");
  let result = document.getElementById("result");
  let result16 = document.getElementById("result16");

  function getRes(){
    result.innerHTML="";
    let indexArr = input.value.split(" ");
    console.log(indexArr);
    if(indexArr.length === 0){
      alert("input error");
      return;
    }
    let op = indexArr[0];
    let numberArr = [];
    let temp = []
    var resArr;
    switch (op){
      case "add": {
        resArr = new Array(6)
        resArr[0] = "000000";
        for(let i = 1; i<indexArr.length; ++i){ // 把操作数拆出来
          numberArr.push(getNumber(indexArr[i]));
        }
        for(let i = 0; i<numberArr.length; ++i){// 操作数转二进制
          temp.push(binary(numberArr[i], 5));
        }
        resArr[1] = temp[1];
        resArr[2] = temp[2];
        resArr[3] = temp[0];
        resArr[4] = "00000";
        resArr[5] = "100000";
        for(let i = 0; i<resArr.length; ++i){
          result.innerHTML+=resArr[i];
          result.innerHTML+=" ";
        }
        break;
      }
      case "addi": {
        resArr = new Array(4)
        resArr[0] = "001000";
        for(let i = 1; i<indexArr.length; ++i){ // 把操作数拆出来
          numberArr.push(getNumber(indexArr[i]));
        }
        for(let i = 0; i<numberArr.length; ++i){// 操作数转二进制
          
          if(i===2){
            temp.push(binary(numberArr[i], 16));
          }else{
            temp.push(binary(numberArr[i], 5));
          }
        }
        resArr[1] = temp[1];
        resArr[2] = temp[0];
        resArr[3] = temp[2];
        for(let i = 0; i<resArr.length; ++i){
          result.innerHTML+=resArr[i];
          result.innerHTML+=" ";
        }
        break;
      }
      case "addiu": {
        resArr = new Array(4)
        resArr[0] = "001001";
        for(let i = 1; i<indexArr.length; ++i){ // 把操作数拆出来
          numberArr.push(getNumber(indexArr[i]));
        }
        for(let i = 0; i<numberArr.length; ++i){// 操作数转二进制    
          if(i===2){
            temp.push(binary(numberArr[i], 16));
          }else{
            temp.push(binary(numberArr[i], 5));
          }
        }
        resArr[1] = temp[1];
        resArr[2] = temp[0];
        resArr[3] = temp[2];
        for(let i = 0; i<resArr.length; ++i){
          result.innerHTML+=resArr[i];
          result.innerHTML+=" ";
        }
        break;
      }
      case "addu": {
        resArr = new Array(6)
        resArr[0] = "000000";
        for(let i = 1; i<indexArr.length; ++i){ // 把操作数拆出来
          numberArr.push(getNumber(indexArr[i]));
        }
        for(let i = 0; i<numberArr.length; ++i){// 操作数转二进制
          temp.push(binary(numberArr[i], 5));
        }
        resArr[1] = temp[1];
        resArr[2] = temp[2];
        resArr[3] = temp[0];
        resArr[4] = "00000"
        resArr[5] = "100001"
        for(let i = 0; i<resArr.length; ++i){
          result.innerHTML+=resArr[i];
          result.innerHTML+=" ";
        }
        break;
      }
      case "and": {
        resArr = new Array(6)
        resArr[0] = "000000";
        for(let i = 1; i<indexArr.length; ++i){ // 把操作数拆出来
          numberArr.push(getNumber(indexArr[i]));
        }
        for(let i = 0; i<numberArr.length; ++i){// 操作数转二进制
          temp.push(binary(numberArr[i], 5));
        }
        resArr[1] = temp[1];
        resArr[2] = temp[2];
        resArr[3] = temp[0];
        resArr[4] = "00000"
        resArr[5] = "100100"
        for(let i = 0; i<resArr.length; ++i){
          result.innerHTML+=resArr[i];
          result.innerHTML+=" ";
        }
        break;
      }
      case "andi": {
        resArr = new Array(4)
        resArr[0] = "001100";
        for(let i = 1; i<indexArr.length; ++i){ // 把操作数拆出来
          numberArr.push(getNumber(indexArr[i]));
        }
        for(let i = 0; i<numberArr.length; ++i){// 操作数转二进制    
          if(i===2){
            temp.push(binary(numberArr[i], 16));
          }else{
            temp.push(binary(numberArr[i], 5));
          }
        }
        resArr[1] = temp[1];
        resArr[2] = temp[0];
        resArr[3] = temp[2];
        for(let i = 0; i<resArr.length; ++i){
          result.innerHTML+=resArr[i];
          result.innerHTML+=" ";
        }
        break;
      }
      case "beq": {
        resArr = new Array(4)
        resArr[0] = "000100";
        for(let i = 1; i<indexArr.length; ++i){ // 把操作数拆出来
          numberArr.push(getNumber(indexArr[i]));
        }
        for(let i = 0; i<numberArr.length; ++i){// 操作数转二进制    
          if(i===2){
            temp.push(binary(numberArr[i], 16));
          }else{
            temp.push(binary(numberArr[i], 5));
          }
        }
        resArr[1] = temp[0];
        resArr[2] = temp[1];
        resArr[3] = temp[2];
        for(let i = 0; i<resArr.length; ++i){
          result.innerHTML+=resArr[i];
          result.innerHTML+=" ";
        }
        break;
      }
      case "bgtz": {
        resArr = new Array(4)
        resArr[0] = "000111";
        for(let i = 1; i<indexArr.length; ++i){ // 把操作数拆出来
          numberArr.push(getNumber(indexArr[i]));
        }
        for(let i = 0; i<numberArr.length; ++i){// 操作数转二进制    
          if(i===1){
            temp.push(binary(numberArr[i], 16));
          }else{
            temp.push(binary(numberArr[i], 5));
          }
        }
        resArr[1] = temp[0];
        resArr[2] = "00000";
        resArr[3] = temp[1];
        for(let i = 0; i<resArr.length; ++i){
          result.innerHTML+=resArr[i];
          result.innerHTML+=" ";
        }
        break;
      }
      case "bltz": {
        resArr = new Array(4)
        resArr[0] = "000001";
        for(let i = 1; i<indexArr.length; ++i){ // 把操作数拆出来
          numberArr.push(getNumber(indexArr[i]));
        }
        for(let i = 0; i<numberArr.length; ++i){// 操作数转二进制    
          if(i===1){
            temp.push(binary(numberArr[i], 16));
          }else{
            temp.push(binary(numberArr[i], 5));
          }
        }
        resArr[1] = temp[0];
        resArr[2] = "00000";
        resArr[3] = temp[1];
        for(let i = 0; i<resArr.length; ++i){
          result.innerHTML+=resArr[i];
          result.innerHTML+=" ";
        }
        break;
      }
      case "bne": {
        resArr = new Array(4)
        resArr[0] = "000101";
        for(let i = 1; i<indexArr.length; ++i){ // 把操作数拆出来
          numberArr.push(getNumber(indexArr[i]));
        }
        for(let i = 0; i<numberArr.length; ++i){// 操作数转二进制    
          if(i===2){
            temp.push(binary(numberArr[i], 16));
          }else{
            temp.push(binary(numberArr[i], 5));
          }
        }
        resArr[1] = temp[0];
        resArr[2] = temp[1];
        resArr[3] = temp[2];
        for(let i = 0; i<resArr.length; ++i){
          result.innerHTML+=resArr[i];
          result.innerHTML+=" ";
        }
        break;
      }
      case "j": {
        resArr = new Array(2)
        resArr[0] = "000010";
        for(let i = 1; i<indexArr.length; ++i){ // 把操作数拆出来
          numberArr.push(getNumber(indexArr[i]));
        }
        for(let i = 0; i<numberArr.length; ++i){// 操作数转二进制    
          
            temp.push(binary(numberArr[i], 26));
          
        }
        resArr[1] = temp[0];
        for(let i = 0; i<resArr.length; ++i){
          result.innerHTML+=resArr[i];
          result.innerHTML+=" ";
        }
        break;
      }
      case "jal": {
        resArr = new Array(2)
        resArr[0] = "000011";
        for(let i = 1; i<indexArr.length; ++i){ // 把操作数拆出来
          numberArr.push(getNumber(indexArr[i]));
        }
        for(let i = 0; i<numberArr.length; ++i){// 操作数转二进制    
          
            temp.push(binary(numberArr[i], 26));
          
        }
        resArr[1] = temp[0];
        for(let i = 0; i<resArr.length; ++i){
          result.innerHTML+=resArr[i];
          result.innerHTML+=" ";
        }
        break;
      }
      case "jr": {
        resArr = new Array(4)
        resArr[0] = "000000";
        for(let i = 1; i<indexArr.length; ++i){ // 把操作数拆出来
          numberArr.push(getNumber(indexArr[i]));
        }
        for(let i = 0; i<numberArr.length; ++i){// 操作数转二进制    
          
            temp.push(binary(numberArr[i], 5));
          
        }
        resArr[1] = temp[0];
        resArr[2] = "000000000000000";
        resArr[3] = "001000";
        for(let i = 0; i<resArr.length; ++i){
          result.innerHTML+=resArr[i];
          result.innerHTML+=" ";
        }
        break;
      }
      case "lbu": {
        alert("没写");
        break;
      }
      case "lhu": {
        alert("没写");
        break;
      }
      case "lui": {
        resArr = new Array(4)
        resArr[0] = "001111";
        for(let i = 1; i<indexArr.length; ++i){ // 把操作数拆出来
          numberArr.push(getNumber(indexArr[i]));
        }
        for(let i = 0; i<numberArr.length; ++i){// 操作数转二进制    
          if(i==1){
            temp.push(binary(numberArr[i], 16));
          }else{
            temp.push(binary(numberArr[i], 5));
          }
            
          
        }
        resArr[1] = "00000";
        resArr[2] = temp[0];
        resArr[3] = temp[1];
        for(let i = 0; i<resArr.length; ++i){
          result.innerHTML+=resArr[i];
          result.innerHTML+=" ";
        }
        break;
      }
      case "lw": {
        alert("没写");
        break;
      }
      case "nor": {
        resArr = new Array(6)
        resArr[0] = "000000";
        for(let i = 1; i<indexArr.length; ++i){ // 把操作数拆出来
          numberArr.push(getNumber(indexArr[i]));
        }
        for(let i = 0; i<numberArr.length; ++i){// 操作数转二进制
          temp.push(binary(numberArr[i], 5));
        }
        resArr[1] = temp[1];
        resArr[2] = temp[2];
        resArr[3] = temp[0];
        resArr[4] = "00000"
        resArr[5] = "100111"
        for(let i = 0; i<resArr.length; ++i){
          result.innerHTML+=resArr[i];
          result.innerHTML+=" ";
        }
        break;
      }
      case "or": {
        resArr = new Array(6)
        resArr[0] = "000000";
        for(let i = 1; i<indexArr.length; ++i){ // 把操作数拆出来
          numberArr.push(getNumber(indexArr[i]));
        }
        for(let i = 0; i<numberArr.length; ++i){// 操作数转二进制
          temp.push(binary(numberArr[i], 5));
        }
        resArr[1] = temp[1];
        resArr[2] = temp[2];
        resArr[3] = temp[0];
        resArr[4] = "00000"
        resArr[5] = "100101"
        for(let i = 0; i<resArr.length; ++i){
          result.innerHTML+=resArr[i];
          result.innerHTML+=" ";
        }
        break;
      }
      case "ori": {
        resArr = new Array(4)
        resArr[0] = "001101";
        for(let i = 1; i<indexArr.length; ++i){ // 把操作数拆出来
          numberArr.push(getNumber(indexArr[i]));
        }
        for(let i = 0; i<numberArr.length; ++i){// 操作数转二进制
          if(i==2){
            temp.push(binary(numberArr[i], 16));
          }else{
            temp.push(binary(numberArr[i], 5));
          }
          
        }
        resArr[1] = temp[1];
        resArr[2] = temp[0];
        resArr[3] = temp[2];
        for(let i = 0; i<resArr.length; ++i){
          result.innerHTML+=resArr[i];
          result.innerHTML+=" ";
        }
        break;
      }
      case "sb": {
        alert("没写");
        break;
      }
      case "sh": {
        alert("没写");
        break;
      }
      case "sll": {
        resArr = new Array(6)
        resArr[0] = "000000";
        for(let i = 1; i<indexArr.length; ++i){ // 把操作数拆出来
          numberArr.push(getNumber(indexArr[i]));
        }
        for(let i = 0; i<numberArr.length; ++i){// 操作数转二进制
          temp.push(binary(numberArr[i], 5));
        }
        resArr[1] = "00000";
        resArr[2] = temp[1];
        resArr[3] = temp[0];
        resArr[4] = temp[2];
        resArr[5] = "000000";
        for(let i = 0; i<resArr.length; ++i){
          result.innerHTML+=resArr[i];
          result.innerHTML+=" ";
        }
        break;
      }
      case "sllv": {
        resArr = new Array(6)
        resArr[0] = "000000";
        for(let i = 1; i<indexArr.length; ++i){ // 把操作数拆出来
          numberArr.push(getNumber(indexArr[i]));
        }
        for(let i = 0; i<numberArr.length; ++i){// 操作数转二进制
          temp.push(binary(numberArr[i], 5));
        }
        resArr[1] = temp[2];
        resArr[2] = temp[1];
        resArr[3] = temp[0];
        resArr[4] = "00000";
        resArr[5] = "000100";
        for(let i = 0; i<resArr.length; ++i){
          result.innerHTML+=resArr[i];
          result.innerHTML+=" ";
        }
        break;
      }
      case "slt": {
        resArr = new Array(6)
        resArr[0] = "000000";
        for(let i = 1; i<indexArr.length; ++i){ // 把操作数拆出来
          numberArr.push(getNumber(indexArr[i]));
        }
        for(let i = 0; i<numberArr.length; ++i){// 操作数转二进制
          temp.push(binary(numberArr[i], 5));
        }
        resArr[1] = temp[1];
        resArr[2] = temp[2];
        resArr[3] = temp[0];
        resArr[4] = "00000";
        resArr[5] = "101010";
        for(let i = 0; i<resArr.length; ++i){
          result.innerHTML+=resArr[i];
          result.innerHTML+=" ";
        }
        break;
      }
      case "slti": {
        resArr = new Array(4)
        resArr[0] = "001010";
        for(let i = 1; i<indexArr.length; ++i){ // 把操作数拆出来
          numberArr.push(getNumber(indexArr[i]));
        }
        for(let i = 0; i<numberArr.length; ++i){// 操作数转二进制
          if(i==2){
            temp.push(binary(numberArr[i], 16));
          }else{
            temp.push(binary(numberArr[i], 5));
          }
          
        }
        resArr[1] = temp[1];
        resArr[2] = temp[0];
        resArr[3] = temp[2];
        for(let i = 0; i<resArr.length; ++i){
          result.innerHTML+=resArr[i];
          result.innerHTML+=" ";
        }
        break;
      }
      case "sltiu": {
        resArr = new Array(4)
        resArr[0] = "001011";
        for(let i = 1; i<indexArr.length; ++i){ // 把操作数拆出来
          numberArr.push(getNumber(indexArr[i]));
        }
        for(let i = 0; i<numberArr.length; ++i){// 操作数转二进制
          if(i==2){
            temp.push(binary(numberArr[i], 16));
          }else{
            temp.push(binary(numberArr[i], 5));
          }
          
        }
        resArr[1] = temp[1];
        resArr[2] = temp[0];
        resArr[3] = temp[2];
        for(let i = 0; i<resArr.length; ++i){
          result.innerHTML+=resArr[i];
          result.innerHTML+=" ";
        }
        break;
      }
      case "sltu": {
        resArr = new Array(6)
        resArr[0] = "000000";
        for(let i = 1; i<indexArr.length; ++i){ // 把操作数拆出来
          numberArr.push(getNumber(indexArr[i]));
        }
        for(let i = 0; i<numberArr.length; ++i){// 操作数转二进制
          temp.push(binary(numberArr[i], 5));
        }
        resArr[1] = temp[1];
        resArr[2] = temp[2];
        resArr[3] = temp[0];
        resArr[4] = "00000";
        resArr[5] = "101011";
        for(let i = 0; i<resArr.length; ++i){
          result.innerHTML+=resArr[i];
          result.innerHTML+=" ";
        }
        break;
      }
      case "sra": {
        resArr = new Array(6)
        resArr[0] = "000000";
        for(let i = 1; i<indexArr.length; ++i){ // 把操作数拆出来
          numberArr.push(getNumber(indexArr[i]));
        }
        for(let i = 0; i<numberArr.length; ++i){// 操作数转二进制
          temp.push(binary(numberArr[i], 5));
        }
        resArr[1] = "00000";
        resArr[2] = temp[1];
        resArr[3] = temp[0];
        resArr[4] = temp[2];
        resArr[5] = "000011";
        for(let i = 0; i<resArr.length; ++i){
          result.innerHTML+=resArr[i];
          result.innerHTML+=" ";
        }
        break;
      }
      case "srav": {
        resArr = new Array(6)
        resArr[0] = "000000";
        for(let i = 1; i<indexArr.length; ++i){ // 把操作数拆出来
          numberArr.push(getNumber(indexArr[i]));
        }
        for(let i = 0; i<numberArr.length; ++i){// 操作数转二进制
          temp.push(binary(numberArr[i], 5));
        }
        resArr[1] = temp[2];
        resArr[2] = temp[1];
        resArr[3] = temp[0];
        resArr[4] = "00000";
        resArr[5] = "000111";
        for(let i = 0; i<resArr.length; ++i){
          result.innerHTML+=resArr[i];
          result.innerHTML+=" ";
        }
        break;
      }
      case "srl": {
        resArr = new Array(6)
        resArr[0] = "000000";
        for(let i = 1; i<indexArr.length; ++i){ // 把操作数拆出来
          numberArr.push(getNumber(indexArr[i]));
        }
        for(let i = 0; i<numberArr.length; ++i){// 操作数转二进制
          temp.push(binary(numberArr[i], 5));
        }
        resArr[1] = "00000";
        resArr[2] = temp[1];
        resArr[3] = temp[0];
        resArr[4] = temp[2];
        resArr[5] = "000010";
        for(let i = 0; i<resArr.length; ++i){
          result.innerHTML+=resArr[i];
          result.innerHTML+=" ";
        }
        break;
      }
      case "sub": {
        resArr = new Array(6)
        resArr[0] = "000000";
        for(let i = 1; i<indexArr.length; ++i){ // 把操作数拆出来
          numberArr.push(getNumber(indexArr[i]));
        }
        for(let i = 0; i<numberArr.length; ++i){// 操作数转二进制
          temp.push(binary(numberArr[i], 5));
        }
        resArr[1] = temp[1];
        resArr[2] = temp[2];
        resArr[3] = temp[0];
        resArr[4] = "00000";
        resArr[5] = "100010";
        for(let i = 0; i<resArr.length; ++i){
          result.innerHTML+=resArr[i];
          result.innerHTML+=" ";
        }
        break;
      }
      case "subu": {
        resArr = new Array(6)
        resArr[0] = "000000";
        for(let i = 1; i<indexArr.length; ++i){ // 把操作数拆出来
          numberArr.push(getNumber(indexArr[i]));
        }
        for(let i = 0; i<numberArr.length; ++i){// 操作数转二进制
          temp.push(binary(numberArr[i], 5));
        }
        resArr[1] = temp[1];
        resArr[2] = temp[2];
        resArr[3] = temp[0];
        resArr[4] = "00000";
        resArr[5] = "100011";
        for(let i = 0; i<resArr.length; ++i){
          result.innerHTML+=resArr[i];
          result.innerHTML+=" ";
        }
        break;
      }
      case "sw":{
        alert("没写");
        return;
      }
      case "xor": {
        resArr = new Array(6)
        resArr[0] = "000000";
        for(let i = 1; i<indexArr.length; ++i){ // 把操作数拆出来
          numberArr.push(getNumber(indexArr[i]));
        }
        for(let i = 0; i<numberArr.length; ++i){// 操作数转二进制
          temp.push(binary(numberArr[i], 5));
        }
        resArr[1] = temp[1];
        resArr[2] = temp[2];
        resArr[3] = temp[0];
        resArr[4] = "00000";
        resArr[5] = "100110";
        for(let i = 0; i<resArr.length; ++i){
          result.innerHTML+=resArr[i];
          result.innerHTML+=" ";
        }
        break;
      }
      case "xori": {
        resArr = new Array(4)
        resArr[0] = "001110";
        for(let i = 1; i<indexArr.length; ++i){ // 把操作数拆出来
          numberArr.push(getNumber(indexArr[i]));
        }
        for(let i = 0; i<numberArr.length; ++i){// 操作数转二进制
          if(i==2){
            temp.push(binary(numberArr[i], 16));
          }else{
            temp.push(binary(numberArr[i], 5));
          }
          
        }
        resArr[1] = temp[1];
        resArr[2] = temp[0];
        resArr[3] = temp[2];
        for(let i = 0; i<resArr.length; ++i){
          result.innerHTML+=resArr[i];
          result.innerHTML+=" ";
        }
        break;
      }  
    }
    let str = ""
    for(let i = 0; i<resArr.length; ++i){
      str += resArr[i];
    }
    str = parseInt(str,2).toString(16);
    let t = "";
    if(str.length < 8){
      for(let i = 0; i<8-str.length; ++i){
        t += "0";
      }
      str = t + str;
    }
    result16.innerHTML = str;
  }

  btn.addEventListener("click", getRes);
  },
}
</script>

<style scoped>
  
</style>
