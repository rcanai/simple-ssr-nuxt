'use strict'

// Lambda Function
// Region is `us-east-1`
// edgelambda.amazonaws.com

const permitIps = [
  // '127.0.0.1'
]

/* eslint-disable require-await */
exports.handler = async (event) => {
  const request = event.Records[0].cf.request
  const headers = request.headers
  const clientIp = request.clientIp
  const uri = request.uri // e.g. '/users/1/profile'

  const authUser = 'user'
  const authPass = 'password'
  const authString = 'Basic ' + Buffer.from(authUser + ':' + authPass).toString('base64')

  // マニフェストはBasic認証なし
  if (uri.includes('manifest')) {
    return request
  }

  // 時間指定でBASIC認証を外す
  const dt = new Date()
  dt.setTime(dt.getTime() + 6000 * dt.getTimezoneOffset()) // 6000 * 時差
  const nowTime = dt.getTime()
  const limitTime = 1590648000000 // ミリ秒: 2020.05.28 15:40:00:00
  if (nowTime > limitTime) {
    // return request
  }

  if (
    typeof headers.authorization === 'undefined' ||
    headers.authorization[0].value !== authString ||
    (permitIps.length > 0 && !permitIps.includes(clientIp))
  ) {
    const body = '401 Unauthorized'
    const response = {
      status: '401',
      statusDescription: 'Unauthorized',
      body,
      headers: {
        'www-authenticate': [{ key: 'WWW-Authenticate', value: 'Basic' }]
      }
    }
    return response
  }

  return request
}
