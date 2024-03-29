<template>
  <div style="width: auto;">
    <button class="select" @click="notice">我的通知</button>
    <button class="select" @click="memberManage">成员管理</button>
  </div>
</template>

<script>

export default {
    methods: {
        notice(){
            this.$router.push('/admin/notifications/notificationsDetail')
        },
        memberManage(){
            this.$router.push('/admin/memberManage')
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