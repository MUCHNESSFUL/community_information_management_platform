<template>

  <div id="body1">
    <div id="one">
      <button class="inOne" style="margin-top: 100px;" @click="showTwo">校级社团</button>
      <button class="inOne">院级社团</button>
    </div>
    <div id="two" v-show="twoShow">
      <button class="inTwo" style="margin-top: 135px;" @click="showThree">文化体育类</button>
      <button class="inTwo">学术科技类</button>
      <button class="inTwo">自律互动类</button>
      <button class="inTwo">媒体宣传类</button>
      <button class="inTwo">思想政治类</button>
      <button class="inTwo">校园服务类</button>
      <button class="inTwo">志愿公益类</button>
      <button class="inTwo">创业创新类</button>
    </div>
    <div id="three" v-show="threeShow">
      <button class="inThree" style="margin-top: 170px;">新校区</button>
      <button class="inThree" @click="showFour">老校区</button>
    </div>  
    <div id="four" v-show="fourShow">
      <div class="shetuan">
          <img src="../assets/5.png" alt="" @click="jupmMessage">
          <div class="wd">
          <h2 style="margin-left: 130px;">A社(老校区)</h2>
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
    data() {
      return {
        twoShow:false,
        threeShow:false,
        fourShow:false
      }
    },
    methods: {
      showTwo(){
        this.twoShow = !this.twoShow
        if(this.threeShow == true || this.fourShow == true){
          this.threeShow = !this.threeShow
          this.fourShow = false
        }
      },
      showThree(){
        this.threeShow = !this.threeShow
        if(this.fourShow == true){
          this.fourShow = !this.fourShow
        }
      },
      showFour(){
        this.fourShow = !this.fourShow
      },
      jupmMessage(){
            this.$router.push('/home/search/message')
        }
    },
  }
</script>

<style scoped>
  #body1{
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  }
  
  .shetuan{
    position: relative;
    border-radius: 20px;
    width: 500px;
    height: 150px;
    margin-top: 5%;
    margin-left: 5%;
    border: 1px solid black;
}

.shetuan img{
    float: left;
    margin-top: 20px;
    margin-left: 20px;
    width: 100px;
}

.p{
    padding-left: 50px;
    margin-left: 18%;
    width: 150px;
    font-size: 15px;
 }

.wd{
  margin-left: 5%;
}

 .bt{
    width: 100px;
    height:100px;
    margin-left: 80%;
    margin-top: -15%;
 }

 .btn{
    width: 70px;
    height:30px;
 }

 .inOne{
  border: 0;
  width: 100%;
  height: 50px;
  background-color: #FFFFFF;
  margin-top: 10px;
  text-align: center;
  line-height: 50px;
  font-size: 20px;
  font-family: serif;
 }

 .inTwo{
  border: 0;
  width: 100%;
  height: 50px;
  background-color: #FFFFFF;
  margin-top: 10px;
  text-align: center;
  line-height: 50px;
  font-size: 20px;
  font-family: serif;
 }

 .inThree{
  border: 0;  
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: #FFFFFF;
  margin-top: 10px;
  font-size: 20px;
  font-family: serif;
 }

 #one{
  height: 100%;
  width: 10%;
  background-color: #EFEFEF;
  border-right: 2px black solid;
 }

 #two{
  width: 10%;
  background-color: #E9E9E9;
  border-right: 2px black solid;
 }

 #three{
  width: 10%;
  background-color: #E2E2E2;
  border-right: 2px black solid;  
 }

 #four{
  width: 70%;
 }
</style>
