import axios from 'axios'
import jsCookie from 'js-cookie'
import store from '@/store.js'
const api_url = process.env.VUE_APP_API_URL
const instance = axios.create({
    baseURL: api_url,
    timeout: 3000
})
instance.interceptors.request.use(config=>{
    const token = jsCookie.get('token')
    console.log(config.headers)
    if(token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    store.commit('startLoad')
    return config
},err=>{
    return Promise.reject(err)
})
instance.interceptors.response.use(res=>{
    console.log(res)
    store.commit('endLoad')
    return res
},err=>{
    console.log(err.response)
    store.commit('endLoad')
    return Promise.reject(err)
})
export default instance
