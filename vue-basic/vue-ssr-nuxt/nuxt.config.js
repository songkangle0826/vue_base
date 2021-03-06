
module.exports = {
  // 服务端渲染,如果要单页渲染,设置为spa
  mode: 'universal',
  /*
  ** Headers of the page
  */
  //
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
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
    'element-ui/lib/theme-chalk/ha.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  
  // 数据请求
  modules: [
      "@nuxtjs/axios"
  ],
    axios:{
        proxy: true
    },
    proxy:{
      '/api': "http://localhost:8080"
    },
    
    
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  
  
  /*
  * 路由相关配置
  * */
  router: {
    extendRoutes(routes,resolve){
      console.log(routes);
      routes.push({
          name: "foo",
          path: "/foo",
          component: resolve(__dirname,"pages/custom.vue")
      })
    }
  }
  
}
