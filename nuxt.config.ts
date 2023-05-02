// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
      baseURL: '/nuxt-daiyao/' // baseURL: '/<repository>/'
    },
    // modules: [
    //     '@nuxtjs/style-resources',
    // ],
    
    vite: {
        css: {
          preprocessorOptions: {
            scss: {
              additionalData: '@import "@/assets/scss/style.scss";'
            }
          }
        }
    }
})
