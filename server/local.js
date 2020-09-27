const { Nuxt, Builder } = require('nuxt')

const fastify = require('fastify')({
  logger: false
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

const config = require('../nuxt.config.js')

async function start () {
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server

  await nuxt.ready()
  const builder = new Builder(nuxt)
  await builder.build()

  fastify.use(
    (request, reply, next) => {
      nuxt.render(request, reply, next)
    }
  )

  fastify.listen(port, host, (err, address) => {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  })
}

start()
