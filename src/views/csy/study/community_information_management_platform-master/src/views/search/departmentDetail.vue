<template>
    <div style="display: flex;justify-content: center; background-color: #F1F1F1;">
        <div id="introduction">
            <h2>A部门</h2>
            <p>指导老师：王二狗</p>
            <div class="box">
                <p id="text">
                    这里是A部门......
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque facilis, consectetur, eveniet pariatur culpa voluptatum excepturi harum perferendis hic atque earum! Asperiores dolorem natus hic quasi sed minima fugiat fugit nemo, nesciunt sint praesentium officia beatae fuga odit suscipit sapiente reprehenderit nobis. Illum tempore esse, aliquid pariatur qui est tenetur vitae voluptatum, et facilis temporibus, dolorem saepe libero. Est error quam repudiandae consequuntur doloremque dolores eos distinctio repellat molestiae mollitia? Sapiente porro minima mollitia enim recusandae eveniet temporibus inventore molestiae, reiciendis quidem labore ab modi quod neque officiis quasi? Aspernatur illo vero sed odit, eos doloribus. Eum in magnam harum.
                </p>
                <button class="btn" @click="show" style="margin-right: 30px;">展开</button>
                <button class="btn" @click="hide">隐藏</button>
            </div>
            <hr>
            <div id="msg">
                <h2>部门动态</h2>
                <div style="text-align: center;">
                    <img src="../../assets/展示图片.png" alt="">
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deserunt et tempore nobis delectus eligendi libero voluptatum molestiae quam? Natus sint aliquam quibusdam itaque, voluptatem ipsam atque eaque nemo est quos adipisci aperiam repellat quis molestias harum consequatur dolorum. Optio, voluptas fugit! Nisi magnam itaque vitae vel ratione at ex delectus possimus odit, nesciunt similique minima placeat assumenda modi, mollitia quisquam sapiente molestiae neque distinctio asperiores. Qui sequi, et, natus ullam porro minus atque autem delectus, excepturi omnis quisquam ex reprehenderit? Nesciunt tempora dolor voluptate beatae alias, deleniti porro asperiores, laudantium odit quis sint ab odio. Enim cupiditate sit sed.</p>
            </div>
        </div>
    </div>
  
</template>

<script>
export default {
    methods: {
        show(){
            document.getElementById('text').setAttribute("style","max-height:9999px")
        },
        hide(){
            document.getElementById('text').setAttribute("style","max-height:58px")
        }
    },
}
</script>

<style scoped>
    h3{
        margin: 0;
    }

    .btn {
        display: none;
    }

    .btn:hover {
        color: aqua;
    }

    .box:hover .btn {
        display: block;
        float: right;
        background-color: transparent;
        border: none;
        margin-top: -20px;
    }

    #introduction{
        width: 900px;
        display: block;
    }

    #text {
        overflow: hidden;
        max-height: 58px;
    }
</style>