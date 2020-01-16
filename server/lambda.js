const awsServerlessExpress = require('aws-serverless-express')

const { createApp } = require('./server.js')

const appPromise = createApp()

exports.handler = async (event, context) => {
  const app = await appPromise

  return awsServerlessExpress.proxy(app.server, event, context, 'PROMISE').promise
}
