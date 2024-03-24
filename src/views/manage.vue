<template>
  <div style="width: auto;">
    <button class="select" @click="notice">我的通知</button>
    <button class="select" @click="memberManage">成员管理</button>
  </div>
  <router-view></router-view>
</template>

<script>

export default {
    methods: {
        notice(){
            this.$router.push('/home/manage/notifications')
        },
        memberManage(){
            this.$router.push('/home/manage/memberManage')
        }
    },
}
</script>

<style scoped>
    .select{
        border: 0;
        background-color: transparent;
        display: inline ;
        font-size: 30px;
        margin-left: 100px;
        margin-top: 30px;
        margin-bottom: 30px;
    }
</style>