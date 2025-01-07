import React from 'react'
import { useSelector } from 'react-redux'
import GooglePayButton from '@google-pay/button-react'

function Paybiller() {

    let {cart,totalprice} = useSelector(state=>state.cart)
    let {shippingAddress} = useSelector(state=>state.billing)


  return <>

        <div className="h-screen p-4">
        <h1 className='text-3xl font-bold text-center'>Billing</h1>
                <div className="flex justify-between ">
                   
                    <div className="">
                        <h1 className='text-2xl font-bold'>Customer Name :<span className='text-xl font-semibold'> {shippingAddress?.fullName} </span> </h1>
                        <h1 className='text-2xl font-bold'>Customer Address : <span className='text-xl font-semibold'>{shippingAddress?.addressLine1}  </span>  </h1>
                    </div>
                    <div className="">
                        <h1 className='text-2xl font-bold'>Customer Phone :<span className='text-xl font-semibold'> {shippingAddress?.phone} </span> </h1>
                    </div>


                </div>
                <div className="">
                    <table className='table text-center'>
                        <thead className='bg-gray-300'>
                            <tr className='text-lg font-extrabold'>
                                <th>#</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart && cart.map((e,i)=>{
                                return <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{e.productId.productName}</td>
                                    <td>{e.productId.price}</td>
                                    <td>{1}</td>
                                    <td>{Number(e.productId.price)* 1}</td>
                                </tr>
                            })}
                        </tbody>
                        <tfoot>
                            <tr className='bg-gray-200 font-bold text-lg'>
                                <td colSpan={3}>Total</td>
                               
                                <td>{cart.length}</td>
                                <td>{totalprice}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div className="flex justify-center mt-10 ">
                   
                </div>
        </div>
  
  
  </>
}

export default Paybiller