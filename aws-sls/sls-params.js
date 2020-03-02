/* eslint-disable no-console */
const NODE_ENV = process.env.NODE_ENV || 'development'
console.log('NODE_ENV: ', NODE_ENV)

module.exports = () => {
  return {
    NODE_ENV,
    S3_BUCKET_NAME: `${NODE_ENV}-simple-sls-nuxt-static-bucket`,
    API_KEY: process.env.API_KEY || 'FIXME12345FIXME12345FIXME12345FIXME12345FIXME12345'
  }
}
