import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import UsegetOrderData from '../Hooks/UsegetOrderData'
import { useNavigate, useParams } from 'react-router-dom'
import LoadingPage from '../pages/LoadingPage'
import { BiClipboard } from "react-icons/bi";
function OrderPage() {
 let {getOrder,loading,orderData} = UsegetOrderData()

 let params = useParams()
  // console.log(orderData)
 useEffect(()=>{ getOrder(params.id)},[])

 let navigate = useNavigate()
 let idCopyfunction = async() => {
  try {
    let id = orderData._id
    await navigator.clipboard.writeText(id)
    toast.success('Id copied')
  } catch (error) {
    toast.error('error in copy')
  }
 }

    
  return <>
  <div className="flex items-center justify-center">
   {loading ? <LoadingPage /> :<>
    <div className="w-4/6 card bg-orange-100   card-bordered p-2 h-96">
          <div className="card-title mx-auto">
            <p className="text-2xl">Leo mobiles</p>
          </div>
          <div className="text-xl pt-5 pl-4 underline">
            Hey! {orderData?.shippingAddress?.fullName}
          </div>
          <div className="pt-2  flex items-center gap-2">
           <p className="pl-10"> OrderId : {orderData._id}  </p> <BiClipboard className='cursor-pointer' onClick={()=>idCopyfunction()}/>
          </div>
         <div className="text-center my-auto  mx-auto">
         <div className=" ">
            <p className=" bg-green-600 w-fit text-center p-4 rounded-lg text-green-50"> Your order is confirmed!</p>
           
          </div>
          <div className="pt-5">
          <p className="btn btn-outline btn-warning " onClick={()=>navigate('/')}>go back to home  </p>
          </div>
         </div>

    </div>
   </>}
  </div>
  </>
}

export default OrderPage