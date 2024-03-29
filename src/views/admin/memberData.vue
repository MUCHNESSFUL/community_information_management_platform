<script>

</script>

<template>
    <div>
    <br>
    <div class="box">
        <img src="../../assets/个人中心头像.png">
        <br>
        <div class="font">顶针(昵称</div><br>
        <hr>
        <br>
        姓名：吴谦<br><br>
        <hr><br>
        学院：材料与工程学院<br><br>
        <hr><br>
        专业：摸鱼<br><br>
        <hr><br>
        兴趣：摸鱼<br><br>
        <hr><br>
        部门：xxx部<br><br>
        <hr>
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
img{
    height:100px;
    width:100px;
	position: relative;
	left: 50%;
	top: 50%;
	transform: translate(-50%,-10%);
}
.box{
    width: 600px;
    padding: 25px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 6px;
    border:1px solid black;
  }
.boxInIt{
    width: 50px;
    padding: 20px;
    margin: 10px;
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
  .imgL{
    float:left;
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