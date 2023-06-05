<script setup>
import HorizontalBar from './components/HorizontalBar/index.vue'
import NumberJump from './components/NumberJump/index.vue'
</script>

<template>
  <div class="wrap">
    <div class="left">
      <ChartBox>
        <NumberJump />
      </ChartBox>
      <ChartBox>
        <HorizontalBar />
      </ChartBox>
      <ChartBox />
    </div>
    <div class="center">
      <ChartBox />
    </div>
    <div class="right">
      <ChartBox />
      <ChartBox />
      <ChartBox />
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
