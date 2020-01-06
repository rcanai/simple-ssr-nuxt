module.exports = () => {
  return {
    NODE_ENV: process.env.NODE_ENV,
    S3_BUCKET_NAME: `${process.env.NODE_ENV}-simple-sls-nuxt-static-bucket`,
    API_KEY: process.env.API_KEY
  }
}
