<template>
  <div class="col white--text mt-7" color=rgba(255,255,255,.0)>
    <form @submit.prevent="search">
      <v-text-field class="white--text search-input" color="white" label="Serach..." v-model.trim="cityname">
      </v-text-field>
    </form>
  </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
  data(){
    return {
      overlay:false,
      cityname:''
    }
  },
  methods:{
    ...mapMutations([
      'changeOverlay'
    ]
    ),  
    async search(){
      this.changeOverlay()
      return await this.$axios.get(`weather?appid=f5c690bc43d17be713e93813c395814c&units=metric&q=${this.cityname}`)
      .then((response)=>{
        this.$store.commit('add',response.data)
        this.changeOverlay()
      })
      }
    },
}
</script>
<style>
  .search-input input,.search-input label {
    color: #fff !important;
  }
  .search-input input:-internal-autofill-selected{
    background-color: rgba(0, 0, 0, 0) !important;
  }
</style>