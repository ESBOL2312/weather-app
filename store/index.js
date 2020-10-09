export const state = () => ({
    weatherInfo:null,
    overlay:false,
    snackbar:false,
  })
  
  export const mutations = {
    add(state,payload) {
      state.weatherInfo = payload
    },
    changeOverlay(state) {
      state.overlay = !state.overlay
    },
    changeSnackbar(state) {
      state.snackbar = !state.snackbar
    }
  }
  export const getters = {
        getWI: state => {
          return state.weatherInfo;
        },
        getOverlayStation:state=>{
          return state.overlay
        },
        getSnackbarStation:state=>{
          return state.snackbar
        }
  }