<template>
  <div>
    <main-info class="mt-vh"
      :cityname="weatherInfo.name"
      :citytemp="weatherInfo.main.temp"
      :citytempmin="weatherInfo.main.temp_min"
      :citytempmax="weatherInfo.main.temp_max"
      :citywd="weatherInfo.weather[0].main"
      :citywi="weatherInfo.weather[0].icon"
      :citywind="weatherInfo.wind.speed"
      :cityp="weatherInfo.main.pressure"
    ></main-info>
      <v-overlay :value="overlay">
      <v-progress-circular
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>
    <input :value="cin" placeholder="a">
    {{cin}}
  </div>
</template>
 
<script>
import main from '~/components/weatherinfo.vue'
import {mapGetters} from 'vuex'
export default {
  data() {
    return{
      cin:'',
      overlay:false
    }
  },
  computed:{
    ...mapGetters({
      weatherInfo:'getWI'
    })
  },
  components:{
    mainInfo:main
  },
  middleware:['def']
}
</script>
<style>
  .mt-vh{
    margin-top: 15vh;
  }
</style>
