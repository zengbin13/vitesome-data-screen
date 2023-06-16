import request from './http'

export function loginApi(data) {
  return request({
    url: '/api/login',
    method: 'post',
    data: {
      account: data.farm,
      password: data.henhouse,
    },
  })
}

export function getWarehouseOverviewApi() {
  return request({
    url: '/api/warehouse/overview',
    method: 'get',
  })
}
