import request from './http'

export function loginApi(data) {
  return request({
    url: '/login',
    method: 'post',
    data: {
      account: data.farm,
      password: data.henhouse,
    },
  })
}
