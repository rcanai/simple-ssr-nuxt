/* eslint-disable nuxt/no-cjs-in-config */
/* eslint-disable require-await */
const BASE_URL = process.env.BASE_URL || 'http://localhost:3000'

let generate
if (process.env.IS_GENERATE) {
  generate = {
    fallback: true, // /404.htmlを生成
    subFolders: true, // すべてを**/index.htmlで生成
    async routes () {
      // const { data } = require('axios').get('https://my-api/users')
      const data = [{ id: 1 }, { id: 2 }, { id: 9 }]
      return data.map((article) => {
        return `/articles/${article.id}`
      })
    }
  }
}

module.exports = {
  mode: 'universal',
  srcDir: 'client/',
  generate,
  /*
  ** Headers of the page
  */
  head: {
    title: 'simple-ssr-nuxt',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'simple-ssr-nuxt' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
  styleResources: {
    scss: []
  },
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
    process.env.NODE_ENV === 'development' ? ['@nuxtjs/eslint-module'] : '',
    // Doc: https://pwa.nuxtjs.org/
    ['@nuxtjs/pwa'],
    // Doc: https://github.com/nuxt-community/style-resources-module
    ['@nuxtjs/style-resources']
  ].filter(Boolean),
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    ['@nuxtjs/axios'],
    // Doc: https://github.com/nuxt-community/sitemap-module
    ['@nuxtjs/sitemap']
  ],
  /*
  ** @nuxtjs/pwa
  */
  pwa: {
    manifest: {
      icons: [
        {
          src: '/icon.png',
          sizes: '72x72 96x96 128x128 192x192 256x256 512x512'
        }
      ]
    },
    icon: false // 無駄にコンパイルされるので無効化する
  },
  /*
** @nuxtjs/sitemap
*/
  sitemap: {
    hostname: BASE_URL,
    gzip: true,
    exclude: [
      '/admin/**'
    ]
  },
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
    // ファイルネームを変えて、S3に移動させたファイルを見れるようにする
    filenames: {
      img: ({ isDev }) => (isDev ? '[path][name].[ext]' : 'images/[name].[hash:7].[ext]'),
      font: ({ isDev }) => (isDev ? '[path][name].[ext]' : 'fonts/[name].[hash:7].[ext]'),
      video: ({ isDev }) => (isDev ? '[path][name].[ext]' : 'videos/[name].[hash:7].[ext]')
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
