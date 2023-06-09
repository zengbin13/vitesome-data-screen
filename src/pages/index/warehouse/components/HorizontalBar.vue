<script setup>
import VChart from 'vue-echarts'
import * as echarts from 'echarts'

import { getWarehouseHorizontalApi as getChartDataApi } from '~/utils/apis'

const source = ref([])
const chartRef = ref(null)
const option = ref({
  grid: {
    top: 30,
    bottom: 10,
    left: 10,
    right: 10,
  },
  backgroundColor: 'transparent',
  xAxis: { type: 'value', show: false },
  yAxis: [
    {
      type: 'category',
      inverse: true,
      show: false,
    },
    {
      type: 'category',
      inverse: true,
      axisTick: 'none',
      axisLine: 'none',
      position: 'left',
      // offset: -10,
      data: [],
      axisLabel: {
        interval: 0,
        align: 'left',
        verticalAlign: 'bottom',
        lineHeight: 42,
        padding: [8, 10],
        formatter(value) {
          return `{a|}{b|${value}}`
        },
        rich: {
          a: {
            backgroundColor: { image: 'data:image/png;base64,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' },
            height: 20,
            width: 20,
          },
          b: {
            padding: [6, 12],
            color: '#fff',
            fontSize: 16,
          },
        },
      },
    },
    {
      type: 'category',
      inverse: true,
      axisTick: 'none',
      axisLine: 'none',
      data: source.value.map((item) => {
        return `${(item.value / item.max_value * 100)}%`
      }),
      axisLabel: {
        align: 'right',
        formatter: '{value}',
        lineHeight: 42,
        color: '#fff',
        fontSize: 16,
        verticalAlign: 'bottom',
        padding: [8, 10],
      },
    },
  ],
  dataset: {
    dimensions: ['name', 'value', 'max_value'],
    source: source.value,
  },
  series: [
    {
      name: 'value',
      type: 'bar',
      yAxisIndex: 0,
      barWidth: 12,
      itemStyle: {
        borderRadius: 12,
        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
          {
            offset: 0,
            color: '#1df0e4',
          },
          {
            offset: 1,
            color: '#128fe4',
          },
        ]),
      },
    },
    {
      name: 'max_value',
      type: 'bar',
      barWidth: 12,
      barGap: '-100%',
      // yAxisIndex: 2, 指定第二条Y轴数据
      // barCategoryGap: 5, 设置宽度后间隙失效
      z: 0,
      itemStyle: {
        color: 'rgba(5, 43, 80,.5)',
        borderRadius: 12,
      },
    },
  ],
})
const loading = ref(false)
async function getChartData() {
  loading.value = true
  try {
    const {
      data: {
        list,
        max,
      },
    } = await getChartDataApi()
    source.value = list.map((item) => {
      return {
        ...item,
        max_value: max,
      }
    })
    option.value.dataset.source = source.value
    // chartRef.value.refresh()
  }
  catch (error) {
    throw (new Error('获取信息失败'))
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
  <VChart ref="chartRef" class="chart" :option="option" autoresize />
</template>

<style lang="scss" scoped>
.chart {
  width: 100%;
  height: 100%;
}
</style>
