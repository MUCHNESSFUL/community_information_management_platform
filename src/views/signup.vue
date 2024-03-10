<template>
  <div id="father">
    <div id="container">
        <div id="gonggao">

            <img src="../assets/left_arrow.jpg" class="anniu">
                <div id="content">
                    <img src="../assets/notice.png" width="100%" height="100%">
                </div>
                <div class="anniu">
                    <img src="../assets/right_arrow.jpg" class="anniu">
                </div>
        </div>
        <div id="right2">
            <div id="zhanghaozhuce">
                <img id="tubiao" src="../assets/logPhoto.jpg">
                    账号注册
            </div>
            <form method="post" id="form2">
                <label for="usename2">手机号</label>
                <input type="text" name="usename2" id="usename2">
                <br />
                <label for="identity">学号</label>
                <input type="text" name="identity" id="identity">
                <br />
                <label for="password2">密码</label>
                <input type="text" name="passwor2" id="password2">
                <label id="denglujiemian" @click="login">登录界面</label>
            </form>
            <button id="zhuce">
                注册
            </button>
        </div>

    </div>
  </div>
</template>

<script>

export default {
    methods: {
        login(){
            this.$router.push('/')
        }
    },
}
</script>

<style scoped>
    *{
            margin: 0;
            padding: 0;
    }
    #father { 
            background-image:  url("../assets/bgPhoto.jpg");
            background-repeat: no-repeat;
            background-size: cover;
            background-position: 0 0;
            font-family: 苹方-简;
            font-size: 1em;
            height: 100%;
            width: 100%;
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
    }
    #container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 70%;
            width: 100%
        }

        #gonggao {
            border-radius: 15px;
            margin: 50px;
            height: 100%;
            width: 50%;
            background-color: rgba(255, 255, 255, 0.644);
            justify-content: center;
            align-items: center;
            display: flex;

        }

        .anniu {
            height: 60px;
            width: 60px;
            justify-content: center;
            align-items: center;
            background-color: rgba(255, 255, 255, 0.454);
        }

        #content {
            height: 70%;
            width: 90%;
            justify-content: center;
            align-items: center;
            margin: 20px;
            background-color: aqua;
        }

        #right2 {
            border-radius: 15px;
            position: relative;
            width: 30%;
            height: 100%;
            display: flex;
            flex-flow: column;
            background-color: rgba(150, 215, 255, 0.5);
            justify-content: center;
            align-items: center;
            margin: 50px;
        }

        #zhanghaozhuce {
            font-size: 1.2em;
            width: 33%;
            border: 2px none;
            border-radius: 12px;
            background-color: white;
            text-align: center;
            margin: 10px;
            padding: 10px;
        }

        #tubiao {
            float: left;
            width: 30px;
            height: 30px;
        }

        #form2 {
            margin: 10px;
            background-color: white;
            padding: 10px;
            width: 70%;
            border-radius: 15px;
            text-align: left;
            line-height: 30px;
        }

        input {
            width: 70%;
            height: 20px
        }
        #denglujiemian{float:right}
        #zhuce {
            font-size: 1em;
            margin: 10px;
            background-color: rgb(0, 179, 255);
            height: 10%;
            width: 30%;
            border-radius: 15px;
        }
</style>