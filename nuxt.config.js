
/* eslint-disable nuxt/no-cjs-in-config */
module.exports = {
  mode: 'universal',
  srcDir: 'client/',
  router: {
    // ここを/STAGE_NAME/に変更すればAPIGWのURLのままアクセスできる。
    // 基本的にはCloudFrontで参照するため、変更の必要はない。
    base: '/'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'simple-sls-nuxt',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'simple-sls-nuxt' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/static/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    process.env.NODE_ENV === 'development' ? '@nuxtjs/eslint-module' : ''
  ].filter(Boolean),
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    ['@nuxtjs/axios'],
    // Doc: https://pwa.nuxtjs.org/
    ['@nuxtjs/pwa', {
      workbox: {
        swScope: '/'
      }
    }]
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
    // ビルドキャッシュ（動かないかも？公式見て！）
    hardSource: process.env.NODE_ENV === 'development',
    cache: process.env.NODE_ENV === 'development'
  }
}
