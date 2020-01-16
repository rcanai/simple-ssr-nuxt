const path = require('path')
const awsServerlessExpress = require('aws-serverless-express')
const { Nuxt } = require('nuxt-start')

const binaryTypes = ['*/*']

const fastify = require('fastify')({
  serverFactory (handler) {
    return awsServerlessExpress.createServer(handler, null, binaryTypes)
  }
})

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, '../', '.nuxt', 'dist'),
  prefix: '/_nuxt/'
})

exports.createApp = async function start () {
  const config = require('../nuxt.config.js')

  const nuxt = new Nuxt(Object.assign(config, { dev: false }))

  await nuxt.ready()
  fastify.use(nuxt.render)

  await fastify.ready()

  return fastify
}
