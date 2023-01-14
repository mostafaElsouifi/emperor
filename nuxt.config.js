// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    MONGO_URL: process.env.MONGO_URL,
  },
  nitro: {
    plugins: ["~/server/index.js"],
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=500, initial-scale=1",
      title: "Emperor Shaheen",
      meta: [
        {
          name: "description",
          content:
            "Emperor Shaheen | Blogs website with products recommendations",
        },
      ],
    },
  },
});
