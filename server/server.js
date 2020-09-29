const path = require('path')
const awsServerlessExpress = require('aws-serverless-express')
const { Nuxt } = require('nuxt-start')
const Fastify = require('fastify')

const binaryTypes = ['*/*']

const fastify = Fastify({
  serverFactory (handler) {
    return awsServerlessExpress.createServer(handler, null, binaryTypes)
  }
})

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, '../', '.nuxt', 'dist'),
  prefix: '/_nuxt/'
})

fastify.use((request, reply, next) => {
  reply.setHeader('no-cache', 'Set-Cookie')
  reply.setHeader('Cache-Control', 'no-store')
  reply.setHeader('x-xss-protection', '1; mode=block')
  reply.setHeader('x-frame-options', 'DENY')
  reply.setHeader('x-content-type-options', 'nosniff')
  const path = request.originalUrl
  if (path.includes('/embed/')) {
    reply.setHeader('x-frame-options', 'ALLOWALL')
  }
  next()
})

exports.createApp = async function start () {
  const config = require('../nuxt.config.js')

  const nuxt = new Nuxt(Object.assign(config, { dev: false }))

  await nuxt.ready()
  fastify.use(
    (request, reply, next) => {
      nuxt.render(request, reply, next)
    }
  )

  await fastify.ready()

  return fastify
}
