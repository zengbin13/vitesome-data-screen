<script setup>
import VChart from 'vue-echarts'
import { getWarehouseRatioApi as getChartDataApi } from '~/utils/apis'

function getLinearGradient(c1 = '#fff', c2 = '#fff') {
  return {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
      offset: 0, color: c1,
    }, {
      offset: 1, color: c2,
    }],
    global: false,
  }
}

const option = ref({
  color: [getLinearGradient('#00b9f6', '#027fef'), getLinearGradient('#c770f6', '#8d5afa'), getLinearGradient('#fcb86f', '#f97c68'), getLinearGradient('#75f3b5', '#48e1d7'), getLinearGradient('#fe6f96', '#f6446e')],
  legend: {
    left: 'center',
    bottom: 0,
    itemGap: 10,
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
  series: [
    {
      name: '占比',
      data: [],
      type: 'pie',
      center: ['50%', '50%'],
      radius: ['60%', '90%'],
      bottom: 30,
      label: {
        color: '#fff',
      },
      itemStyle: {
        borderRadius: 10,
        // borderColor: '#fff',
        // borderWidth: 2,
        // borderJoin: 'round',
      },
    },
  ],
})
const loading = ref(false)
async function getChartData() {
  loading.value = true
  try {
    const { data } = await getChartDataApi()
    option.value.series[0].data = data
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
