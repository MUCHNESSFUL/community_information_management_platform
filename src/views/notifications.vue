<template>
    <div id="boss">
        <img style="float: right; width: 50px; height: 50px; margin-right: 15px;" src="../assets/editPen.png" alt="" @click="editTool">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    methods: {
        editTool(){
            this.$router.push('/home/manage/tool')
        }
    },
}
</script>

<style scoped>
    #boss {
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: #EFEFEF;
    }
</style>