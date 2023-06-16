import type { MockMethod } from 'vite-plugin-mock'
import { resultError, resultSuccess } from './_util'

export default [
  {
    url: '/api/login',
    method: 'post',
    timeout: 2000,
    response: ({ body }: { body: Record<string, string> }) => {
      const { account, password } = body
      if (!account || account.length < 6)
        return resultError('账号格式不正常')
      if (!password || password.length < 6)
        return resultError('密码不正常')
      return resultSuccess({
        token: 'HVeUSCHLl6mA__ohs1NvAEUOzGUuyrXEZxufw_S__WY',
      })
    },
  },
  {
    url: '/api/index',
    method: 'post',
    timeout: 2000,
    response: ({ body }: { body: Record<string, string> }) => {
      const { account, password } = body
      if (!account || account.length < 6)
        return resultError('账号格式不正常')
      if (!password || password.length < 6)
        return resultError('密码不正常')
      return resultSuccess({
        token: 'HVeUSCHLl6mA__ohs1NvAEUOzGUuyrXEZxufw_S__WY',
      })
    },
  },
  // {
  //   url: '/api/text',
  //   method: 'post',
  //   rawResponse: async (req, res) => {
  //     let reqbody = ''
  //     await new Promise((resolve) => {
  //       req.on('data', (chunk) => {
  //         reqbody += chunk
  //       })
  //       req.on('end', () => resolve(undefined))
  //     })
  //     res.setHeader('Content-Type', 'text/plain')
  //     res.statusCode = 200
  //     res.end(`hello, ${reqbody}`)
  //   },
  // },
] as MockMethod[]
