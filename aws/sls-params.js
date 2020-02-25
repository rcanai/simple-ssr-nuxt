/* eslint-disable no-console */
const NODE_ENV = process.env.NODE_ENV || 'development'
console.log('NODE_ENV: ', NODE_ENV)

module.exports = () => {
  return {
    NODE_ENV,
    S3_BUCKET_NAME: `${NODE_ENV}-simple-sls-nuxt-static-bucket`,
    API_KEY: process.env.API_KEY || 'FIXME12345FIXME12345FIXME12345FIXME12345FIXME12345',
    DOMAIN: process.env.DOMAIN,
    FULL_DOMAIN: process.env.FULL_DOMAIN,
    SSL_ARN: process.env.SSL_ARN,
    LAMBDA_ARN: process.env.LAMBDA_ARN,
    HAS_LAMBDA: process.env.HAS_LAMBDA
  }
}
