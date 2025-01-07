import React, { useState } from 'react'
import AxiosService from '../common/AxiosService'
import { useParams } from 'react-router-dom'

function UseEditProduct() {
    let [loading,setLoading] = useState(false)
    let [code, setCode] = useState("")
    let [message,setMessage] = useState("")
    let params = useParams()
const EditProduct = async(val)=>{
    
    try {
        setLoading(true)
        let res = AxiosService.put(`/editbyid/${params.id}`,val)
        console.log(res)
    } catch (error) {
        setCode(error?.response.data.statusCode)
        setMessage(error?.response.data.message)
    } finally{
        setLoading(false)
    }
}
  return {loading,code,message,EditProduct}
}

export default UseEditProduct