<script>

</script>

<template>
  <div>
    <div class="select">
        <router-link to="/edit">我的通知</router-link>&nbsp;&nbsp;
        <router-link to="/cluboverview">成员管理</router-link>
    </div>
  <div class="box1">
      入社申请
      <br>
      <div class="boxInIt">
        <img src="../../assets/搜索结果头像.png">
        粉色妖精小组<br>
        <font size="1">爱丽西娅</font><br>
        <font size="1">学号：1111</font>
     </div>
     <div class="imgL">
      <font size="5">XX社</font>
      <img src="../assets/photos/pictures/11.jpg">
      <img src="../assets/photos/pictures/12.jpg">
     </div>
     <br><br><br><br><br><br><br><br><br><br>
     退社申请
     <br>
     <div class="boxInIt">
      <img src="../assets/photos/pictures/动态头像2.png">
      褪色妖精小组<br>
      <font size="1">侵蚀之律者</font><br>
      <font size="1">学号：728</font>
   </div>
   <div class="imgL">
    <font size="5">XX社</font>
    <img src="../assets/photos/pictures/11.jpg">
    <img src="../assets/photos/pictures/12.jpg">
   </div>
  </div>
<div class="imgR">
    <RouterLink to="/cluboverview">
        <buttton>返回</buttton>
    </RouterLink>
</div>
  </div>
</template>

<style scoped>
*{
  margin: 0px;
  padding: 0px;
  font-family: "微软雅黑";
}
.font{
  font-size:23px;
  text-align: center;
}
.box1{
  width: 750px;
  padding: 25px;
  margin: 70px;
  background-color: #fff;
  border-radius: 10px;
  float: left;
  border:1px solid black;
}
.boxInIt{
  width: 350px;
  padding: 20px;
  margin: 10px;
  background-color: #fff;
  border-radius: 10px;
  float: left;
  border:1px solid black;
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
  img{
    height:80px;
    width:80px;
  }
  .imgL{
    margin: 5px 5px 5px 70px;
  }
  .imgR{
    width: 60px;
    background-color: #fff;
    border-radius: 2px;
    float: right;
    border:1px solid black;
    box-shadow: 1px 2px 2px grey;
    text-align:center;
    position: fixed;  
    bottom: 20px;  
    right: 20px; 
  }
</style>