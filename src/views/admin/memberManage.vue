<script>

</script>

<template>
  <div>
<br>
    <div class="box1" style="height:300px;overflow-y:auto">
        <div class="font"><RouterLink to="/admin/clubmanagement">管理端</RouterLink>成员</div>
        <div class="boxInIt1">
          <div class="imgL">
            <img src="../../assets/动态头像.png">
            光头强(<font color="grey"> 社长 </font> )
            <div class="boxInIt2">
              <RouterLink to="/admin/memberData">查看资料</RouterLink>
            </div>
          </div>
          <div class="imgL">
            <img src="../../assets/动态头像.png">
            熊大(<font color="grey"> 副社长 </font> )
            <div class="boxInIt2">查看资料</div>
          </div>
          <div class="imgL">
            <img src="../../assets/动态头像.png">
            熊二(<font color="grey"> 副社长 </font> )
            <div class="boxInIt2">查看资料</div>
          </div>
        </div>
    </div>
    <div class="box2" style="height:400px;overflow-y:auto">
      <div class="font">社团成员</div>
      <div class="boxInIt1">
        <div class="imgL">
          <img src="../../assets/动态头像.png">
          jdh
          <div class="boxInIt3">查看资料</div>
        </div>
        <div class="imgL">
          <img src="../../assets/动态头像.png">
          lgd
          <div class="boxInIt3">查看资料</div>
        </div>
        <div class="imgL">
          <img src="../../assets/动态头像.png">
          kou
          <div class="boxInIt3">查看资料</div>
        </div>
        <div class="imgL">
          <img src="../../assets/动态头像.png">
          kxl
          <div class="boxInIt3">查看资料</div>
        </div>
        <div class="imgL">
          <img src="../../assets/动态头像.png">
          jwx
          <div class="boxInIt3">查看资料</div>
        </div>
      </div>
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
    width: 450px;
    padding: 25px;
    margin: 70px;
    background-color: #fff;
    border-radius: 10px;
    float: left;
    border:1px solid black;
  }
  .box2{
    width: 450px;
    padding: 25px;
    margin: 70px;
    background-color: #fff;
    border-radius: 10px;
    float: right;
    border:1px solid black;
  }
  .boxInIt1{
    width: 350px;
    padding: 20px;
    margin: 10px;
    background-color: #fff;
    border-radius: 10px;
    float: left;
    border:1px solid black;
  }
  .boxInIt2{
    width: 70px;
    padding: 20px;
    margin: 5px 5px 5px 70px;
    background-color: #fff;
    border-radius: 10px;
    float: right;
    border:1px solid black;
    box-shadow: 1px 2px 2px grey
  }
  .boxInIt3{
    width: 70px;
    padding: 20px;
    margin: 5px 5px 5px 140px;
    background-color: #fff;
    border-radius: 10px;
    float: right;
    border:1px solid black;
    box-shadow: 1px 2px 2px grey
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