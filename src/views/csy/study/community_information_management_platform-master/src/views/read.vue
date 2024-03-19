<template>
    <div id="boss">
        <div id="activity">
            <h1>XXX活动名称</h1>
            <p id="editor">编辑：{{ editor }}</p>
            <p id="text">一大堆东西··(备注：分段的图文只显示4行第一段部分)
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis odio vero voluptate dolore maiores perferendis quasi veniam vitae obcaecati quod hic nesciunt, amet eum! Impedit, optio facilis officia eos eveniet, vitae repudiandae nesciunt illum accusamus nihil suscipit molestiae animi tenetur sapiente in explicabo a nobis quis sequi minima facere fuga? Aspernatur dolor necessitatibus sapiente velit, sint nihil nulla magnam magni repudiandae officia, earum, doloremque aperiam ipsam omnis quam corrupti culpa? Officiis esse porro culpa ipsa, in ratione, excepturi sequi voluptatibus inventore tempora illo minima accusantium doloremque nihil? Repudiandae perferendis doloribus, laudantium placeat aspernatur distinctio sint illum reiciendis nisi quam odit?</p>
        </div>
        <div id="club">
            <div id="top">
                <div id="topLeft">
                    
                    <p id="clubName">天津大学D-Touchi动漫社</p>
                    <p class="persons">社长：{{ clubLeader }}</p>
                    <p class="persons">副社长：{{ clubLeader }}</p>
                    <p class="persons">指导老师：{{ clubLeader }}</p>
                </div>
                <div id="topRight">
                    <img src="../assets/head.png" alt="">
                    <p class="center" style="font-weight: lighter;">UID:1</p>
                    <p class="center" id="followBorder">
                        <button v-show="isFollow" @click="follow" class="follow">关注</button>
                        <button v-show="!isFollow" @click="follow" class="follow">已关注</button>
                    </p>
                </div>
            </div>
            <div id="middle">
                <h3>社团简介</h3>
                <div id="introduction">
                    <p>
                        你好你好，这里是简介，本社团分为，wota艺部，cos部等等等等一系列部门，欢迎各位萌新大佬加入！！！！
                    </p>
                </div>
            </div>
            <div id="bottom">
                <p>
                    <button id="clubSpace" @click="returnClub">
                        社团空间
                    </button>
                </p>
                    
            </div>
        </div>
    </div>
  
</template>

<script>
export default {
    data() {
        return {
            editor:'坤坤',
            clubLeader:'XXX',
            isFollow:true,
        }
    },
    methods: {
        follow(){
            this.isFollow = !this.isFollow
        },
        returnClub(){
            this.$router.push('/home/search/message')
        }
    },
}
</script>

<style scoped>
    p{
        margin: 0;
        display: inline;
    }

    img {
        width: 110px;
        height: 100px;
        float: right;
        display: block;
    }

    h1 {
        text-align: center;
    }

    h3 {
        margin-top: 40px;
        margin-bottom: 5px;
        margin-left: 30px;
    }
    .persons {
        margin-left: 30px;
    }

    .center {
        display: block;
        text-align: center;
    }

    .follow {
        margin: 10px 5px;
        border: 0;
        background-color: transparent;
    }

    #editor {
        text-align: center;
        display: block;
    }

    #boss {
        display: flex;
    }

    #activity {
        flex: 2;
        overflow: scroll;
        border-right: 2px solid black;
    }

    #club {
        flex: 1;
    }

    #text {
        margin: 0 20px;
        font-size: large;
    }

    #clubName {
        margin-left: 40px;
        margin-top: 28px;
        margin-right: 20px;
        margin-bottom: 20px;
        font-size: 35px;
        display: block;
    }

    #top {
        display: flex;
    }

    #followBorder {
        border: 1px solid black;
        border-radius: 5px;
        margin: 10px 15px;
    }

    #introduction {
        border: 1px black solid;
        border-radius: 5px;
        margin: 5px 15px;
        height: 200px;
        overflow: scroll;
    }    

    #bottom {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        margin-top: 280px;
        width: 100%;
    }

    #clubSpace {
        flex: 1;
        border: 0;
        background-color: transparent;
        color: #4D79E8;
        font-size: 30px;
    }
</style>