<script setup>
import SaleStatistics from './components/SaleStatistics.vue'
import NumberJump from './components/NumberJump/index.vue'
</script>

<template>
  <div class="page-wrap">
    <div class="left">
      <ChartBox title="当前云仓概况">
        <NumberJump />
      </ChartBox>
      <ChartBox title="云仓销售统计">
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

</style>
