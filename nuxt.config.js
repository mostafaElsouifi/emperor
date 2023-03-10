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

  modules: [
    "@funken-studio/sitemap-nuxt-3",
    [
      "@nuxtjs/robots",
      {
        rules: {
          UserAgent: "*",
          Disallow: "",
        },
      },
    ],
  ],

  sitemap: {
    hostname: "https://emperorshaheen.herokuapp.com/",
    cacheTime: 1,

    defaults: {
      changefreq: "daily",
      priority: 1,
      lastmod: new Date().toISOString(),
    },
    routes: [
      "blogs/63b9bb08861dab2f31e1d3e7",
      "blogs/63c81e19491b5eacea9e276f",
      "blogs/63c834be50936ac2c741e784",
      "blogs/63c8358450936ac2c741e78f",
      "blogs/63c8364350936ac2c741e79a",
      "blogs/63c8368150936ac2c741e7a5",
      "blogs/63c8372f50936ac2c741e7a7",
      "blogs/63c8377550936ac2c741e7b2",
      "blogs/63c8383250936ac2c741e7b4",
      "blogs/63c838e750936ac2c741e7bf",
      "blogs/63c8395d50936ac2c741e7ca",
      "blogs/63c83a1150936ac2c741e7cc",
      "blogs/63c83aaf50936ac2c741e7d7",
      "blogs/63c83bdd2355348513d4af2e",
      "blogs/63c84222e21a064ca1bf8263",
      "blogs/63c842c8e21a064ca1bf826e",
      "blogs/63c84310e21a064ca1bf8279",
      "blogs/63c843b2e21a064ca1bf827b",
      "blogs/63c8444be21a064ca1bf8286",
      "blogs/63c844f4e21a064ca1bf8291",
      "blogs/63c84596e21a064ca1bf829c",
      "blogs/63c84638e21a064ca1bf82a7",
      "blogs/63c8468ce21a064ca1bf82b2",
      "blogs/63c8472ee21a064ca1bf82b4",
      "blogs/63c847dae21a064ca1bf82bf",
      "blogs/63c8481ae21a064ca1bf82ca",
      "blogs/63c848b9e21a064ca1bf82cc",
      "blogs/63c84966e21a064ca1bf82d7",
      "blogs/63c84a04e21a064ca1bf82e2",
      "blogs/63c84a4fe21a064ca1bf82ed",
      "blogs/63c84ae8e21a064ca1bf82ef",
      "blogs/63c84b8ee21a064ca1bf82fa",
      "blogs/63c84c4fe21a064ca1bf8305",
      "blogs/63c84d26e21a064ca1bf8310",
      "blogs/63c84df2e21a064ca1bf831b",
      "blogs/63c84ea7e21a064ca1bf8326",
      "blogs/63c84ef2e21a064ca1bf8331",
      "blogs/63c84fa9e21a064ca1bf8333",
      "blogs/63c85080e21a064ca1bf833e",
      "blogs/63c85133e21a064ca1bf8349",
      "blogs/63c8564cfa395f7fd1bb44b8",
      "blogs/63c856e9fa395f7fd1bb44c3",
      "blogs/63c85789fa395f7fd1bb44ce",
      "blogs/63c85829fa395f7fd1bb44d9",
      "blogs/63c858d4fa395f7fd1bb44e4",
      "blogs/63c85980fa395f7fd1bb44ef",
      "blogs/63c85a28fa395f7fd1bb44fa",
      "blogs/63c85aa1fa395f7fd1bb4505",
      "blogs/63c85b41fa395f7fd1bb4507",
      "blogs/63c85bedfa395f7fd1bb4512",
      "blogs/63c85c96fa395f7fd1bb451d",
      "blogs/63c85d62fa395f7fd1bb4528",
      "blogs/63c85e1bfa395f7fd1bb4533",
      "blogs/63c85ec7fa395f7fd1bb453e",
      "blogs/63c85f68fa395f7fd1bb4549",
      "blogs/63c86024fa395f7fd1bb4554",
      "blogs/63c860befa395f7fd1bb455f",
      "blogs/63c86162fa395f7fd1bb456a",
      "blogs/63c86206fa395f7fd1bb4575",
      "blogs/63c862aefa395f7fd1bb4580",
      "blogs/63c9d5d441d678115b9527aa",
      "blogs/63c9d6ca4b6293c75700aa56",
      "blogs/63c9d75c4b6293c75700aa58",
      "blogs/63c9d7f24b6293c75700aa63",
      "blogs/63c9d8b44b6293c75700aa6e",
      "blogs/63c9d9794b6293c75700aa79",
      "blogs/63c9da2e4b6293c75700aa84",
      "blogs/63c9daeb4b6293c75700aa8f",
      "blogs/63c9dba84b6293c75700aa9a",
      "blogs/63c9dc6c4b6293c75700aaa5",
      "blogs/63c9dd294b6293c75700aab0",
      "blogs/63c9dde84b6293c75700aabb",
      "blogs/63c9deb04b6293c75700aac6",
      "blogs/63c9df684b6293c75700aad1",
      "blogs/63c9e0264b6293c75700aadc",
      "blogs/63c9e0e04b6293c75700aae7",
      "blogs/63c9e19c4b6293c75700aaf2",
      "blogs/63c9e25a4b6293c75700aafd",
      "blogs/63c9e3144b6293c75700ab08",
      "blogs/63c9e3d34b6293c75700ab13",
      "blogs/63c9e48e4b6293c75700ab1e",
      "blogs/63c9e5504b6293c75700ab29",
      "blogs/63c9e6134b6293c75700ab34",
      "blogs/63c9e6ca4b6293c75700ab3f",
      "blogs/63c9e7864b6293c75700ab4a",
      "blogs/63c9e8454b6293c75700ab55",
      "blogs/63c9e9004b6293c75700ab60",
      "blogs/63c9e9bd4b6293c75700ab6b",
      "blogs/63c9ea7f4b6293c75700ab76",
    ],
  },
});
