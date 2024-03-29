<template>
    <section class="room_content">
      <!-- 内容区域(这里的id是为了区分多个该组件共存问题,否则会冲突) -->
      <div :id="`id_${id}`"
      :class="state.textOver && !state.foldBtn ? 'showEllipsis' : ''">
        <slot></slot><!-- 插槽 -->
      </div>
  
      <!-- 展开折叠按钮 -->
      <span v-if="state.textOver"
      class="btnWrap"
      @click="uclick()">
        <button>{{ state.foldBtn ? '折叠' : '展开' }}</button>
      </span>
  
      <!-- 数据 -->
      <!-- {{ state }} -->
    </section>
  </template>
  
  <script setup name="Collapse">
// vue
import {
  nextTick,
  onBeforeMount,
  reactive,
} from 'vue';

// props
  const props = defineProps({
    // 区分id(必填,否则报错)
    id: { type: String, required: true }
  })
  // data
  const state = reactive({
    textOver: false, //是否超过了2行
    foldBtn: false //当前是否展开或收起
  })
  // 处理操作
  onBeforeMount(async () => {
    nextTick(() => {
      // 获取内容元素
      const domRef = document.getElementById(`id_${props.id}`)
      if (domRef) {
        // 计算并改变是否展开和折叠
        const height = window.getComputedStyle(domRef).height.replace("px", "")
        if (+height > 40) { //40 -- 2行的高度
          state.textOver = true;
        } else {
          state.textOver = false;
        }
      }
    })
  })
  // 点击展开折叠按钮
  const uclick = () => {
    // 直接取反
    state.foldBtn = !state.foldBtn
  }
  
</script>
  
  <style scoped>
  /* 根节点 */
  .room_content {
    position: relative;
  }
  /* 文本溢出 */
  .showEllipsis{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    line-clamp: 4;
    -webkit-box-orient: vertical;
  }
  /* 展开/收起按钮位置及样式 */
  .btnWrap {
    position: absolute;
    top: 80px;right: -500px;
  }
  </style>
  