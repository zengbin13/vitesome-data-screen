<script setup>

</script>

<template>
  <div class="wrap">
    <div class="left">
      <ChartBox />
      <ChartBox />
      <ChartBox>
        <HorizontalBar />
      </ChartBox>
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
