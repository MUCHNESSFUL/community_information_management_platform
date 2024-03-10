<template>
  <div style="background-color: #F1F1F1 ;padding: 20px;">
    <div id="departmentFather">
      <div @click="departmentJump" class="department">1</div>
      <div class="department">2</div>
      <div class="department">3</div>
      <div class="department">4</div>
      <div class="department">5</div>
      <div class="department">6</div>
      <div class="department">7</div>
      <div class="department">8</div>
      <div class="department">8</div>
      <div class="department">8</div>
      <div class="department">8</div>
      <div class="department">8</div>
      <div class="department">8</div>
    </div>
    
  </div>
</template>

<script>
export default {
  methods: {
    departmentJump(){
      this.$router.push('/search/departmentDetail')
    }
  },
}
</script>

<style>
  #departmentFather {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
    width: 900px;
    margin: auto;
    gap: 80px;
  }

  .department {
    background-color: #fff;
    border: 1px black solid;
    width: 150px;
    height: 150px;
    line-height: 150px;
  }
</style>