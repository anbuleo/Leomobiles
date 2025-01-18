import axios from 'axios'
import React from 'react'


const AxiosService = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}`,
    headers : {
        'Content-Type' : "application/json"
    }
})
AxiosService.interceptors.request.use(config=>{
    const token = sessionStorage.getItem('token')
    // console.log(token)
    if(token)
        config.headers.Authorization = `Bearer ${token}`

     return config
})

export default AxiosService