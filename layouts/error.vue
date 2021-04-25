<template>
  <v-app dark>
    <center>
      <h1 v-if="error.statusCode === 404">
        {{ pageNotFound }}
        <p>{{ value }}</p>
      </h1>
      <h1 v-else>
        {{ otherError }}
      </h1>
      <NuxtLink to="/"> Top page </NuxtLink>
    </center>
  </v-app>
</template>

<script>
export default {
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: "404 Not Found",
      value: "ページが見つかりませんでした🥺",
      otherError: "An error occurred",
    };
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title,
    };
  },
};
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
