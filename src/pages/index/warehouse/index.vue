<script setup>
import SaleStatistics from './components/SaleStatistics.vue'

import NumberJump from './components/NumberJump.vue'
import ProductionLine from './components/ProductionLine.vue'
import HorizontalBar from './components/HorizontalBar.vue'
import DosageBar from './components/DosageBar.vue'
import RatioPie from './components/RatioPie.vue'
import ChinaMap from './components/ChinaMap.vue'

// import ThreeDimensionalPie from './components/ThreeDimensionalPie.vue'
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
      <ChartBox title="产量趋势数据">
        <ProductionLine />
      </ChartBox>
    </div>
    <div class="center">
      <ChartBox :show-title="false">
        <ChinaMap />
      </ChartBox>
    </div>
    <div class="right">
      <ChartBox title="云仓物品占比">
        <RatioPie />
      </ChartBox>
      <ChartBox title="农资用量趋势">
        <DosageBar />
      </ChartBox>
      <ChartBox title="订单完成情况">
        <HorizontalBar />
      </ChartBox>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
