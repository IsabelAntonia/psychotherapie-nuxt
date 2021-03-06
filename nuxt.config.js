/* eslint-disable */
import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin'
// import pkg from './package'

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    // title: pkg.name,
    titleTemplate: 'Psychotherapie Peißenberg | Barbara Seidl',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        name: 'google-site-verification',
        content: 'k22YcCC0Q_5LDBFsClAKy3alyRC2xjBfQ65dFqKMSp0'
      },
      {
        hid: 'description',
        name: 'description',
        // content: pkg.description
        content: 'Psychotherapie in Peißenberg. Hilfe bei Lebenskrisen und psychischen Erkrankungen'
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },

  /*
   ** Global CSS
   */
  css: ['~/assets/style/app.styl'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/vuetify'],

  /*
   ** Nuxt.js modules
   */

  modules: ['bootstrap-vue/nuxt', '@nuxtjs/sitemap'],

  sitemap: {
    generate: true,


    routes: [
      '/',
      '/startseite',
      '/therapieangebot'

    ]
  },


  // modules: [],

  /*
   ** Build configuration
   */
  build: {
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ['~assets/style/variables.styl']
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
