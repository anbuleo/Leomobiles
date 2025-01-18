import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AxiosService from '../common/AxiosService'

import { useRazorpay, RazorpayOrderOptions } from "react-razorpay";
import { toast } from 'react-toastify';
import {deleteAlinCart} from '../Redux/cartSlice'
import { useNavigate } from 'react-router-dom';

function UsePay() {
  const { error, isLoading, Razorpay } = useRazorpay();
  let dispatch = useDispatch()

  let {cart,totalprice} = useSelector(state=>state.cart)
  let {shippingAddress} = useSelector(state=>state.billing)

  let userId = cart[0]?.userId._id
  let navigate = useNavigate()
  // console.log(userId,totalprice)

const handlePay = async(e)=>{
  try {
    e.preventDefault

    let res = await AxiosService.post('/sale/paymentsale',{totalprice,shippingAddress,userId})
    const {orderId,amount:orderAmount,saleId} = res.data

    const options   = {
      key: `${import.meta.env.VITE_RAZORPAY_KEY_ID}`, // Replace with your Razorpay key_id
      amount: orderAmount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: 'INR',
      name: 'Leo mobiles',
      description: 'Leo is demo brand',
      order_id: orderId, // This is the order_id created in the backend
      handler: async (response) => {
        const paymentData = {
          orderId: response.razorpay_order_id,
          paymentId: response.razorpay_payment_id,
          signature: response.razorpay_signature,
          amount: orderAmount,
          orderItems: cart,
          userId: userId,
          userShipping : shippingAddress,
          saleId:saleId

        }
        const api = await AxiosService.put('/sale/paymentsuccess',paymentData)
        // console.log(api);
        
        if(api.status ==201){
          toast.success('your order is palced')
          let clear = await AxiosService.delete(`/sale/deleteCarts/${userId}`)
          dispatch(deleteAlinCart())
          navigate(`/orderstatus/${api.data?.sale._id}`)
          // console.log(clear);
          
        }
        
      }, // Your success URL
      prefill: {
        name: 'anbu',
        email: 'anbuliyon@gmail.com',
        contact: '90003241548'
      },
      theme: {
        color: '#F37254'
      },
    };

    const rzp = new Razorpay(options)
    rzp.open()
  } catch (error) {
    console.log(error)
  }

}

        




  return {handlePay}



}

export default UsePay