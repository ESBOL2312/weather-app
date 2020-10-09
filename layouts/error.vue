<template>
    <div>
      
      <img src="~static/nf.jpg" width="100%" alt="">
      <h1 v-if="error.statusCode === 404">{{ pageNotFound }}</h1>
      <h1 v-else>{{ otherError }}</h1>
      <v-btn to="/">
        home
      </v-btn>
    </div>
</template>

<script>
export default {
  layout: "er",
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      pageNotFound: "404 Not Found",
      otherError: "An error occurred"
    };
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title
    };
  }
};
</script>

