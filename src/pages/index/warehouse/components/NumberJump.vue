<script setup>
import CountUp from 'vue-countup-v3'
import { getWarehouseOverviewApi as getChartDataApi } from '~/utils/apis'

import image1 from '~/assets/images/counter-data/center-details-data1.png'
import image2 from '~/assets/images/counter-data/center-details-data2.png'
import image3 from '~/assets/images/counter-data/center-details-data3.png'
import image4 from '~/assets/images/counter-data/center-details-data4.png'

const countList = ref([
  {
    title: '当前云仓订单',
    count: 0,
    suffix: '个',
    image: image1,
  },
  {
    title: '本月云仓储量',
    count: 0,
    suffix: '吨',
    image: image2,
  },
  {
    title: '本月预计营收',
    count: 0,
    suffix: '元',
    image: image3,
  },
  {
    title: '本月农资用量',
    count: 0,
    suffix: '吨',
    image: image4,
  },
])

async function getChartData() {
  const { data } = await getChartDataApi()
  countList.value.forEach((item, index) => {
    item.count = data[index].count
    item.suffix = data[index].suffix
  })
}
onActivated(() => {
  getChartData()
})
</script>

<template>
  <div class="counter-wrap">
    <div v-for="(item, index) in countList" :key="index" class="counter">
      <img :src="item.image" :alt="item.title">
      <div class="right">
        <div class="title">
          {{ item.title }}
        </div>
        <CountUp :end-val="item.count" class="gradient-title">
          <template #suffix>
            <span class="unit">{{ item.suffix }}</span>
          </template>
        </CountUp>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.counter-wrap {
  height: 100%;
  flex: 1;
  max-height: 100%;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);

  .counter {
    display: flex;
    align-items: center;
    height: 100px;
    align-self: center;

    &>img {
      width: 72px;
      height: 72px;
    }

  }

  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    color: #fff;

    .title {
      font-size: 16px;
    }

    .countup-wrap {
      font-size: 28px;
    }

    .unit {
      display: inline-block;
      margin-left: 4px;
      font-size: 18px;
    }
  }
}
</style>
