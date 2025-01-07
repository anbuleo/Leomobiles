import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import AxiosService from '../common/AxiosService'
import {removeIteminChart} from '../Redux/cartSlice'

function UseCartEdit() {
    // let [cartloading,setCartLoading] = useState(false)

    let dispatch = useDispatch()


    let deleCart = async(id,price)=>{

        let payload = {
            id:id,
            price:price
        }
        
        try {
            let res = await AxiosService.delete(`/sale/deletecart/${id}`)

            if(res.status == 200){
                dispatch(removeIteminChart(payload))
               
            }

            // console.log(price)
            
        } catch (error) {
            toast.error('Error')
        }
    }




  return {deleCart}
}

export default UseCartEdit