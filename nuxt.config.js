module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '一起神奇吧 - 17shenqi',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: '上海迪士尼 乐园时间表 乐园指南 乐园门票收藏与交换'
      }
    ],
    script: [
      { src: 'https://hm.baidu.com/hm.js?1678ad2a8895998f750034b81ad97996' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  css: ['~styles/disney/index.styl'],
  /*
  ** Customize the progress bar color
  */
  plugins: ['~plugins/element-ui', '~plugins/gs.js'],
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
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
