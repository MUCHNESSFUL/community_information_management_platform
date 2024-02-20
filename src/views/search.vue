<template>
    <div>
        <img class="background" src="../assets/train.jpg" alt="">
        <top></top>
        <nav>
            <router-link to="/search/message">动态</router-link> |
            <router-link to="/search/department">部门</router-link>
        </nav>
    </div>
    <router-view/>
</template>

<script>
import top from '../components/search/top.vue'
export default {
    components:{top}
}
</script>


<style scoped>
    .background{
        width: 100%;
        height: 250px;
    }
    nav {
        margin-left: 15%;
    }
    a{
        color: black;
    }
    a:hover {
        color:rgb(118, 193, 216);
    }
    .router-link-exact-active {
        color: rgb(8, 35, 184);
    }
</style>