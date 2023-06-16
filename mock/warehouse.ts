import type { MockMethod } from 'vite-plugin-mock'
import Mock from 'mockjs'
import { resultSuccess } from './_util'

export default [
  {
    url: '/api/warehouse/overview',
    method: 'get',
    timeout: 100,
    response: () => {
      return resultSuccess([{
        title: '当前云仓订单',
        count: Mock.Random.natural(1, 100),
        suffix: '个',
      },
      {
        title: '本月云仓储量',
        count: Mock.Random.natural(100, 10000),
        suffix: '吨',
      },
      {
        title: '本月预计营收',
        count: Mock.Random.natural(5000, 8000),
        suffix: '元',
      },
      {
        title: '本月农资用量',
        count: Mock.Random.natural(100, 10000),
        suffix: '吨',
      }])
    },
  },

] as MockMethod[]
