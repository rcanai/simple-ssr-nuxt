'use strict'

// Lambda Function
// Region is `us-east-1`
// edgelambda.amazonaws.com

/* eslint-disable require-await */
exports.handler = async (event) => {
  const request = event.Records[0].cf.request
  const uri = request.uri // Ex. /users/1/profile

  if (!uri.includes('.')) {
    // 余計なスラッシュｗを消してhtml拡張子をつける
    request.uri += '/' + uri.split('/').filter(Boolean).join('/') + '/index..html'
  }

  return request
}
