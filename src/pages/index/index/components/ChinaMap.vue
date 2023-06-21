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
      visualMap: {
        seriesIndex: 0,
        left: 20,
        bottom: 20,
        pieces: [
          { gte: 1000, label: '1000个以上' },
          { gte: 600, lte: 999, label: '600-999个' },
          { gte: 200, lte: 599, label: '200-599个' },
          { gte: 50, lte: 199, label: '49-199个' },
          { gte: 10, lte: 49, label: '10-49个' },
          { lte: 9, label: '1-9个' },
        ],
        inRange: {
          color: [
            'rgba(237,247,253,.8)',
            'rgba(183,225,246,.9)',
            'rgba(129,202,239,.9)',
            'rgba(56,172,229,.9)',
            'rgba(23,129,181,.9)',
            'rgba(16,90,126,0.9)',
          ],
        },
        textStyle: {
          color: '#fff',
        },
      },
      geo: {
        map: code.value,
        selectedMode: 'false',
        zoom: 1.2,
        roam: true, // 是否允许缩放和平移
        itemStyle: {
          borderColor: 'rgba(147, 235, 248, .8)',
          borderWidth: 1,
          areaColor: {
            type: 'radial',
            x: 0.5,
            y: 0.5,
            r: 0.8,
            colorStops: [{
              offset: 0, color: 'rgba(21, 108, 201, 0.1)',
            }, {
              offset: 0.8, color: 'rgba(31, 129, 233, 0.2)',
            }],
            global: false,
          },
        },
        emphasis: {
          label: {
            show: false,
          },
          itemStyle: {
            borderWidth: 2,
            areaColor: {
              type: 'radial',
              x: 0.5,
              y: 0.5,
              r: 0.8,
              colorStops: [{
                offset: 0, color: 'rgba(21, 108, 201, 0.2)',
              }, {
                offset: 0.8, color: 'rgba(31, 129, 233, 0.8)',
              }],
              global: false,
            },
          },
        },
        // label: {
        //   show: false,
        //   color: '#000',
        //   formatter(val) {
        //     return val.data ? val.name.slice(0, 2) : ''
        //   },
        // },
      },
      series: [{
        name: 'MAP',
        type: 'map',
        geoIndex: 0, // map itemstyle 不生效 使用geo配置项
        data,
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
