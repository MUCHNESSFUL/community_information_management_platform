<template>
    <div id="boss">
        <div id="first" class="message">
            <div style="float: right; margin-top: -50px;">
                <button v-show="topManageShow" class="manageBtn" style="display: block; color: #FF0000;">删除</button>
                <button v-show="topManageShow" class="manageBtn" style="display: block;">取消置顶</button>
            </div>
            <div id="top" @click="topManage">置顶</div>
            <img class="head" src="../../assets/head.png" alt="">
            <p class="clubName">{{ name }}</p>
            <div>
                <p>{{ message }}</p>
            </div>
            <div class="time">{{ time }}</div>
        </div>
        <div class="next message">
            <div style="float: right; margin-top: -50px;">
                <button v-show="manageShow" class="manageBtn" style="display: block; color: #FF0000;">删除</button>
                <button v-show="manageShow" class="manageBtn" style="display: block;">置顶</button>
            </div>
            <p id="manage" style="float: right; margin-top: 0; margin-right: 2px; user-select: none;" @click="deleteAndTop">...</p>
            <img class="head" src="../../assets/head.png" alt="">
            <p class="clubName">{{ name }}</p>
            <div class="content">
                <p>一大堆东西··(备注：分段的图文只显示4行第一段部分)
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis odio vero voluptate dolore maiores perferendis quasi veniam vitae obcaecati quod hic nesciunt, amet eum! Impedit, optio facilis officia eos eveniet, vitae repudiandae nesciunt illum accusamus nihil suscipit molestiae animi tenetur sapiente in explicabo a nobis quis sequi minima facere fuga? Aspernatur dolor necessitatibus sapiente velit, sint nihil nulla magnam magni repudiandae officia, earum, doloremque aperiam ipsam omnis quam corrupti culpa? Officiis esse porro culpa ipsa, in ratione, excepturi sequi voluptatibus inventore tempora illo minima accusantium doloremque nihil? Repudiandae perferendis doloribus, laudantium placeat aspernatur distinctio sint illum reiciendis nisi quam odit?
                </p>
                <p><button id="read" @click="readComplete">阅读全文</button></p>
            </div>
            <div class="photoDiv">
                <img class="msgPhoto" src="../../assets/展示图片.png" alt="">
            </div>
            <div class="time">{{ time }}</div>
        </div>
    </div>    
</template>

<script>
export default {
    data() {
        return {
            name:'天津大学D-Touchi动漫社',
            message:'只因你太美！',
            time:'XX年X月X日11：45',
            manageShow:false,
            topManageShow:false
        }
    },
    methods:{
        readComplete(){
            this.$router.push('/read')
        },
        deleteAndTop(){
            this.manageShow = !this.manageShow
        },
        topManage(){
            this.topManageShow = !this.topManageShow
        }
    }
}
</script>

<style scoped>
    #boss {
        width: 100%;
        display: flex;
        background-color: #F1F1F1;
        flex-wrap: wrap;
        justify-content: center;
    }

    .clubName {
        margin-top: 40px;
    }
    .message {
        width: 1000px;
        margin-top: 50px;
        background-color: #fff;

    }

    .next {
        margin-bottom: 20px;
    }

    .time {
        float: right;
        margin-right: 2px;
        margin-bottom: 2px;
    }
    .head {
        width: 110px;
        height: 100px;
        float: left;
    }

    .msgPhoto {
        width: 800px;
        height: 400px;
        margin-top: 0px;
    }

    .photoDiv {
        text-align: center;
        margin: 0 auto;
    }

    .content>p {
        font-size: 17px;
        max-height: 80px;
        overflow: hidden;
        margin-block-start: 0em;
        margin-block-end: 0em;
        font-weight: normal;
        font-family: serif;
    }

    .manageBtn {
        border: 1px solid #E2E2E2;
        background-color: #EFEFEF;
        font-size: 12px;
        text-align: center;
        width: 70px;
        height: 25px;
    }

    #top {
        color: #5ACEFF;
        font-size: 22px;
        margin-top: 5px;
        margin-right: 5px;
        float: right;
        user-select: none;
    }

    #top:hover {
        cursor: pointer;
    }

    #read {
        float: right;
        color: #268AFF;
        border: 0;
        background-color: transparent;
        margin-right: 5px;
    }
    #read:hover {
        color: brown;
    }

    #manage:hover {
        cursor: pointer;
    }
</style>