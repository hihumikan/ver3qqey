
<template>
  <div v-cloak>
    <transition appear>
      <v-container class="mt-4">
        <v-row justify="space-around">
          <v-card width="90%">
            <v-img height="200px" src="/back-min.png">
              <v-app-bar flat color="rgba(0, 0, 0, 0)">
                <v-toolbar-title class="title white--text pl-0">
                  About
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
              <h2 class="heading08"><span>About me</span></h2>
              <h3 class="font-weight-bold ml-8 mb-2">
                フロントエンドとかバックエンド、インフラのあれこれやってます。
              </h3>
              <h2 class="heading08"><span>Skills</span></h2>
              <h3 class="font-weight-bold ml-8 mb-2">
                Vue.js / Nuxt.js / JavaScript / Ruby on Rails / C / NetWork /
                etc...
              </h3>
              <h2 class="heading08"><span>Products</span></h2>

              <h3 class="font-weight-bold ml-8 mb-2">
                <a href="https://github.com/hihumikan">GitHub</a>をご覧下さい。
              </h3>

              <h2 class="heading08"><span>Contact / Accounts</span></h2>
              <h3 class="font-weight-bold ml-8 mb-2">
                ご連絡はTwitterかTelegramまでお願いします。
              </h3>
              <v-card-text class="pt-5 pb-5 d-flex justify-space-around">
                <v-btn
                  v-for="item in items"
                  :key="item"
                  class="pt-0 mx-6"
                  icon
                  color="#4a4a4a"
                  :href="item.url"
                >
                  <v-icon :style="item.vlue" size="60px">
                    {{ item.icon }}
                  </v-icon>
                </v-btn>
              </v-card-text>
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
          url: "https://twitter.com/mikan_54951",
          vlue: "color:#2e2e2e",
        },
        {
          icon: "mdi-github",
          url: "https://github.com/hihumikan",
          vlue: "color:#2e2e2e",
        },
        {
          icon: "mdi-telegram",
          url: "https://t.me/yata_touka",
          vlue: "color:#2e2e2e",
        },
      ],
    };
  },
};
</script>


<style>
.heading08 {
  font-size: 26px;
}
h2 {
  margin-bottom: 10px;
  margin-top: 20px;
}

.heading08 span {
  display: flex;
  align-items: center;
  color: #202020;
  font-size: 18px;
  text-transform: uppercase;
}

.heading08 span::before {
  content: "";
  display: inline-block;
  margin-right: 20px;
  width: 40px;
  height: 1px;
  background-color: #000000;
}
.v-enter-active,
.v-leave-active {
  transition: 0.5s ease-out;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
</style>