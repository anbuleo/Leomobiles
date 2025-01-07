import React, { useState } from 'react'
import AxiosService from '../common/AxiosService'
import { useNavigate } from 'react-router-dom'
import {addAllProduct} from '../Redux/ProductSlice'
import { useDispatch } from 'react-redux'
import {addAllinCart} from '../Redux/cartSlice'
 
function UseSignIn() {

    const[loading,setLoading] = useState(false)
    const[message, setMessage] = useState('')
    const [code, setCode] = useState('')
   
   
    let dispatch = useDispatch()
    const signIn = async(val)=>{
       
        try {
           
            setLoading(true)
            let res = await AxiosService.post('/user/signin',val)
            // let valdate = await AxiosService.get('/product/val')
           
            // console.log(res)
            if(res.status ==200){
                
            //  console.log(res)
                setCode(res.status)
              let userId = res.data?.rest._id
                // console.log(res.data?.rest._id)
                setMessage('login Success')
                localStorage.setItem('token',res.data?.token)
                localStorage.setItem('user',JSON.stringify(res.data?.rest))

                let mobileData = await AxiosService.get('/product/getallproduct')
                const res2= await AxiosService.put('/sale/getcartbyid',{id:userId})
                
                if(mobileData.status === 200){
                    dispatch(addAllProduct(mobileData.data?.products))
                 }
                
                if(res2.status === 200){
                    dispatch(addAllinCart(res2.data?.data))
                 }

                
                return res.status
                
            }else {
                setCode(res?.status)
               
                setMessage('Login Success')
            }
            
        } catch (error) {
            setMessage(error?.response?.data?.message)
            setCode(error?.response?.data?.statusCode)
            console.log(error)
        } finally {
            setLoading(false)
        }
    }
  return {loading,code,message,signIn}
}

export default UseSignIn