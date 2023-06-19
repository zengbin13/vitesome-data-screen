<script setup>
import VChart from 'vue-echarts'
import { getWarehouseProductionApi as getChartDataApi } from '~/utils/apis'

const selectList = ref([
  {
    id: 1,
    name: '一号养殖区域',
  },
  {
    id: 2,
    name: '二号养殖区域',
  },
  {
    id: 3,
    name: '三号养殖区域',
  },
  {
    id: 4,
    name: '四号养殖区域',
  },
  {
    id: 5,
    name: '五号养殖区域',
  },
])

const selectId = ref(1)
function handleSelectChange(id) {
  getChartData(id)
}

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
        type: 'solid',
        color: 'rgba(165, 165, 166, 0.5)',
      },
    },
  },
  series: [
    {
      data: [],
      type: 'line',
      symbol: 'none',
      lineStyle: {
        color: '#fa9f00',
        width: 3,
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0, color: 'rgba(252, 160, 0, 1)',
          }, {
            offset: 1, color: 'rgba(252, 160, 0, 0.3)',
          }],
          global: false,
        },
      },
      emphasis: {
        label: {
          show: true,
          color: '#fff',
        },
        itemStyle: {
          color: '#fa9f00',
        },
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
    const countList = data.map(item => item.count)
    option.value.series[0].data = countList
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
  <div class="chart-wrap">
    <VChart class="chart" :option="option" autoresize />
    <div class="select-wrap">
      <span>选择区域:</span>
      <select v-model="selectId" class="select" @change="handleSelectChange">
        <option v-for="item in selectList" :key="item.id" :value="item.id">
          {{ item.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<style  lang="scss" scoped>
.chart-wrap {
  width: 100%;
  height: 100%;
  flex: 1;

  .select-wrap {
    position: absolute;
    z-index: 999;
    top: 10px;
    right: 20px;
    color: #fff;

    &>span {
      padding-right: 4px;
    }

    .select {
      font-size: 16px;
      max-width: 150px;
      padding: 2px;
      background-color: #233a56;
      border: 2px solid #46678a;
      border-radius: 4px;
      &>option {
        font-size: 14px;
        border-radius: 0px;
      }
    }
  }

  .chart {
    width: 100%;
    height: 100%;
  }
}
</style>
