<template>
  <div>
    <div class="banner wrapper">
        <div class="left">
            <div class="head">
                <img src="../assets/3.png" alt="">
            </div>
            <div class="form">
                <table>
                    <tr>
                        <td>姓名</td>
                        <td>吴签</td>
                    </tr>
                    <tr>
                        <td>学院</td>
                        <td>材料科学与工程学院</td>
                    </tr>
                    <tr>
                        <td>学号</td>
                        <td>1145141919810</td>
                    </tr>
                    <tr>
                        <td>手机</td>
                        <td>114514</td>
                    </tr>
                    <tr>
                        <td>社团</td>
                        <td>TWT，青促</td>
                    </tr>
                </table>
            </div>
            <div class="bottom">
                <button id="button1">编辑</button>
                <button id="button2">退出登录</button>
            </div>
        </div>
        <div class="right">
            <div class="wd">
                <h2>已关注社团</h2>
            </div>
            <div class="focus" id="focus1">
                <img src="../assets/6.png" alt="">
                <p class="name">A社(新校区）</p>
                <button>关注</button>
               </div>
            <div class="focus" id="focus2">
                <img src="../assets/6.png" alt="">
                <p class="name">B社(新校区）</p>
                <button>关注</button>
               </div>
        </div>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.clearfix:before,.clearfix:after {
    content: "";
    display: table;
}

.clearfix:after {
    clear:both;
}

.wrapper {
    width: 100%;
    margin: 0 auto;
}

.line2{
    margin-top: 6.5%;
    border-bottom: 1px solid black;
}

.banner{
    width: 100%;
    
}

.left{
    float: left;
    width: 990px;
    height: 570px;
    margin-left: 5%;
    margin-top: -5%;
}

.head img{
    margin-top: 20%;
    width: 100px;
    margin-left: 680px;
}

.table, td
{
    border: 1px solid skyblue;    
    border-spacing: 0;
}

.table{
    border-spacing: 0;
    width:700px;
    height: 200px;
}
td:nth-child(1){
    height:50px;
    width:80px;
    text-align: center;
}
td:nth-child(2)
{
    height:50px;
    width: 400px;
    font-size:1em;
    padding-left: 10px;
}

.form{
    margin-top: 5%;
    margin-left: 480px;   
}

.bottom{
    margin-top: 6%;
    margin-left: 482px;
}

#button1{
    float: left;
    width: 80px;
    height: 40px;
}

#button2{
    float: left;
    margin-left: 63%;
    width: 80px;
    height: 40px
}

.right{
    float: left;
    width: 480px;
    height: 570px;
    font-size: 20px;
    margin-top: 5%;
    margin-left: 8%;
}

.wd{
    padding-left: 160px;
}

.focus{
    width: 400px;
    height:65px;
    border:1px solid black;
    border-radius: 20px;
    margin-left: 40px;
    margin-top: 20px;
}

.focus img{
    float: left;
    width: 60px;
    height: 60px;
    margin-left: 15px;
    margin-top: 2px;
}

.name{
    float: left;
    text-align: center;
    padding-left: 14px;
}

.focus button{
    float: left;
    margin-top: 20px;
    margin-left:80px;
    width:50px
}
</style>