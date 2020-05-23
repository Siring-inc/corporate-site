const { getConfigForBase } = require('./lib/config.js')

const baseConfig = getConfigForBase([
  'BASE_NAME',
  'BASE_DESCRIPTION',
  'BASE_URL',
  'BASE_OGP',
  'BASE_DIR'
])

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#'
    },
    titleTemplate: '%s - ' + baseConfig.BASE_NAME,
    title: baseConfig.BASE_NAME,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: baseConfig.BASE_DESCRIPTION
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: baseConfig.BASE_NAME
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: baseConfig.BASE_URL },
      { hid: 'og:title', property: 'og:title', content: baseConfig.BASE_NAME },
      {
        hid: 'og:description',
        property: 'og:description',
        content: baseConfig.BASE_DESCRIPTION
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${baseConfig.BASE_URL}/img/ogimage.jpg`
      },
      // {
      //   hid: 'google-site-verification',
      //   name: 'google-site-verification',
      //   content: 'LHTyl2JJavu-I5EjSA35zla4cnXQ46OzMYjWSCv8Ca8'
      // },
      { name: 'twitter:card', content: 'summary_large_image' }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: `${baseConfig.BASE_URL}/favicon.ico`
      },
      {
        rel: 'apple-touch-icon',
        type: 'image/png',
        href: `${baseConfig.BASE_URL}/apple-touch-icon-180x180.png`
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: `${baseConfig.BASE_URL}/icon-192x192.png`
      }
    ],
    script: [
      {
        crossorigin: 'anonymous',
        src:
          'https://polyfill.io/v3/polyfill.min.js?features=es2015%2Ces2016%2Ces2017%2Ces5%2Ces6%2Ces7%2Cdefault%2Ces2018%2Ces2019'
      }
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
    '~/node_modules/reset-css/reset.css'
    // '~/node_modules/swiper/css/swiper.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/jsonld' },
    { src: '~/plugins/moment-filter', ssr: false },
    { src: '~/plugins/vue-scrollto'}
    // { src: '~/plugins/ga.js', ssr: false },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/style-resources',
    'nuxt-webfontloader',
    '@nuxtjs/sitemap',
    '@nuxtjs/axios',
    ['@nuxtjs/moment', ['ja']]
  ],
  axios: {},
  styleResources: {
    scss: [
      '~/assets/scss/_variables.scss',
      '~/assets/scss/_mixins.scss',
      '~/assets/scss/_base.scss'
    ]
  },
  webfontloader: {
    google: {
      families: ["M+PLUS+Rounded+1c:400,500,700'"]
    }
  },
  /*
   ** Build configuration
   */
  build: {
    babel: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: { ie: 11, uglify: true }
          }
        ]
      ],
      plugins: ['@babel/transform-runtime']
    },
    vendor: ['babel-polyfill'],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: baseConfig.BASE_URL
  }
}
