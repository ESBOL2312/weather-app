<template >
  <v-app class="bb">
    <v-app-bar class="white--text" :outlined="tr" app color="rgba(255,255,255,0)">
    <SearchTop></SearchTop>
  </v-app-bar>

  <!-- Sizes your content based upon application components -->
  <v-main>

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
  }
}
</script>
<style scoped>
  .bb{
    background: url('~static/1.png');
    background-size: cover;
    background-position: center center;
  }
</style>
