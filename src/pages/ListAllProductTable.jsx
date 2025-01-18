import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AiFillEdit, AiOutlineRest } from "react-icons/ai";
import { useSelector,useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import AxiosService from '../common/AxiosService';
import {deleteProductRedux} from '../Redux/ProductSlice'

function ListAllProductTable() {

    let {product} = useSelector(state=>state.product)


    let navigate = useNavigate()

    let dispatch = useDispatch()
    // console.log(product)

    const handleDel = async(id)=>{
       try {
        let res = await AxiosService.delete(`/product/delete/${id}`)
        if(res.status == 200){
            toast.success('Product deleted')
            dispatch(deleteProductRedux(id))

        }
        
       } catch (error) {
        toast.error('error occurr')
       }
    }

    
  return <>
   <section className="border-stone-950 bg-stone-300  ">
        <div className=" border-orange-600 flex justify-center pt-10">
          <div className="card bg-white w-3/4 ">
          <div className="overflow-x-auto">
            <table className="table text-center">
                <thead className='text-xl'>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>price</th>
                        <th>SP</th>
                       
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {product?.length >0 && product?.map((e,i)=>{
                        return <tr className='' key={i}>
                        <td>{i+1}</td>
                        <td>{e.productName}</td>
                        <td>{e.productType.name}</td>
                        <td>{e.price}</td>
                        <td>{e.sellingPrice}</td>
                       
                        <td>
                            <div className="flex justify-evenly ">
                                <div className="btn btn-success btn-outline" onClick={()=>navigate(`/editproduct/${e._id}`)}><AiFillEdit /></div>
                                <div className="btn btn-error btn-outline" ><AiOutlineRest onClick={()=>handleDel(e._id)} /></div>
                            </div>
                        </td>
                    </tr>
                    })
                    }
                </tbody>
            </table>
          </div>
          
          </div>
          </div>
          </section>
  
  </>
}

export default ListAllProductTable