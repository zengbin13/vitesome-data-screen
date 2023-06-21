<script setup>
// 1.获取json地图数据
// 2.在echarts注册区域地图
// 3.加载地图信息
// http://chartlib.datains.cn/asset/get/s/data-1527045631990-r1dZ0IM1X.json

import VChart from 'vue-echarts'
import { registerMap } from 'echarts/core'

import { getWarehouseMapApi as getChartDataApi } from '~/utils/apis'

const code = ref('china')

async function getGeoJson(regionCode) {
  code.value = regionCode
  try {
    // const response = import.meta.glob('./dir/*.js')
    const response = await import(`../../../../assets/geojson/${code.value}.json`)
    const data = response.default
    registerMap(code.value, {
      geoJSON: data,
      specialAreas: {},
    })
    return data
  }
  catch (error) {
    console.error('Error loading JSON data:', error)
  }
}

const option = ref({})
const loading = ref(false)
async function getChartData() {
  loading.value = true
  try {
    const response = await getChartDataApi()
    return response
  }
  catch (error) {
    throw (new Error('获取信息失败'))
  }
  finally {
    loading.value = true
  }
}

async function loadMap() {
  // 获取并注册地图
  await getGeoJson(code.value)
  // 获取地图显示数据
  const { data } = await getChartData()
  // 返回echart配置项目
  option.value
  = {
      tooltip: {
        show: true,
      },
      series: [{
        name: 'MAP',
        type: 'map',
        map: code.value,
        selectedMode: 'false',
        zoom: 1.2,
        data,
        itemStyle: {
          areaColor: {
            type: 'radial',
            x: 0.5,
            y: 0.5,
            r: 0.5,
            colorStops: [{
              offset: 0, color: 'rgba(31, 178, 246, 0.8)',
            }, {
              offset: 0.8, color: 'rgba(31, 129, 233, 1)',
            }],
            global: false,
          },
        },
      }],
    }
}
onActivated(async () => {
  loadMap()
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
