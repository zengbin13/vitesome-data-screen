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

export function getWarehouseSaleApi() {
  return request({
    url: '/api/warehouse/sale',
    method: 'get',
  })
}

export function getWarehouseProductionApi(id) {
  return request({
    url: '/api/warehouse/production',
    method: 'get',
    params: { id },
  })
}

export function getWarehouseDosageApi() {
  return request({
    url: '/api/warehouse/dosage',
    method: 'get',
  })
}

export function getWarehouseRatioApi() {
  return request({
    url: '/api/warehouse/ratio',
    method: 'get',
  })
}

export function getWarehouseMapApi() {
  return request({
    url: '/api/warehouse/map',
    method: 'get',
  })
}

export function getWarehouseHorizontalApi() {
  return request({
    url: '/api/warehouse/horizontal',
    method: 'get',
  })
}
