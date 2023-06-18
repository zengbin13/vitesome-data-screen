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
  {
    url: '/api/warehouse/sale',
    method: 'get',
    timeout: 200,
    response: () => {
      return resultSuccess([{
        time: 2017,
        count: Mock.Random.natural(100, 500),
      },
      {
        time: 2018,
        count: Mock.Random.natural(100, 500),
      },
      {
        time: 2019,
        count: Mock.Random.natural(100, 500),
      },
      {
        time: 2020,
        count: Mock.Random.natural(100, 500),
      },
      {
        time: 2021,
        count: Mock.Random.natural(100, 500),
      },
      {
        time: 2022,
        count: Mock.Random.natural(20, 200),
      },
      {
        time: 2023,
        count: Mock.Random.natural(100, 500),
      },
      ])
    },
  },

] as MockMethod[]
