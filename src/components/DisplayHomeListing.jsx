import React, { useEffect } from 'react'
import {BsCheck2All, BsChevronLeft, BsChevronRight} from "react-icons/bs"
import apple from '../img/applebrandlogo.png'
import oppo from '../img/brandlogooppo.png'
import  samsung from '../img/brandlogosamsung.png'
import mi from '../img/brandpngmi.png'
import vivo from '../img/brandpngvivo.png'
import oneplus from '../img/oneplusbrandlogo.png'
import realme from '../img/realmebrandlogo.png'
import {useNavigate} from 'react-router-dom'
import UseSignIn from '../Hooks/UseSignIn'
import UseHomepagedisplay from '../Hooks/UseHomepagedisplay'
import LoadingPage from '../pages/LoadingPage'
import UseAddCart from '../Hooks/UseAddCart'
import { toast } from 'react-toastify'

function DisplayHomeListing() {
  let logo = [apple,oppo,samsung,mi,vivo,oneplus,realme]
  let {cartloading,code,message,Addtocart} = UseAddCart()
  let {mobile,smartWatch,speaker,headphone,getData,loading} =UseHomepagedisplay()
  // console.log(smartWatch)
  useEffect(()=>{getData()},[])

  let navigate = useNavigate()

  // console.log(mobile)

  const handleAddcart =async(e,id)=>{
    e.preventDefault()
    
    try {
      await Addtocart(id)
      
    } catch (error) {
      toast.error(error?.response?.data.message)
    }
  }
  return <>
  {loading ?<LoadingPage/>:<section  className="p-4 bg-slate-200 ">
    <h1 className="text-3xl font-bold">Best Mobile Phones</h1>
    <div  className="p-2 ">
    <div className="flex overflow-x-auto space-x-4 p-4">
        {mobile&&mobile.map((e,i)=>{
          if(i<6 && e.productType.name =="mobile"){
          return  <div className="card bg-base-100 w-4/12 shadow-xl max-h-fit" onClick={()=>navigate(`/search/${e._id}`)}  key={i}>
            <figure>
              <img
                src={e.productImage}
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{e.productName}</h2>
              <p>{e.description}<br/><b>Rs .{e.sellingPrice}</b></p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary" onClick={(s)=>handleAddcart(s,e._id)}> Add to cart </button>
              </div>
            </div>
                      </div>
          }
     
        })}
         </div>
    </div>
    <div className=" flex flex-row justify-between flex-wrap overflow-x-scroll items-center ">

      {logo && logo.map((e,i)=>{
        return   <div className=" flex-wrap     px-2" key={i}      >
        <div className="w-24 "><img src={e}         alt="" className=""/></div>
    </div>
      })}
        
    </div>
    <div className="p-2">
        <div className="flex justify-between"><h1 className="text-3xl">HeadPhones</h1> 
        <div className="">
        <p className="my-auto px-2  "><span className="p-2 text-blue-800 text-xl cursor-pointer hover:text-blue-500"> see all</span><span className="btn"><BsChevronLeft/></span>{" "}<span className="btn"><BsChevronRight/></span> </p>
        </div>
        </div>
        <div className="flex overflow-x-auto space-x-4 p-4">
        {headphone&&headphone.map((e,i)=>{
          if( e.productType.name =="headphone" && i  <5){
          return  <div className="card bg-base-100 w-4/12 shadow-xl max-h-fit"  onClick={()=>navigate(`/search/${e._id}`)}   key={i}>
            <figure>
              <img
                src={e.productImage}
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{e.productName}</h2>
              <p>{e.description}<br/><b>Rs .{e.sellingPrice}</b></p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary" onClick={(s)=>handleAddcart(s,e._id)}> Add to cart </button>
              </div>
            </div>
                      </div>
          }
     
        })}
         </div>
    </div>
    <div className="p-2">
        <div className="flex justify-between"><h1 className="text-3xl">smart watch</h1> 
        <div className="">
        <p className="my-auto px-2  "><span className="p-2 text-blue-800 text-xl cursor-pointer hover:text-blue-500"> see all</span><span className="btn"><BsChevronLeft/></span>{" "}<span className="btn"><BsChevronRight/></span> </p>
        </div>
        </div>
        <div className="flex overflow-x-auto space-x-4 p-4">
        {smartWatch && smartWatch.map((e,i)=>{
          if( e.productType.name =="smartWatch" && i<5){
          return  <div className="card bg-base-100 w-4/12 shadow-xl max-h-fit"  onClick={()=>navigate(`/search/${e._id}`)}   key={i}>
            <figure>
              <img
                src={e.productImage}
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{e.productName}</h2>
              <p>{e.description}<br/><b>Rs .{e.sellingPrice}</b></p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary" onClick={(s)=>handleAddcart(s,e._id)}> Add to cart </button>
              </div>
            </div>
                      </div>
          }
     
        })}
         </div>
    </div>
    <div className="p-2">
        <div className="flex justify-between"><h1 className="text-3xl">Speaker</h1> 
        <div className="">
        <p className="my-auto px-2  "><span className="p-2 text-blue-800 text-xl cursor-pointer hover:text-blue-500"> see all</span><span className="btn"><BsChevronLeft/></span>{" "}<span className="btn"><BsChevronRight/></span> </p>
        </div>
        </div>
        <div className="flex overflow-x-auto space-x-4 p-4">
        {speaker&&speaker.map((e,i)=>{
          if( e.productType.name =="speaker"  && i<5 ){
          return  <div className="card bg-base-100 w-4/12 shadow-xl max-h-fit"  onClick={()=>navigate(`/search/${e._id}`)}   key={i}>
            <figure>
              <img
                src={e.productImage}
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{e.productName}</h2>
              <p>{e.description}<br/><b>Rs .{e.sellingPrice}</b></p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary" onClick={(s)=>handleAddcart(s,e._id)}> Add to cart </button>
              </div>
            </div>
                      </div>
          }
     
        })}
         </div>
    </div>


  </section>
  }
  </>
}

export default DisplayHomeListing