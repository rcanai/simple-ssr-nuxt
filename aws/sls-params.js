/* eslint-disable no-console */
console.log('NODE_ENV: ', process.env.NODE_ENV)

module.exports = () => {
  return {
    NODE_ENV: process.env.NODE_ENV,
    NODE_ENV_SHORT: process.env.NODE_ENV_SHORT,
    S3_BUCKET_NAME: `${process.env.NODE_ENV}-simple-sls-nuxt-static-bucket`,
    API_KEY: process.env.API_KEY,
    DOMAIN: process.env.DOMAIN,
    SSL_ARN: process.env.SSL_ARN
  }
}
