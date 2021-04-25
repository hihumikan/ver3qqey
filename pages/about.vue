
<template>
  <div v-cloak>
    <transition appear>
      <v-container class="mt-4">
        <v-row justify="space-around">
          <v-card width="90%">
            <v-img height="200px" src="/back-min.png">
              <v-app-bar flat color="rgba(0, 0, 0, 0)">
                <v-toolbar-title class="title white--text pl-0">
                  About me
                </v-toolbar-title>

                <v-spacer></v-spacer>
                <Nuxt-link to="/" style="text-decoration: none">
                  <v-btn color="white" icon>
                    <v-icon>mdi-home</v-icon>
                  </v-btn>
                </Nuxt-link>
              </v-app-bar>

              <v-card-title class="white--text mt-4">
                <v-avatar size="90">
                  <img
                    alt="user"
                    src="https://avatars.githubusercontent.com/u/26848713?s=460&u=b5c630322f32d86c35ec2a62469f36502755d83c&v=4"
                  />
                </v-avatar>
                <p class="ml-7 mt-5">hihumikan</p>
              </v-card-title>
            </v-img>

            <v-card-text>
              <h3 class="font-weight-bold ml-8 mb-2">
                フロントエンドとかバックエンド、インフラのあれこれやってます。
              </h3>
              <h3 class="font-weight-bold ml-8 mb-2">
                ご連絡はTwitterまでお願いします。
              </h3>
              <v-card
                class="d-flex justify-space-around mb-6 mt-8"
                :color="white"
                flat
                tile
              >
                <div
                  v-for="item in items"
                  :key="item"
                  class="pa-2"
                  outlined
                  tile
                >
                  <v-btn color="black" icon>
                    <v-icon size="50px">{{ item.icon }}</v-icon>
                  </v-btn>
                </div>
              </v-card>
            </v-card-text>
          </v-card>
        </v-row>
      </v-container>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: "mdi-twitter",
          url: "https://twitter.com/",
        },
        {
          icon: "mdi-github",
          url: "https://github.com/",
        },
        {
          icon: "mdi-telegram",
          url: "",
        },
      ],
    };
  },
  methods: {
    twitter: function () {
      window.open("https://twitter.com/mikan_54951");
    },
    github: function () {
      window.open("https://github.com/hihumikan");
    },
    telegram: function () {
      window.open("https://t.me/yata_touka");
    },
  },
};
</script>


<style>
.v-enter-active,
.v-leave-active {
  transition: 0.5s ease-out;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
</style>