<template>
  <div>
    <div class="body wrapper">
        <div class="zuo">
            <div class="wenzi">
                <h2 id="title">近期活动</h2>
            </div>
            <div class="pt">

            </div>
        </div>
        <div class="you">
            <div class="guanzhu">
                <h2>已关注社团动态</h2>
            </div>
            <div class="ct">
                <p class="under">XXX社团</p>
                <button id="para" class="under" @click="followPage">活动：近期进行唱跳rap篮球比赛<br>
                    活动时间：2月30日<br>
                    活动地点：火星<br>
                    活动链接：《原神》官方网站-全新4.4版本「彩鹞栉春风」上线！ (mihoyo.com)</button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>


export default {
    methods: {
        followPage(){
            this.$router.push('/home/follow')
        }
    },
}
</script>
<style scoped>
  .zuo{
    position: absolute;
    left: 20px;
    top: 130px;
    width: 900px;
    height: 600px;
}

.wenzi{
    position: absolute;
    left: -160px;
}

#title{
    margin-left: 600px;
    letter-spacing: 10px;
    font-family: 楷体;
    font-size: 3em;
}

.you{
    position: absolute;
    right: 40px;
    top:180px;
    height: 600px;
    width: 400px;  
    border: 1px solid black;
}

.guanzhu{
    margin-top: 40px;
    margin-left: 80px;
    letter-spacing: 5px;
    font-size: 1.2em;
}

.ct{
    margin-top: 20px;
    border: 1px solid #89D4FF;
    border-radius: 10px;
    background-color: #89D4FF;
}

.under{
    text-decoration: underline;
    background-color: #89D4FF;
}

.ct button{
    border: #89D4FF;
    text-align: left;
}

#para{
    font-size: smaller;
    color: black;
}
</style>
