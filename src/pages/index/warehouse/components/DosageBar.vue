<script setup>
import VChart from 'vue-echarts'
import { getWarehouseDosageApi as getChartDataApi } from '~/utils/apis'

const option = ref({
  legend: {
    right: 0,
    itemGap: 20,
    itemStyle: {
    },
    textStyle: {
      color: '#fff',
      fontSize: 14,
    },
  },
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
    name: '单位: 吨',
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
      name: '去年用量',
      type: 'bar',
      data: [],
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(255,255,255,0.1)',
      },
      barGap: 0,
      barCategoryGap: '30%',
      color: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
          offset: 0, color: '#207ce8',
        }, {
          offset: 0.8, color: '#1ddaff',
        }],
        global: false,
      },
    },
    {
      name: '今年用量',
      type: 'bar',
      data: [],
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(255,255,255,0.2)',
      },
      barGap: 0,
      barCategoryGap: '30%',
      color: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
          offset: 0, color: '#f2c04d',
        }, {
          offset: 0.8, color: '#f6dd6f',
        }],
        global: false,
      },
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
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'line',
      textStyle: {
        color: '#fff',
      },
    },
  },
})
const loading = ref(false)
async function getChartData() {
  loading.value = true
  try {
    const { data } = await getChartDataApi()
    option.value.xAxis.data = data.map(item => item.time)
    const lastYearList = data.map(item => item.last_year)
    const thisYearList = data.map(item => item.this_year)
    option.value.series[0].data = lastYearList
    option.value.series[1].data = thisYearList
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

<style  lang="scss" scoped>
.chart {
  width: 100%;
  height: 100%;
}
</style>
