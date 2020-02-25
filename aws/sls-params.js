/* eslint-disable no-console */
console.log('NODE_ENV: ', process.env.NODE_ENV)

module.exports = () => {
  return {
    NODE_ENV: process.env.NODE_ENV,
    S3_BUCKET_NAME: `${process.env.NODE_ENV}-simple-sls-nuxt-static-bucket`,
    API_KEY: process.env.API_KEY,
    DOMAIN: process.env.DOMAIN,
    FULL_DOMAIN: process.env.FULL_DOMAIN,
    SSL_ARN: process.env.SSL_ARN,
    LAMBDA_ARN: process.env.LAMBDA_ARN
  }
}
