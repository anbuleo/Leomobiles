import React, { useState } from 'react'
import AxiosService from '../common/AxiosService'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import {totalPrice,addAllinCart} from '../Redux/cartSlice'

function UseCheckout() {
    let [cartData,setCartData] = useState([])
    let [sumqty,setSumqty] = useState(0)
    let dispatch = useDispatch()
   
    const getCart = async (id) => {
        let user =await localStorage.getItem('user')
        user = JSON.parse(user)
        let userId = user._id
        // console.log(userId)
        
        try {
          if(userId?.length>0){
            const res = await AxiosService.put('/sale/getcartbyid',{id:userId})
            
if(res.status==200){
    let values = res.data?.data
    if(values?.length>0){
       
        setCartData((prevData) => {



            const updatedData = [...prevData, ...values];
            

            // Deduplicate using reduce
            return updatedData?.reduce((unique, item) => {
                if (!unique.some((el) => el._id === item._id)) {
                    setSumqty((pre)=>pre + Number(item.productId.price))
                    unique.push(item);
                }
                return unique;
            }, []);
           
          
        })
        dispatch(addAllinCart(res.data?.data))
        dispatch(totalPrice())
        // setSumqty((pre)=>pre + cartData.reduce((acc,cur)=>acc + Number(cur.productId.price),0 ))
    }
    toast.success(res.data?.message)
}   

                // console.log(cartData)
          }
        } catch (error) {
            console.log(error)
        }
    }







  return {getCart,cartData,sumqty}
}

export default UseCheckout