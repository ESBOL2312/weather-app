<template >
  <v-app>
    <v-app-bar :flat="tr"  class="white--text" app color="rgba(255,255,255,0)">
    <SearchTop></SearchTop>
    </v-app-bar>
  <!-- Sizes your content based upon application components -->
  <v-main class="bb" :class="getDayNight()">
    <!-- Provides the application the proper gutter -->
    <v-container fluid>
      <Nuxt />
    </v-container>
  </v-main>
  <v-footer app>
    <!-- -->
  </v-footer>
</v-app>  
</template>
<script>
import Search from '~/components/search.vue'
export default {
  data(){
    return{
      tr:true,
    }
  },
  components:{
    SearchTop:Search,
  },
  methods:{
    getDayNight(){
      const today = new Date();
      const hour = today.getHours();
      return hour>6 && hour<20? 'bd-day' : 'bd-night'
    }
  }
}
</script>
<style>
  .bd-day{
    background:url('~static/4.jpeg')
  }
  .bd-night{
    background:url('~static/4.jpeg')
  }
  .bb{
    background-size: cover;
    background-position: center center;
  }
</style>
