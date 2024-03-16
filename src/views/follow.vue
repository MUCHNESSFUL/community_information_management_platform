<template>
<div class="body wrapper">
    <div class="left">
        <p id="first">XXXX活动</p>
        <p id="second">编辑：坤坤</p>
        <p id="third">正文，图文</p>
    </div>
    <div class="right">
        <div class="head">
        <div class="le">
             <p id="fourth">XXX社团</p>
             <p id="fifth">&emsp;社长：xxx&emsp;副社长：xxx&emsp;指导老师：xxx</p>
        </div>
        <div class="ri">
            <div class="picture">
                <img src="../assets/7.png" alt="">
            </div>
            <div class="btn">
                <button>关注</button>
            </div>
        </div>
    </div>
        <div class="middle">
            <div class="biaoti">社团简介</div>
            <div class="intro">你好你好，这里是简介，本社团分为，XXX部，XXX部等等等等一系列部门，欢迎各位萌新大佬加入！！！！</div>
            <div class="bottom">
                <button @click="clubSpace">社团空间</button>
            </div>
    </div>
    </div>
</div>
</template>
<script>
    export default{
        methods: {
           clubSpace(){
            this.$router.push('/home/search/message')
            } 
        },
    }
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.line3{
    margin-top: 7%;
    border-bottom: 1px solid black;
}
.left{
    position:absolute;
    width:65%;
    height: 100%;
    top: 14%;
    border-right: 1px solid black;
}

.right{
    position: absolute;
    width: 35%;
    height: 100%;
    top: 14%;
    left: 65%;
}

#first{
    font-size: 1.8em;
    margin-top: 3%;
    margin-left: 40%;
}

#second{
    margin-top: 2%;
    margin-left: 42%;
}

#third{
    margin-left: 5%;
}

#fourth{
    float: left;
    margin-top: 6%;
    margin-left: 30%;
    font-size: 1.8em;
}

.picture{
    float: left;
    margin-left: 10%;
}

#fifth{
    float: left;
    margin-left: 6%;
    margin-top: 4%;
}

.le{
    position: absolute;
    width: 70%;
    height:25%;
}

.ri{
    position: absolute;
    width: 30%;
    height:25%;
    margin-left: 70%;
}

.btn{
    float: left;
    width: 70%;
    height: 20%;
    margin-left: 15%;
    margin-top:10%;
    border:1px solid black;
}

.btn button{
    width: 100%;
    height: 100%;
}

.middle{
    position: absolute;
    float: left;
    margin-top: 35%;
    width: 100%;
    height: 75%;
    padding-left: 7%;
    padding-top: 6%;
}

.biaoti{
    font-size: 20px;
}
    
.intro{
    margin-top: 3%;
    margin-left: -1%;
    text-indent:2em;
    width: 95%;
    height: 40%;
    border: 1px solid black;
    border-radius: 15px;
    padding-top: 5px;
}

.bottom{
    margin-top: 40%;
    margin-left: 35%;
    font-size: 30px;
}
</style>
