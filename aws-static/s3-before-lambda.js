'use strict'

// Lambda Function
// Region is `us-east-1`
// edgelambda.amazonaws.com

/* eslint-disable require-await */
exports.handler = async (event) => {
  const request = event.Records[0].cf.request
  const headers = request.headers

  const authUser = 'user'
  const authPass = 'password'
  const authString = 'Basic ' + Buffer.from(authUser + ':' + authPass).toString('base64')

  if (
    typeof headers.authorization === 'undefined' ||
    headers.authorization[0].value !== authString
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