<script>
import Collapse from './collapse.vue';
export default {

}

</script>

<template>
  <div>
  <br>
  <div class="box">
    <img src="../../assets/动态头像.png">
    <div class="imgR">
      <img src="../../assets/删除.png">
    </div>
    A社团
    <div class="boxInIt">
      hello
    </div>
    <div class="time">
      xxxx年x月x日
    </div>
  </div>
  <br>
  <div class="box">
    <img src="../../assets/动态头像.png">
    <div class="imgR">
      <img src="../../assets/删除.png">
    </div>
    A社团
      <div class="boxInIt">
      <Collapse>
        ......................................<br>
        ......................................<br>
        ......................................<br>
        .....................................<br>
        .....................................<br>
      </Collapse>
        <div class="imgDelete">
        </div>
      </div>
    <div class="time">
      xxxx年x月x日
    </div>
  </div>
  <br>
  <div class="box">
    
  </div>
  </div>
  
</template>

<style scoped>
*{
  margin: 0px;
  padding: 0px;
  font-family: "微软雅黑";
}
.box{
  width: 600px;
  padding: 25px;
  margin: 0 auto;
  background-color: #fff;
}
.boxInIt{
  width: 50px;
  padding: 20px;
  margin: 10px;
}
.imgR{
  float:right;
}
.imgL{
  float:left;
}

.imgDelete{
  border-radius: 15px;
  margin:0 auto;
  background: url(../../assets/展示图片.png);
  width: 450px;
  height: 250px;
  background-repeat: no-repeat;
  background-size: cover;
}
.time{
  color: rgb(221, 221, 219);
  float:right;
}
button{
  float:right;
}
.select{
  float:left;
  margin-right: 100px;
  background-color: transparent;
  border: 0;
  width: 140px;
  font-size: 30px;
  margin-top:35px;
  margin-bottom: 50px;
}
.selct:hover{
  box-shadow:0px 3px 6px black;
  border-radius: 5px;
}
</style>
