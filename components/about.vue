<template>
  <div v-cloak>
    <transition appear>
      <v-container class="mt-5">
        <v-row justify="space-around">
          <v-card width="95%">
            <v-img height="225px" src="/back-min.png">
              <v-app-bar flat color="rgba(0, 0, 0, 0)">
                <v-toolbar-title class="title white--text pl-0">
                  About me
                </v-toolbar-title>

                <v-spacer></v-spacer>
              </v-app-bar>

              <v-card-title class="white--text mt-0">
                <v-progress-circular
                  v-if="posts == 'online'"
                  :rotate="-90"
                  :size="120"
                  :width="5"
                  :value="value"
                  color="white"
                >
                  <v-avatar size="100">
                    <img
                      alt="user"
                      src="https://avatars.githubusercontent.com/u/26848713?s=460&u=b5c630322f32d86c35ec2a62469f36502755d83c&v=4"
                    />
                  </v-avatar>
                </v-progress-circular>
                <v-progress-circular
                  v-else-if="posts == 'dnd'"
                  :rotate="-90"
                  :size="120"
                  :width="5"
                  :value="value"
                  color="red"
                >
                  <v-avatar size="100">
                    <img
                      alt="user"
                      src="https://avatars.githubusercontent.com/u/26848713?s=460&u=b5c630322f32d86c35ec2a62469f36502755d83c&v=4"
                    />
                  </v-avatar>
                </v-progress-circular>
                <v-progress-circular
                  v-else-if="posts == 'offline'"
                  :rotate="-90"
                  :size="120"
                  :width="5"
                  :value="value"
                  color="#313131"
                >
                  <v-avatar size="100">
                    <img
                      alt="user"
                      src="https://avatars.githubusercontent.com/u/26848713?s=460&u=b5c630322f32d86c35ec2a62469f36502755d83c&v=4"
                    />
                  </v-avatar>
                </v-progress-circular>
                <v-progress-circular
                  v-else
                  :rotate="-90"
                  :size="120"
                  :width="5"
                  :value="value"
                  color="white"
                >
                  <v-avatar size="100">
                    <img
                      alt="user"
                      src="https://avatars.githubusercontent.com/u/26848713?s=460&u=b5c630322f32d86c35ec2a62469f36502755d83c&v=4"
                    />
                  </v-avatar>
                </v-progress-circular>
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
              <v-card-text class="pt-15 pb-5 d-flex justify-space-around">
                <v-btn
                  v-for="item in items"
                  :key="item.icon"
                  class="pt-0 mx-6"
                  icon
                  color="#4a4a4a"
                  :href="item.url"
                >
                  <v-icon class="tmp" :style="item.vlue" size="60px">
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
import axios from "axios";
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
      interval: {},
      value: 0,
      posts: [],
    };
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  mounted() {
    this.interval = setInterval(() => {
      if (this.value === 100) {
        return (this.value = 100);
      }
      this.value += 100;
    }, 40);
    axios
      .get("https://discord.com/api/guilds/756169016741068974/widget.json")
      .then((response) => (this.posts = response.data.members[0].status));
    console.log();
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

.tmp {
  background-color: white;
  border-radius: 3rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  display: inline-block;
  letter-spacing: 0.1rem;
  padding: 2.1rem 2.1rem;
  text-decoration: none;
  transition: 1s;
}

.tmp:hover {
  background-color: rgb(219, 219, 219);
}

.tetete {
  color: white;
}
</style>
