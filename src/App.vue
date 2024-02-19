<template>
  <nav>
    <img src="./assets/tju.png" alt="">
    <p>社团信息展示平台</p>
    <router-link class="jump" to="/">首页</router-link> |
    <router-link class="jump" to="/about">全部社团</router-link> |
    <router-link class="jump" to="/center">个人中心</router-link>
    <div class="search">
      <img src="" alt="">
      <input type="text">
    </div>
  </nav>
  <router-view/>
</template>

<style lang="scss">
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
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
img {
  width: 5%;
  height: 5%;
  float: left;
}
p {
  float: left;
}
input {

}
.search {
  float: right;
  border: black 1px;
}
</style>
