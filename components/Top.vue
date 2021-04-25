<template>
  <div v-cloak>
    <transition appear>
      <section id="about-me">
        <div class="py-12"></div>

        <v-container class="text-center">
          <h1 class="display-3 font-weight-bold mb-3">{{ message }}</h1>

          <br />
          <NuxtLink to="/about" style="text-decoration: none">
            <v-btn class="mx-2" dark color="black"> About me </v-btn>
          </NuxtLink>
        </v-container>

        <div class="py-12"></div>
      </section>
    </transition>
  </div>
</template>


<script>
export default {
  data() {
    return {
      message: "qqey.net",
      show: true,
    };
  },
  methods: {},
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