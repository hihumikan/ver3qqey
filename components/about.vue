
<template>
  <div v-cloak>
    <transition appear>
      <v-container class="mt-4">
        <v-row justify="space-around">
          <v-card width="90%">
            <v-img height="200px" src="/back-min2.png">
              <v-app-bar flat color="rgba(0, 0, 0, 0)">
                <v-toolbar-title class="title white--text pl-0">
                  About me
                </v-toolbar-title>

                <v-spacer></v-spacer>
              </v-app-bar>

              <v-card-title class="white--text mt-4">
                <v-avatar size="100">
                  <img
                    alt="user"
                    rel="preload"
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
                Vue.js / Nuxt.js / JavaScript / C
              </h3>

              <h2 class="heading08"><span>Contact / Accounts</span></h2>
              <h3 class="font-weight-bold ml-8 mb-2">Twitterに居ます</h3>
              <v-card-text class="pt-5 pb-5 d-flex justify-space-around">
                <v-btn
                  v-for="item in items"
                  :key="item.icon"
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
          icon: "mdi-post-outline",
          url: "https://blog.qqey.net",
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