<script setup>
import SaleStatistics from './components/SaleStatistics.vue'
</script>

<template>
  <div class="wrap">
    <div class="left">
      <ChartBox title="box" />
      <ChartBox title="云仓销售统计/ Real-time monitoring">
        <SaleStatistics />
      </ChartBox>
      <ChartBox title="box" />
    </div>
    <div class="center">
      <ChartBox />
    </div>
    <div class="right">
      <ChartBox />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  height: 100%;
 display: flex;
 .left {
  width: 25%;
  display: flex;
  flex-direction: column;

 }
 .right {
  width: 25%;
 }
 .center {
  flex: 1;
 }
}
</style>
