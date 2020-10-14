<template>
  <div>
    <SearchTop v-on:change-snackbar="snackbar = !snackbar"></SearchTop>
    <main-info class="mt-vh"
      :cityname="weatherInfo.name"
      :citytemp="weatherInfo.main.temp"
      :citytempmin="weatherInfo.main.temp_min"
      :citytempmax="weatherInfo.main.temp_max"
      :citywd="weatherInfo.weather[0].main"
      :citywi="weatherInfo.weather[0].icon"
      :citywind="weatherInfo.wind.speed"
      :cityp="weatherInfo.main.pressure"
      :countrycode="weatherInfo.sys.country"
    ></main-info>
      <v-overlay :value="overlayStation">
      <v-progress-circular
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>
    <v-snackbar
        v-model="snackbar"
        :timeout="timeout"
      >
      city not found
    </v-snackbar>
  </div>
</template>
<script>
import Search from '~/components/search.vue'
import main from '~/components/weatherinfo.vue'
import {mapGetters} from 'vuex'
export default {
  data() {
    return{
      overlay:false,
      timeout:3500,
      snackbar:false

    }
  },
  computed:{
    ...mapGetters({
      overlayStation:'getOverlayStation',
      weatherInfo:'getWI',
    })
  },
  components:{
    mainInfo:main,
    SearchTop:Search,
  },
  middleware:['def']
}
</script>
<style>
  .mt-vh{
    margin-top: 15vh;
  }
</style>
