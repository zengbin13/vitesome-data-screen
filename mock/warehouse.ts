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
  {
    url: '/api/warehouse/production',
    method: 'get',
    timeout: 200,
    response: () => {
      return resultSuccess([{
        time: '1月',
        count: Mock.Random.natural(100, 500),
      },
      {
        time: '2月',
        count: Mock.Random.natural(100, 500),
      },
      {
        time: '3月',
        count: Mock.Random.natural(100, 500),
      },
      {
        time: '4月',
        count: Mock.Random.natural(100, 500),
      },
      {
        time: '5月',
        count: Mock.Random.natural(100, 500),
      },
      {
        time: '6月',
        count: Mock.Random.natural(100, 500),
      },
      {
        time: '7月',
        count: Mock.Random.natural(100, 500),
      },
      {
        time: '8月',
        count: Mock.Random.natural(100, 500),
      },
      {
        time: '9月',
        count: Mock.Random.natural(100, 500),
      },
      {
        time: '10月',
        count: Mock.Random.natural(100, 500),
      },
      {
        time: '11月',
        count: Mock.Random.natural(100, 500),
      },
      {
        time: '12月',
        count: Mock.Random.natural(100, 500),
      },

      ])
    },
  },
  {
    url: '/api/warehouse/dosage',
    method: 'get',
    timeout: 200,
    response: () => {
      return resultSuccess([{
        time: 2017,
        last_year: Mock.Random.natural(100, 500),
        this_year: Mock.Random.natural(100, 500),
      },
      {
        time: 2018,
        last_year: Mock.Random.natural(100, 500),
        this_year: Mock.Random.natural(100, 500),
      },
      {
        time: 2019,
        last_year: Mock.Random.natural(100, 500),
        this_year: Mock.Random.natural(100, 500),
      },
      {
        time: 2020,
        last_year: Mock.Random.natural(100, 500),
        this_year: Mock.Random.natural(100, 500),
      },
      {
        time: 2021,
        last_year: Mock.Random.natural(100, 500),
        this_year: Mock.Random.natural(100, 500),
      },
      {
        time: 2022,
        last_year: Mock.Random.natural(100, 500),
        this_year: Mock.Random.natural(100, 500),
      },
      {
        time: 2023,
        last_year: Mock.Random.natural(100, 500),
        this_year: Mock.Random.natural(100, 500),
      },
      ])
    },
  },
  {
    url: '/api/warehouse/ratio',
    method: 'get',
    timeout: 200,
    response: () => {
      return resultSuccess([{
        name: '种植类',
        value: Mock.Random.natural(10, 50),

      },
      {
        name: '养殖类',
        value: Mock.Random.natural(100, 500),

      },
      {
        name: '蔬菜类',
        value: Mock.Random.natural(10, 500),

      },
      {
        name: '农资类',
        value: Mock.Random.natural(100, 200),

      },
      {
        name: '防护类',
        value: Mock.Random.natural(100, 500),
      },
      ])
    },
  },
  {
    url: '/api/warehouse/map',
    method: 'get',
    timeout: 200,
    response: () => {
      return resultSuccess([
        { name: '山东省', value: 620 },
        { name: '天津', value: 468 },
        { name: '湖南省', value: 1027 },
        { name: '广东省', value: 438 },
        { name: '江苏省', value: 692 },
        { name: '新疆维吾尔自治区', value: 928 },
        { name: '上海', value: 340 },
        { name: '河南省', value: 568 },
        { name: '广西壮族自治区', value: 687 },
        { name: '甘肃省', value: 236 },
      ])
    },
  },
] as MockMethod[]
