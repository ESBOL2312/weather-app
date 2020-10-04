<template >
  <v-app>
    <v-app-bar :flat="tr" class="white--text" app color="rgba(255,255,255,.0)">
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
      return hour>6 && hour<19? 'bd-day' : 'bd-night'
    }
  }
}
</script>
<style>
  .bd-night{
    background:url('~static/night.jpg')
  }
  .bd-day{
    background:url('~static/day.jpg')
  }
  .bb{
    background-size: cover;
    background-position: center center;
  }
</style>
