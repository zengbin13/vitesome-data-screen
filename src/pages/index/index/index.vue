<script setup lang="ts">
import NumberJump from './components/NumberJump/index.vue'
</script>

<template>
  <div class="wrap">
    <div class="left">
      <ChartBox>
        <NumberJump />
      </ChartBox>
      <ChartBox />
      <ChartBox />
    </div>
    <div class="center">
      <ChartBox />
    </div>
    <div class="right">
      <ChartBox title="滚动表格" />
      <ChartBox />
      <ChartBox />
      <!-- <HorizontalBar /> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
 .row-content {
    background-color: #ef9191;
    height: 100%;
    border-radius: 10px;
    font-size: 20px;
  }

.wrap {
  height: 100%;
  display: flex;
  flex: 1;

  .left {
    width: 25%;
    display: flex;
    flex-direction: column;
  }

  .right {
    width: 25%;
    display: flex;
    flex-direction: column;
  }

  .center {
    flex: 1;
  }
}
</style>
