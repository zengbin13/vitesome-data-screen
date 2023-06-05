<script setup>
import CountUp from 'vue-countup-v3'
import image1 from '~/assets/images/counter-data/center-details-data1.png'
import image2 from '~/assets/images/counter-data/center-details-data2.png'
import image3 from '~/assets/images/counter-data/center-details-data3.png'
import image4 from '~/assets/images/counter-data/center-details-data4.png'

const countList = ref([
  {
    title: '当前云仓订单',
    count: '25',
    suffix: '个',
    image: image1,
  },
  {
    title: '本月云仓储量',
    count: '2458',
    suffix: '吨',
    image: image2,
  },
  {
    title: '本月预计营收',
    count: '11482',
    suffix: '元',
    image: image3,
  },
  {
    title: '本月农资用量',
    count: '1241',
    suffix: '吨',
    image: image4,
  },
])
</script>

<template>
  <div class="counter-wrap">
    <div v-for="(item, index) in countList" :key="index" class="counter">
      <img :src="item.image" :alt="item.title">
      <div class="right">
        <div class="title">
          {{ item.title }}
        </div>
        <CountUp
          :end-val="item.count"
        >
          <template #suffix>
            <span>{{ item.suffix }}</span>
          </template>
        </CountUp>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.counter-wrap {
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  padding: 30px 10px;

  .counter {
    display: flex;
    &>img {
      width: 100px;
      height: 100px;
    }
    .right {
      display: flex;
      flex-direction: column;
      margin-left: 20px;
      font-size: 16px;
    }
  }
}

.countup-wrap {
  font-size: 24px;
}
</style>
