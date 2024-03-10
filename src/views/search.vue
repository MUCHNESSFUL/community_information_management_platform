<template>
    <div>
        <img class="background" src="../assets/train.jpg" alt="">
        <div class="top">
            <img class="head" src="../assets/head.png" alt="">
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
            <div style="display: flex;">
                <button class="asideButton" id="apply">申请入社</button>
                <button class="asideButton" id="follow" v-show="!follow" @click="followClub">已关注</button>
                <button class="asideButton" id="follow" v-show="follow" @click="followClub">关注</button>
            </div>
        </div>
        <div id="jump">
            <button style="margin-right: 30px; margin-left: 8%;" @click="message">动态</button>
            <button @click="department">部门</button>
        </div>
    </div>
    <router-view/>
</template>

<script>
export default {
    components:{top},
    data() {
        return {
            name:'天津大学D-Touchi动漫社',
            follow:true,
        }
    },
    methods: {
        message() {
            this.$router.push('/search/message')
        },
        department() {
            this.$router.push('/search/department')
        },
        show(){
            document.getElementById('text2').setAttribute("style","max-height:9999px")
        },
        hide(){
            document.getElementById('text2').setAttribute("style","max-height:40px")
        },
        followClub(){
            this.follow = !this.follow
        }
    },
}
</script>


<style scoped>
    .background{
        width: 100%;
        height: 250px;
    }
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
        font-size: 15px;
    }

    .box .btn:hover {
        color: blue;
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

    button {
        border: 1px solid #ffffff;
        padding: 4px 8px;
        font-size: 20px;
        background-color: transparent;
    }

    button:active {
        border: 1px solid black;
        border-radius: 5px;
        padding: 4px 8px;
    }

    #apply{
        margin-left: 500px;
    }

    #follow{
        margin-left: 30px;
    }

    #show {
        margin-right: 10px;
    }
</style>