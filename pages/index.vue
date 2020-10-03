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
  </div>
</template>
 
<script>
import main from '~/components/weatherinfo.vue'
import {mapGetters} from 'vuex'
export default {
  data() {
    return{

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
    margin-top: 16vh;
  }
</style>
