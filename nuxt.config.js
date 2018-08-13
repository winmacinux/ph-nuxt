const path = require('path')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'ph-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  plugins: [{src: '~/plugins/vuetify.js'},{ src: '~/plugins/vue2-google-maps.js'},{ src: '~/plugins/swiper.js', ssr: false },],
  /*
  ** Build configuration
  */
  css: [
    'swiper/dist/css/swiper.css'
  ],
  build: {
    /*
    ** Run ESLint on save
    */
    vendor: [
      '~/plugins/vuetify.js',
      'vue2-google-maps',
      'vue-awesome-swiper'
    ],
    extend (config, { isDev, isClient }) {
      // if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          include: [path.resolve(__dirname, './node_modules/vue2-google-maps')],
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      // }
    }
  }
}

