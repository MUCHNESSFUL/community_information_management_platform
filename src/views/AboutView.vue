<template>
  <div>
    <div class="middle">
        <div class="sidenav">
            <button class="dropdown-btn">校级社团
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-container">
              <a href="./community1.html">文化体育类</a>
              <a href="#">学术科技类</a>
              <a href="#">自律互动类</a>
              <a href="#">媒体宣传类</a>
              <a href="#">思想政治类</a>
              <a href="#">校园服务类</a>
              <a href="#">志愿公益类</a>
              <a href="#">创业创新类</a>
            </div>
            <a href="#contact">院级社团</a>
          </div>
        <div class="main">
            <div class="shetuan">
                <img src="../assets/5.png" alt="">
                <div class="wd">
                <h2 id="h2">A社(老校区)</h2>
                <p class="p">这里是简介</p>
                </div>
                <div class="bt">
                <button class="btn">关注</button>
                </div>
            </div>
        </div>

    </div>
  </div>
</template>

          
<script>
/* 遍历所有下拉按钮以在隐藏和显示其下拉内容之间切换 - 这允许用户拥有多个下拉列表而不会发生任何冲突 */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}
</script>

<style scopde>
  /* 固定 sidenav，全高 */
  .sidenav {
    height: 80%;
    width: 200px;
    position: fixed;
    z-index: 1;
    top: 20%;
    left: 0;
    background-color:white;
    overflow-x: hidden;
    padding-top: 20px;
  }
  
  /* 为 sidenav 链接和下拉按钮设置样式 */
  .sidenav a, .dropdown-btn {
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 20px;
    color: #818181;
    display: block;
    border: none;
    background: none;
    width: 100%;
    text-align: left;
    cursor: pointer;
    outline: none;
  }
  
  /* 鼠标悬停时 */
  .sidenav a:hover, .dropdown-btn:hover {
    color: #f1f1f1;
  }
  
  /* 主要内容 */
  .main {
     position: absolute;
      margin-left: 16%;
      margin-top: 9%;
      width: 78%;
      height:78%;
  }
  
  /* 为活动下拉按钮添加一个活动类 */
  .active {
    background-color: skyblue;
    color: white;
  }
  
  /* 下拉容器（默认隐藏）。 可选：添加较浅的背景颜色和一些左侧填充以更改下拉内容的设计 */
  .dropdown-container {
    display: none;
    background-color: gainsboro;
    padding-left: 8px;
  }
  
  /* 可选：向下插入符号图标样式 */
  .fa-caret-down {
    float: right;
    padding-right: 8px;
  }
  
  /* 响应式的一些媒体查询 */
  @media screen and (max-height: 450px) {
    .sidenav {padding-top: 15px;}
    .sidenav a {font-size: 18px;}
  }

  .shetuan{
    position: relative;
    border-radius: 20px;
    width: 500px;
    height: 150px;
    margin-top: 2%;
    border: 1px solid black;
}

.shetuan img{
    float: left;
    margin-top: 20px;
    margin-left: 20px;
    width: 100px;
}

#h2{
    float: left;
    margin-top: 5%;
    margin-left: 20px;
    font-size: 25px;
}

.p{
    padding-left: 50px;
    margin-top: 1%;
    margin-left: 18%;
    padding-top: 60px;
    width: 150px;
    font-size: 15px;
 }

 .bt{
    width: 100px;
    height:100px;
    margin-left: 80%;
    margin-top: -10%;
 }

 .btn{
    width: 70px;
    height:30px
 }
</style>
