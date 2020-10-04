export const state = () => ({
    weatherInfo:null,
    overlay:false
  })
  
  export const mutations = {
    add(state,payload) {
      state.weatherInfo = payload
    },
    changeOverlay(state) {
      state.overlay = !state.overlay
    }
  }
  export const getters = {
        getWI: state => {
          return state.weatherInfo;
        },
        getOverlayStation:state=>{
          return state.overlay
        }
  }