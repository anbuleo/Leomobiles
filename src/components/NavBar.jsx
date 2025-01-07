import React, { useEffect, useRef, useState } from 'react'
import { AiFillDelete } from "react-icons/ai";
import {GiCardPlay} from 'react-icons/gi'
import image from '../assets/Logo.png'
import UseLogOut from '../Hooks/UseLogOut'
import UseCheckout from '../Hooks/UseCheckout'
import { useSelector } from 'react-redux'
import UseCartEdit from '../Hooks/UseCartEdit';
import { useNavigate ,useParams} from 'react-router-dom';
import UseAdminCheck from '../Hooks/UseAdminCheck'



function NavBar() {
  let [input,setInput] = useState('')
  let [result,setResult] = useState('')
  let [user,setUser ] = useState('')
  let {loading,logOut} = UseLogOut()
  let {getCart,cartData,sumqty} = UseCheckout()
  let {totalprice,cart} =useSelector((state)=>state.cart)
  let {product} =useSelector((state)=>state.product)
  let {handleAdminCheck} = UseAdminCheck()
  // console.log(cart)

  let navigate = useNavigate()


  // let {id} = useParams
  

  let {deleCart} = UseCartEdit()
  // console.log(totalprice)
  
  

 
  

  
  useEffect(()=>{
    let i = localStorage.getItem('user')
    JSON.parse(i)
   
        setUser(i?.role)
        
        // console.log(user)
  },[user])
  // console.log(cartData)
  const handleChangeSearch = (val)=>{
    setInput(val);
    let res = product?.filter((a)=>{
      return val && a && a.productName && a.productName.toLowerCase().includes(val)
    })
    
    setResult(res)
  }
 
  return <>
  <div className="navbar bg-orange-400 max-h-6 ">
  <div className="flex-1">
  <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li onClick={()=>navigate('/home')}>Homepage</li>
        <li>{user&&user=='admin'?'Create Product':''}</li>
        <li>About</li>
      </ul>
    </div>
    <p className="btn btn-ghost text-xl "><GiCardPlay /><span className='text-yellow-200 text-2xl '>Leo</span><span className='text-blue-800 text-2xl'>Mobiles</span></p>
  </div>
  <div className="flex-2">
  <div className="px-4 relative">
     <div className=""tabIndex={0} role='button'> <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" value={input} onChange={(e)=>handleChangeSearch(e.target.value)}/></div>
     
    </div>
  </div>
  <div className="flex-none ">
    {/* You can open the modal using document.getElementById('ID').showModal() method */}
<div className="btn bg-transparent" onClick={()=>{
  document.getElementById('my_modal_3').showModal()
  let id =localStorage.getItem('user')

  getCart( id._id)
  
  
  }}>      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="badge badge-sm indicator-item">{cart?.length}</span>
        </div>
      </div>
 </div>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Your cart</h3>
    

   <table className='table'>
    <thead>
      
        <tr>
          <th>#</th>
          <th>ProductName</th>
          <th>pcs</th>
          <th>Price ₹</th>
          <th>Edit</th>
         
        </tr>
        
      
    </thead>
    <tbody>
      {cart.length >0 ? <>{cart.map((e,i)=>{ 
        return <tr key={i}>
          <td> {i+1}</td>
          <td>{e.productId.price}</td>
          <td >1</td>
          <td>{e.productId.sellingPrice}</td>
          <td  className='text-red-700 text-2xl text-right' ><AiFillDelete onClick={()=>deleCart(e._id,e.productId?.sellingPrice)} /></td>
          
          
        </tr>
       })}</>:<></>}
       <tr className='bg-yellow-300'>
        <td colSpan={2}>Total</td>

        <td>{cart?.length}</td>

       
        <td className='font-extrabold' colSpan={2} >{totalprice}</td>
        <td></td>
       </tr>
    </tbody>
   </table>
    <p className="py-4"></p>
    <div className="">
      <span className="btn btn-outline btn-warning w-full" onClick={()=>cart?.length>0 ? navigate('/billing'):''}>check Out</span>
    </div>
  </div>
</dialog>
    
    
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-5">
       
        <li onClick={()=>handleAdminCheck()}>Admin</li>
        
        <li className='btn btn-outline btn-error' onClick={()=>logOut()}>{loading ?<span className="loading loading-dots loading-md"></span>:'sign out'}</li>
      </ul>
    </div>
  </div>
</div>
{
 result?.length >0 && <div className="max-h-56 overflow-scroll z-20 w-1/4 bg-orange-400 absolute right-14 bordered rounded-lg">
  <div className="p-2">
        {result.length > 0 && result.map((e,i)=>{
          return <div key={i} className='cursor-pointer hover:bg-orange-100' onClick={()=>{
            navigate(`/search/${e._id}`)
            setResult('')
            setInput('')
          }}> {e.productName}  </div>
        })}
  </div>
</div> 
}
    
  </>
}

export default NavBar