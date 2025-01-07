import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import AxiosService from '../common/AxiosService'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import {addOnetocart} from '../Redux/cartSlice'

function UseAddCart() {
 

    let [cartloading,setLoading] = useState(false)
    let [code, setCode] = useState("")
    let [message,setMessage] = useState("")
    let params = useParams()
    let dispatch = useDispatch()
const Addtocart = async(val)=>{
    setLoading(true)
    let userId = localStorage.getItem('user')
    userId = JSON.parse(userId)
    userId = userId._id
  try{
    let res = await AxiosService.post('/sale/addcart', {userId:userId,productId:val})
    // console.log(res.data?.data)
    if(res.status === 201){
      dispatch(addOnetocart(res.data?.data))
        setCode(res.status)
        setMessage(res.data.message)
    }
    toast.success(res.data.message)
  }catch(error){
        toast.error(error?.response.data.message)
  }finally{ 

    setLoading(false)
  }


}
 
 
 
 
 
 
 
 
 
 
    return {cartloading,code,message,Addtocart}

}

export default UseAddCart