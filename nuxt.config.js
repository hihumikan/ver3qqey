import colors from "vuetify/es5/util/colors";

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - Homepage",
    title: "qqey.net",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "hihumikanのホームページです。"
      },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@mikan_54951" },
      { name: "twitter:creator", content: "@mikan_54951" },
      { hid: "og:site_name", property: "og:site_name", content: "qqey.net" },
      { hid: "og:type", property: "og:type", content: "website" },
      { hid: "og:url", property: "og:url", content: "https://qqey.net/" },
      { hid: "og:title", property: "og:title", content: "qqey.net" },
      {
        hid: "og:description",
        property: "og:description",
        content: "hihumikanのホームページです"
      },
      {
        hid: "og:image",
        property: "og:image",
        content:
          "https://avatars.githubusercontent.com/u/26848713?s=460&u=b5c630322f32d86c35ec2a62469f36502755d83c&v=4"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
    "@nuxtjs/pwa"
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    "@nuxtjs/yandex-metrika"
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},
  yandexMetrika: {
    id: "76509142"
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: "qqey.net",
      lang: "ja",
      short_name: "qqey.net",
      title: "qqey.net",
      "og:title": "qqey.net",
      description: "hihumikanのホームページです。",
      "og:description": "hihumikanのホームページです。",
      theme_color: "#212121",
      background_color: "#212121"
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
