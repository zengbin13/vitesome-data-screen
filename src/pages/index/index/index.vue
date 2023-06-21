<script setup lang="ts">
import ChinaMap from './components/ChinaMap.vue'
</script>

<template>
  <div class="page-wrap">
    <div class="left" />
    <div class="center">
      <ChartBox>
        <ChinaMap />
      </ChartBox>
    </div>
    <div class="right" />
  </div>
</template>

<style lang="scss" scoped>
</style>
