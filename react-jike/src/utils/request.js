//axios封装处理
import axios from "axios"
import { getToken } from "./token"
import { removeToken } from "./token"
import router from "@/router"
//1.根域名配置
//2.超时时间
const request = axios.create({
    baseURL: 'http://geek.itheima.net/v1_0',
    timeout: 5000
})

//3.请求拦截器 / 响应拦截器

request.interceptors.request.use((config) => {
    const token = getToken()
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, (error) => {
    return Promise.reject(error)
})

request.interceptors.response.use((response) => {
    return response.data
}, (error) => {
    //监控401 token失效
    //console.dir(error)
    if(error.response.status === 401) {
        removeToken()
        router.navigate('/login')
        window.location.reload()
    }
    return Promise.reject(error)
})

export {request}