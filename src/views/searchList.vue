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

</style>