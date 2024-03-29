<template>
    <div id="father">
    <div id="container">
        <button id="button1">选择社团</button><button id="button2">字号字体</button> <button id="button3">文章类型</button> <button
            id="button4">字体颜色</button>
        <div id="overlay"></div>
    </div>
    <div id="popup1">
        选择社团
        
        <img src="../assets/cross.png" class="closebtn" id="closebtn1">
        
        <br />
        <br />
        <div class="clubchoice">
            <img src="../assets/6.png">
            B社（老校区）
            <button>选择</button>
        </div>


        <div class="clubchoice">
            <img src="../assets/6.png">
            A社（老校区）
            <button>选择</button>
        </div>

        <br />

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button class="queding" id="queding1"> 确定</button>
    </div>


    <div id="popup2">
       
            <img src="../assets/cross.png" class="closebtn" id="closebtn2">
       
        字号
        <br />
        <input id="zihao" type="number" name="zihao">
        <br />
        字体
        <br />
        <input id="ziti1" name="ziti1">
        <ul id="dpnc1">
            <li>Arial</li>
            <li>Times New Roman</li>
            <li>Courier New</li>
        </ul>
        <input id="ziti2" name="ziti2">
        <ul id="dpnc2">
            <li>sans-serif</li>
            <li>serif</li>
            <li>monospace</li>
        </ul>
        <br />
        <br />

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button class="queding" id="queding2"> 确定</button>
    </div>
    <div id="popup3">
       
        <img src="../assets/cross.png" class="closebtn" id="closebtn3">
       
        文章类型
        <br />
        <input id="wenzhangleixing" type="text" name="wenzhangleixing">
        <ul id="dpnc">
            <li>通知</li>
            <li>新闻</li>
            <li>招新</li>
            <li>活动</li>
            <li>宣传</li>
        </ul>
        <br />
        举办时间
        <br />

        <input id="jubanshijian" type="text" name="jubanshijian">
        <br />
        相关链接
        <br />

        <input id="xiangguanlianjie" type="text" name="xiangguanlianjie">

        <br />
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button class="queding" id="queding3"> 确定</button>
    </div>


    <div id="popup4">
        
    <img src="../assets/cross.png" class="closebtn" id="closebtn4">
        
        字体颜色
        <br />
        <br />
        rgb<br/>
        <input id="colorchoice1">
        <input id="colorchoice2">
        <input id="colorchoice3">
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button class="queding" id="queding4"> 确定</button>
    </div>
    </div>
</template>
<script>
        // const father=document.getElementById('father')
        // const colorchoice1=document.getElementById('colorchoice1')
        // const colorchoice2=document.getElementById('colorchoice2')
        // const colorchoice3=document.getElementById('colorchoice3')
        // const zihao=document.getElementById('zihao')
        // const ziti1=document.getElementById('ziti1')
        // const ziti2=document.getElementById('ziti2')
        // const queding1 = document.getElementById('queding1')
        // const queding2 = document.getElementById('queding2')
        // const queding3 = document.getElementById('queding3')
        // const queding4 = document.getElementById('queding4')
        // const button1 = document.getElementById('button1');
        // const button2 = document.getElementById('button2');
        // const button3 = document.getElementById('button3');
        // const button4 = document.getElementById('button4');
        // const popup1 = document.getElementById('popup1');
        // const popup2 = document.getElementById('popup2');
        // const popup3 = document.getElementById('popup3');
        // const popup4 = document.getElementById('popup4');
        // const overlay = document.getElementById('overlay');
        // const closebtn1 = document.getElementById('closebtn1');
        // const closebtn2 = document.getElementById('closebtn2');
        // const closebtn3 = document.getElementById('closebtn3');
        // const closebtn4 = document.getElementById('closebtn4');
        // console.log(queding2)
        // queding2.addEventListener('click', function () {
        //     father.style.fontFamily = ziti1.value+","+ziti2.value;
        //     father.style.fontSize = zihao.value+'px'
        // })
        // queding4.addEventListener('click', function () {
        //     father.style.color='rgb'+'('+colorchoice1.value+','+colorchoice2.value+','+colorchoice3.value+')'
        // })
        // button1.addEventListener('click', function () {
        //     popup1.style.display = 'block';
        //     overlay.style.display = 'block';
        // })
        // button2.addEventListener('click', function () {
        //     popup2.style.display = 'block';
        //     overlay.style.display = 'block';
        // })
        // button3.addEventListener('click', function () {
        //     popup3.style.display = 'block';
        //     overlay.style.display = 'block';
        // })
        // button4.addEventListener('click', function () {
        //     popup4.style.display = 'block';
        //     overlay.style.display = 'block';
        // })
        // closebtn1.addEventListener('click', function () {
        //     popup1.style.display = 'none';
        //     popup2.style.display = 'none';
        //     popup3.style.display = 'none';
        //     popup4.style.display = 'none';
        //     overlay.style.display = 'none';
        // })
        // closebtn2.addEventListener('click', function () {
        //     popup1.style.display = 'none';
        //     popup2.style.display = 'none';
        //     popup3.style.display = 'none';
        //     popup4.style.display = 'none';
        //     overlay.style.display = 'none';
        // })
        // closebtn3.addEventListener('click', function () {
        //     popup1.style.display = 'none';
        //     popup2.style.display = 'none';
        //     popup3.style.display = 'none';
        //     popup4.style.display = 'none';
        //     overlay.style.display = 'none';
        // })
        // closebtn4.addEventListener('click', function () {
        //     popup1.style.display = 'none';
        //     popup2.style.display = 'none';
        //     popup3.style.display = 'none';
        //     popup4.style.display = 'none';
        //     overlay.style.display = 'none';
        // })

    </script>
