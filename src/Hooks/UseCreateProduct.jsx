import React, { useState } from 'react'
import AxiosService from '../common/AxiosService'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import {useNavigate } from  'react-router-dom'
import { addAllProduct } from '../Redux/ProductSlice'

function UseCreateProduct() {

    let [code,setCode] = useState('')
    let [message, setMessage] = useState('')
    let [loading, setLoading]= useState(false)
    let dispatch=   useDispatch()

    let navigate = useNavigate()
    const createProduct = async(val)=>{
        setLoading(true)
        try {
             
            let res = await AxiosService.post('/product/createproduct',val)
            let mobileData = await AxiosService.get('/product/getallproduct')
            if(mobileData.status === 200){
                               dispatch(addAllProduct(mobileData.data?.products))
                            }
                            
                setCode(res.status)
                setMessage(res?.data.message)

                if(res.status === 201){
                    toast.success('product created success')
                    navigate('/home')
                }
           
            
        } catch (error) {
            setMessage(error?.response)
            setCode(error?.response?.data?.statusCode)
            console.log(error)
            // console.log(error.response)
        } finally{
            setLoading(false)
        }
    }




    
  return {code,loading,message,createProduct}
}

export default UseCreateProduct