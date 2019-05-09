<template>
  <div>
    <mt-swipe :auto="2000">
      <!-- 在组件中，使用v-for循环的话，一定要使用 key -->
      <mt-swipe-item v-for="item in lunbotulist1" :key="item.id">
        <img :src="item.img" alt :class="{'full': isfull}">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
  props: ["lunbotulist1","isfull"]
};
</script>
<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    text-align: center;
  }
  img {
    height: 100%;
  }
}
.full {
  width: 100%;
}
</style>
