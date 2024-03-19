<template>
<div>  
    <div id="whole">
        <div class="half">
            <div id="form1" class="form" >
                <img src="../assets/5.png" alt="" @click="jupmMessage">
                <div class="wd">
                    <h2>动漫社(老校区)</h2>
                    <p class="p">这里是简介</p>
                </div>
                <div class="bt">
                    <button class="btn">关注</button>
                </div>
            </div>
        </div>
        <div class="half">
            <div id="form2" class="form">
                <img src="../assets/6.png" alt="">
                <div class="wd">
                    <h2>A社(新校区)</h2>
                    <p class="p">这里是简介</p>
                </div>
                <div class="bt">
                    <button class="btn">关注</button>
                </div>
            </div>
        </div>
         <div class="half">
           <div id="form3" class="form">
                <img src="../assets/4.png" alt="">
                <div class="wd">
                    <h2>动漫社(新校区)</h2>
                    <p class="p">这里是简介</p>
                </div>
                <div class="bt">
                    <button class="btn">关注</button>
                </div>
            </div> 
         </div>
        
    </div>
</div>
</template>

<script>
export default {
    methods: {
        jupmMessage(){
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
.line4{
    border-bottom: 1px solid black;
    margin-top: 9%;
}
.form{
    position: relative;
    border-radius: 20px;
    width: 750px;
    height: 200px;
    border: 1px solid black;
    margin-top: 100px;
    margin-left: 180px;
}

.form img{
    float: left;
    margin-top: 20px;
    margin-left: 20px;
}

h2{
    float: left;
    margin-top: 30px;
    margin-left: 20px;
    font-size: 30px;
}

.wd{
    float: left;
    width: 400px;
    height: 200px;
}

.h2{
   font-weight: normal;
}

.p{
   margin-left: 22px;
   margin-top: 0px;
   padding-top: 80px;
}

.btn{
    position: absolute;
    top: 34px;
    left: 540px;
    width: 70px;
    height:40px
}

#whole{
    display: flex;
    width: 100%;
    height: 100%;
    justify-content:flex-start;   
    flex-wrap: wrap;
  }
</style>