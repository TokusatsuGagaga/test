import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  publicRuntimeConfig: {
    collection: process.env.APP_COLLECTION,
    iconNetwork: process.env.APP_ICON_NETWORK,
    scoreAddress: process.env.APP_SCORE_ADDRESS,
    logoHash: process.env.APP_LOGO_HASH,
    unrevealedHash: process.env.APP_UNREVEALED_HASH,
  },
  app: {
    head: {
      title: process.env.APP_NAME,
      titleTemplate: `%s - ${process.env.APP_NAME}`,
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  },
})
