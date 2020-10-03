export const state = () => ({
    weatherInfo:null
  })
  
  export const mutations = {
    add(state,payload) {
      state.weatherInfo = payload
    }
  }
  export const getters = {
        getWI: state => {
          return state.weatherInfo;
        }
  }