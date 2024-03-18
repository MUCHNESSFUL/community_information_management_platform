<template>
  <div>
    <div class="left">
      <div id="form1" class="form" @click="jupmMessage">
          <img src="../assets/5.png" alt="">
          <div class="wd">
          <h2>动漫社(老校区)</h2>
          <p class="p">这里是简介</p>
          </div>
          <div class="bt">
         <button class="btn">关注</button>
         </div>
      </div> 
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
    <div class="right">
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

li {
    list-style: none;
}

a {
    text-decoration: none;
}

.clearfix:before,.clearfix:after {
    content: "";
    display: table;
}

.clearfix:after {
    clear:both;
}

.wrapper {
    width: 100%;
    margin: 0 auto;
}

.line4{
    border-bottom: 1px solid black;
    margin-top: 9%;
}

.left{
    float: left;
    width: 50%;
    height: 100%;
    margin-top: 4%;
    margin-left: 3%;
}

.right{
    float: left;
    width: 50%;
    height: 100%;
    margin-top: -31.8%;
    margin-left: 53%;
}
.form{
    position: relative;
    border-radius: 20px;
    width: 650px;
    height: 200px;
    border: 1px solid black;
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

#form2{
    margin-top: 70px;
}

#form3{
    margin-top: 120px;

}
</style>