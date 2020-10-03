
export default async function({$axios,store}){
    return await $axios.get('/weather?appid=f5c690bc43d17be713e93813c395814c&units=metric&q=astana').then((response)=>{
        store.commit('add',response.data)
    })
}