<style scoped>
#container{position:fixed;bottom: 0%;height: 20px;width:1000px;display:flex}
.closebtn{position: absolute;
top: 0;right: 0;height: 30px;width: 30px;}
#overlay{
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0,0,0,0.5);
display: none;
}
.clubchoice {
 width: 100%;
 height: 20%;
 border: 1px solid black;
 border-radius: 10px;
font-size:0.8em;
}

#popup1 {
 font-family: 苹方-简;
 font-size: 2em;
 height: 300px;
 width: 300px;
 background-color: white;
 position: absolute;
 bottom: 50px;
 left: 450px;
 padding: 30px;
 justify-content: center;
 align-items: center;
 border-radius: 15px;
 padding: 20px;
 display: none;
}



#queding {
 height: 50px;
 width: 40%;
}
#popup2 {  
     font-family: 苹方-简;
     font-size: 2em;
     height: 300px;
     width: 300px;
     background-color: white;
     position: absolute;
     bottom: 50px;
     left: 450px;
     padding: 30px;
     justify-content: center;
     align-items: center;
     border-radius: 15px;
     padding: 20px;
     display: none;
 }

 li {
     width: 80%;
     height: 20px;
     border: 2px none;

 }

 #zihao {
     width: 97%;
     height: 40px;
     text-align: left;
 }




 #ziti1 {
     width: 48%;
     height: 46px;
     text-align: left;
 }

 #dpnc1 {
     list-style-type: none;
     display: none;
     position: absolute;
     left:0;
     height: 80px;
     width: 200px;
     overflow-y: scroll;
     font-size: 0.5em;
     background-color: white;
     margin: 0;
 }

 #ziti1:hover+#dpnc1 {
     display: block;
 }

 #dpnc1:hover {
     display: block
 }

 #ziti2 {
     width: 48%;
     height: 46px;
     text-align: left;
 }

 #dpnc2 {
     list-style-type: none;
     display: none;
     position: absolute;
     right:0;
     height: 80px;
     width: 200px;
     overflow-y: scroll;
     font-size: 0.5em;
     background-color: white;
     margin: 0;
 }

 #ziti2:hover+#dpnc2 {
     display: block;
 }

 #dpnc2:hover {
     display: block
 }
 #popup3 {  
     font-family: 苹方-简;
     font-size: 1.5em;
     height: 300px;
     width: 300px;
     background-color: white;
     position: absolute;
     bottom: 50px;
     left: 450px;
     padding: 30px;
     justify-content: center;
     align-items: center;
     border-radius: 15px;
     padding: 20px;
     display:none;
 }

 #wenzhangleixing {
     width: 308px;
     height: 36px;
     text-align: left;
 }

 #dpnc {
     list-style-type: none;
     display: none;
     position:absolute ;
     height: 80px;
     width: 200px;
     overflow-y: scroll;
     font-size: 0.5em;
     background-color: white;
     margin: 0;
 }

 li {
     width: 80%;
     height: 20px;
     border: 2px none ;
     
 }
 #wenzhangleixing:hover+#dpnc{display: block;}
 #dpnc:hover{display:block}
 #jubanshijian {
     width: 100%;
     height: 30px;
     text-align: left;
 }

 #xiangguanlianjie {
     width: 100%;
     height: 30px;
     text-align: left;
 }
 #colorchoice {

width: 100%;
height: 40%;
}

#popup4 {
font-family: 苹方-简;
font-size: 1.5em;
height: 300px;
width: 300px;
background-color: white;
position: absolute;
bottom: 50px;
left: 450px;
padding: 30px;
justify-content: center;
align-items: center;
border-radius: 15px;
padding: 20px;
display: none;
} 
</style>