import React, { useEffect } from 'react'
import { AiOutlineRest } from 'react-icons/ai'
import UsegetOrderData from '../../Hooks/UsegetOrderData'
import LoadingPage from '../../pages/LoadingPage'

function ListAllSaleTable() {
    let {loading,getAllOrder,sale} = UsegetOrderData()
    useEffect(()=>{getAllOrder()},[])
    // console.log(sale)
  return <>
    <section className="border-stone-950 bg-stone-300  ">
            {loading ? <LoadingPage />:<>
                <div className=" border-orange-600 flex justify-center pt-10">
              <div className="card bg-white w-3/4 ">
              <div className="overflow-x-auto">
                <table className="table text-center">
                    <thead className='text-xl'>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>orderstatus</th>
                            <th>Total amount</th>
                            <th>payment Status</th>
                           
                            
                        </tr>
                    </thead>
                    <tbody>
                       {sale && sale.map((e,i)=>{
                        return <tr key={i}>
                            <td>
                                {i+1}
                            </td>
                            <td>{e.shippingAddress.fullName}</td>
                            <td>{e.orderStatus}</td>
                            <td>{e.totalPrice}</td>
                            <td>{e.paymentStatus}</td>
                        </tr>
                       })}
                    </tbody>
                </table>
              </div>
              
              </div>
              </div>
            </>}

              </section>
  </>
}

export default ListAllSaleTable