<template>
    <p @click="normal" style="float: right; margin: 0; user-select: none;">normal</p>
    <div id="top">
        <img @click="home_page" src="../../assets/tju.png" style="float: left; width: 6%; height: 6%;" alt="天津大学">
        <p id="title">社团信息展示平台</p>
        <nav>
        <button  class="btn1" @click="home_page">管理社团</button>
        </nav>
        <hr style="margin: 0;">
        <manage></manage>
        <router-view/>
    </div>
</template>

<script>
import manage from './manage.vue'

export default {
  components: { manage },
    methods: {
        normal(){
            this.$router.push('/home/HomeView')
        }
    },
}
</script>

<style lang="scss" scoped>
      
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  
  #title {
    margin-top: 30px;
    margin-right: 120px;
    margin-left: 10px;
    float: left;
    font-size: 40px;
  }
  .search {
    border: black 1px solid;
    margin-top: 33px;
    margin-right:0px;
    border-radius: 20px;
    padding: 5px;
    float: right;
  }
  
  .btn1 {
    background-color: transparent;
    border: 0;
    width: 140px;
    font-size: 30px;
    margin-top:35px;
    margin-bottom: 50px;
    margin-left: 60%;
    box-shadow:0px 3px 6px black;
    border-radius: 5px;
  }
  #searchName {
    border: 0;
    outline: none;
    width: 400px;
    height: 20px;
    margin: 5px;
    margin-left: 10px;
    font-size: 20px;
  }
</style>