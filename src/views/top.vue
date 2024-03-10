<template>
    <div id="top">
      <img @click="home_page" src="../assets/tju.png" style="float: left; width: 6%; height: 6%;" alt="天津大学">
      <p id="title">社团信息展示平台</p>
      <p class="search">
        <input id="searchName" placeholder="搜索社团" @keyup.enter="search" type="text">
        <button @click="search" style="float: left; width: 20px; height:20px; background-color:transparent; border: 0;"> 
            <img src="../assets/2.png" alt="TUPIAN">
        </button>
      </p>
      <nav>
        <button  class="a1 btn1" @click="home_page">首页</button>
        <button  class="a2 btn1" @click="community">全部社团</button>
        <button  class="a3 btn1" @click="center">个人中心</button>
      </nav>
      
      <hr>
      <router-view/>
    </div>
  </template>
  
  <script>
  
    export default {
      methods:{
        search(){
          this.$router.push('/home/searchList')
        },
        home_page(){
          this.$router.push('/home/HomeView')
        },
        community(){
          this.$router.push('/home/about')
        },
        center(){
          this.$router.push('/home/center')
        }
      }
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
    margin-right:100px;
    border-radius: 20px;
    padding: 5px;
    float: right;
  }
  
  .btn1 {
    margin-right: 120px;
    background-color: transparent;
    border: 0;
    width: 130px;
    font-size: 30px;
    margin-top:35px;
    margin-bottom: 50px;
  }
  .btn1:hover{
    box-shadow:black 0px 0px 10px;
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