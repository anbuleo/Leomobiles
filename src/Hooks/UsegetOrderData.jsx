import React, { useState } from 'react'
import AxiosService from '../common/AxiosService'
import { toast } from 'react-toastify'

function UsegetOrderData() {
    let [orderData,setOrderData] = useState([])
    let [sale,setSale] = useState([])
    let [ loading,setLoading] = useState(false)

    let getOrder = async(id)=>{
        try {
            setLoading(true)
            let res = await AxiosService.get(`/sale/salebyid/${id}`)

            if(res.status===200){
                setOrderData(res.data.order)
            }
            
        } catch (error) {
            toast.error('error in order data Fetch')
        }finally{
            setLoading(false)
        }
    }
    let getAllOrder = async()=>{
        try {
            setLoading(true)
            let res = await AxiosService.get(`/sale/sold`)

            if(res.status===200){
                setSale(res.data.order)
            }
            
        } catch (error) {
            toast.error('error in sale data Fetch')
        }finally{
            setLoading(false)
        }
    }


  return {loading,orderData,getOrder,getAllOrder,sale}
  
}

export default UsegetOrderData