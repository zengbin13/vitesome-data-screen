<script setup>
import VChart from 'vue-echarts'
import { getWarehouseSaleApi as getChartDataApi } from '~/utils/apis'

const option = ref({
  grid: {
    top: 45,
    bottom: 5,
    left: 6,
    right: 6,
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    data: [],
    show: true,
    animation: true,
    axisLabel: {
      show: true,
      color: '#fff',
      margin: 14,
      fontSize: 14,
    },
    axisLine: {
      show: true,
    },
    axisTick: {
      show: false,
    },
  },
  yAxis: {
    show: true,
    type: 'value',
    animation: false,
    name: '单位: 吨',
    max: 'dataMax',
    nameTextStyle: {
      fontSize: 15,
      color: '#fff',
      padding: [0, 10, 10, 0],
    },
    axisLine: {
      show: false,
    },
    axisLabel: {
      show: true,
      color: '#a5a5a6',
      fontSize: 16,
    },
    splitLine: {
      show: true,
      lineStyle: {
        type: 'dashed',
        color: 'rgba(165, 165, 166, 0.5)',
      },
    },
  },
  series: [
    {
      data: [],
      type: 'pictorialBar',
      barWidth: '50%',
      barCategoryGap: '10%',
      symbol: 'triangle',
      color: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
          offset: 0.3, color: 'rgba(149, 243, 255, 1)',
        }, {
          offset: 1, color: 'rgba(149, 243, 255, 0.5)',
        }],
        global: false,
      },
    },
    {
      data: [],
      type: 'bar',
      barWidth: '50%',
      barCategoryGap: '10%',
      color: 'rgba(255,255,255,0.1)',
      z: 1,
    },
  ],
  dataZoom: [
    {
      show: true,
      type: 'inside',
      start: 0,
      end: 100,
    },
  ],

})
const loading = ref(false)
async function getChartData() {
  loading.value = true
  try {
    const { data } = await getChartDataApi()
    option.value.xAxis.data = data.map(item => item.time)
    const countList = data.map(item => item.count)
    const bgValue = Math.ceil(Math.max(...countList) / 100) * 100
    option.value.yAxis.max = bgValue
    const bgList = countList.map(() => bgValue)
    option.value.series[0].data = countList
    option.value.series[1].data = bgList
  }
  catch (error) {

  }
  finally {
    loading.value = true
  }
}
onActivated(() => {
  getChartData()
})
</script>

<template>
  <VChart class="chart" :option="option" autoresize />
</template>

<style scoped>
.chart {
  width: 100%;
  height: 100%;
  color:#a5a5a6
}
</style>
