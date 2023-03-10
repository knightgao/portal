// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@unocss/nuxt'],
    unocss: {
        uno: true,
        icons: true,
        attributify: true,
        shortcuts: {},
        rules: [],
    }
})
