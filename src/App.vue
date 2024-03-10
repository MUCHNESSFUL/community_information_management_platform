<template>
  <div id="top">
    <img src="../src/assets/tju.png" style="float: left; width: 6%; height: 6%;" alt="天津大学">
    <p id="title">社团信息展示平台</p>
    <p class="search">
      <input id="searchName" placeholder="搜索社团" @keyup.enter="add" type="text">
    </p>
    <nav>
      <router-link class="jump" to="/">首页</router-link> |
      <router-link class="jump" to="/about">全部社团</router-link> |
      <router-link class="jump" to="/center">个人中心</router-link>
    </nav>
    
    <hr>
    <router-view/>
  </div>
</template>

<script>
  export default {
    methods:{
      add(){
        this.$router.push('/search/message')
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

nav {
  padding: 30px;

  a {
    font-weight: bold;
    font-size: 35px;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
img {
  width: 8%;
  height: 8%;
  border: 0;
  margin: 0;
  float: left;
}
#title {
  margin-top: 20px;
  margin-right: 120px;
  float: left;
  font-size: 40px;
}
.search {
  border: black 1px solid;
  margin-top: 33px;
  margin-right: 30px;
  border-radius: 20px;
  float: right;
}

#searchName {
  border: 0;
  outline: none;
  width: 400px;
  height: 20px;
  margin: 5px;
}

</style>
