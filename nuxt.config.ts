// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    ssr: true,
    app: {
        baseURL: process.env.NODE_ENV === 'production' ? '/nuxt-daiyao/' : '/',
        buildAssetsDir: '/static/'
    },
    // modules: [
    //     '@nuxtjs/style-resources',
    // ],
    
    vite: {
        css: {
          preprocessorOptions: {
            scss: {
              additionalData: '@import "~/assets/scss/style.scss";'
            }
          }
        }
    }
})
