import React, { useState } from 'react'
import AxiosService from '../common/AxiosService'

function UseGetProductByParams() {
    let [data , setData] = useState(null)
    let [code, setCode] = useState('')
    let [message, setMessage] = useState('')
    let [loadingHome, setLoading]= useState(false)

    const getDataById = async(id)=>{
        setLoading(true)
        try {
            let res = await AxiosService.get(`/product/getproductbyid/${id}`)
            // console.log(res)
            if(res.status==200) {
                
                setData(res.data.product)
            }
            setCode(res.code)
            setMessage(res?.data.message)
        } catch (error) {
            setMessage(error?.response.data.message)
            setCode(error?.response.data.statusCode)
            console.log(error)
        } finally {
            setLoading(false)
        }
    }
  return {code,data,getDataById,loadingHome}
}

export default UseGetProductByParams