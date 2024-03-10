<template>
    <div class="top">
        <img class="head" src="../../assets/head.png" alt="">
        <div>
            <p>{{ name }}</p>
            <div class="box">
                <p class="content" id="text2">
                你好你好，这里是简介，本社团分为，wota艺部，cos部，等等等等一系列部门，欢迎各位萌新大佬加入！！！！
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nulla ab doloribus temporibus atque, nesciunt facere reprehenderit repudiandae. Quisquam nam impedit blanditiis odit delectus, libero itaque iste cum iusto incidunt ut accusamus magni unde laudantium, qui quae ratione laborum ab autem quo! Modi repellat, optio vitae architecto explicabo ullam atque non ipsam commodi minima ut cum pariatur voluptatum beatae itaque laudantium quo est maxime in voluptatibus maiores. Deleniti id, consectetur laboriosam a facere autem cupiditate beatae corporis numquam laudantium esse facilis, quasi quas, in expedita quos recusandae fugit nam atque quidem excepturi. Unde facere maxime tempore obcaecati iusto magnam sint.
                </p>  
                <button id="show" class="btn" @click="show">展开</button>
                <button class="btn" @click="hide">隐藏</button>
            </div>
        </div>
        <div>
            <button class="asideButton" id="apply">申请入社</button>
            <button class="asideButton" id="follow">已关注</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name:'天津大学D-Touchi动漫社'
        }
    },
    methods:{
        show(){
            document.getElementById('text2').setAttribute("style","max-height:9999px")
        },
        hide(){
            document.getElementById('text2').setAttribute("style","max-height:40px")
        }
    }
}
</script>

<style scoped>
    .head {
    float: left;
    margin-left: 5%;
    width: 110px;
    height: 100px;
    margin-left: 40px;
    }

    .top{
        display: flex;
    }

    .content {
        max-height: 40px;
        overflow: hidden;
        transition: max-height .5s ease;
    }

    .box {
        width: 500px;
    }
    .box .btn {
        display: none;
    }

    .box:hover .btn {
        display: block;
        float: right;
        background-color: transparent;
        border: none;
        margin-top: -20px;
    }

    .box .btn:hover {
        color: blue;
        cursor: pointer;
    }
    .asideButton{
        border: 1px solid black;
        border-radius: 5px;
        margin-top: 20px;
        width: 150px;
        height: 60px;
        background-color: #fff;
        box-shadow: -2px 2px black ;
        font-size: 25px;
        font-family: 楷体;
    }

    #apply{
        margin-left: 600px;
    }

    #follow{
        margin-left: 30px;
    }

    #show {
        margin-right: 30px;
    }
</style>