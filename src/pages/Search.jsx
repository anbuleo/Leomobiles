import React,{useState,useEffect} from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import UseAddCart from '../Hooks/UseAddCart'
import { SlArrowDown  } from "react-icons/sl";
import UseHomepagedisplay from '../Hooks/UseHomepagedisplay'


function Search() {

  let [search,setSearch] = useState(null)
  const params = useParams()
 let {Addtocart} =  UseAddCart()
 let {headphone,mobile,smartWatch,speaker,getData} = UseHomepagedisplay()

let navigate = useNavigate()
// console.log(mobile)


let {product} = useSelector(state=>state.product)
const handleAddcart =async(e,id)=>{
    e.preventDefault()
    
    try {
      await Addtocart(id)
      
    } catch (error) {
      toast.error(error?.response?.data.message)
    }
  }

useEffect(() => {
  if (params.id) {
    const addPrductSearch = (id) => {
      const pr = product.filter((a) => a._id === id);
      setSearch(pr);
    };

    addPrductSearch(params.id);
  }
  getData()
}, [params.id, product]);

// console.log(search)



  return <>
  <div className="">
    {/* viewProduct */}
    <div className="">
        <div className="border-yellow-800 bordered flex">
          <div className="w-1/2 border-double ">
          <img src={search ? search[0].productImage:""} alt="" />
          
          </div>
         {search && search[0].productType.name == 'mobile' ? <div className="w-1/2 my-auto text-2xl px-4 " >


<h1>{search ? search[0].productName:""}</h1>
<h3>About : {search ? search[0].description:""}</h3>

<h3>Memory : {search ? search[0].productType.features.memory:""}</h3>
<h3>Display :  {search ? search[0].productType.features?.displayType:""}</h3>
<h3>Battary : {search ? search[0].productType.features?.battary:""} mh</h3>
<h3>Network : {search ? search[0].productType.features?.networkType:""} </h3>
<h3 className= "uppercase font-bold">{search ? search[0].brandName :"" }</h3>
<h3>Price : ₹ {search ? search[0].price:""}</h3>
<div className="card-actions pt-5">
<button className="btn btn-success w-full" onClick={(s)=>handleAddcart(s,search ? search[0]._id :"")}> Add to cart </button>
</div>



</div> : ""} 
         {search && search[0].productType.name == 'headphone' ? <div className="w-1/2 my-auto text-2xl px-4 " >


<h1>{search ? search[0].productName:""}</h1>
<h3>About : {search ? search[0].description:""}</h3>

{/* <h3>Memory : {search ? search[0].productType.features.memory:""}</h3>
<h3>Display :  {search ? search[0].productType.features?.displayType:""}</h3> */}
<h3>Battary : {search ? search[0].productType.features?.battary:""} mh</h3>
<h3>Network : {search ? search[0].productType.features?.networkType:""} </h3>
<h3 className= "uppercase font-bold">{search ? search[0].brandName :"" }</h3>
<h3>Price : ₹ {search ? search[0].price:""}</h3>
<div className="card-actions pt-5">
<button className="btn btn-success w-full" onClick={(s)=>handleAddcart(s,search ? search[0]._id :"")}> Add to cart </button>
</div>



</div> : ""} 
         {search && search[0].productType.name == 'smartWatch' ? <div className="w-1/2 my-auto text-2xl px-4 " >


<h1>{search ? search[0].productName:""}</h1>
<h3>About : {search ? search[0].description:""}</h3>

{/* <h3>Memory : {search ? search[0].productType.features.memory:""}</h3>
<h3>Display :  {search ? search[0].productType.features?.displayType:""}</h3> */}
<h3>Battary : {search ? search[0].productType.features?.battary:""} mh</h3>
<h3>Network : {search ? search[0].productType.features?.networkType:""} </h3>
<h3 className= "uppercase font-bold">{search ? search[0].brandName :"" }</h3>
<h3>Price : ₹ {search ? search[0].price:""}</h3>
<div className="card-actions pt-5">
<button className="btn btn-success w-full" onClick={(s)=>handleAddcart(s,search ? search[0]._id :"")}> Add to cart </button>
</div>



</div> : ""} 
         {search && search[0].productType.name == 'speaker' ? <div className="w-1/2 my-auto text-2xl px-4 " >


<h1>{search ? search[0].productName:""}</h1>
<h3>About : {search ? search[0].description:""}</h3>

{/* <h3>Memory : {search ? search[0].productType.features.memory:""}</h3>
<h3>Display :  {search ? search[0].productType.features?.displayType:""}</h3> */}
<h3>Battary : {search ? search[0].productType.features?.battary:""} mh</h3>
<h3>Network : {search ? search[0].productType.features?.networkType:""} </h3>
<h3 className= "uppercase font-bold">{search ? search[0].brandName :"" }</h3>
<h3>Price : ₹ {search ? search[0].price:""}</h3>
<div className="card-actions pt-5">
<button className="btn btn-success w-full" onClick={(s)=>handleAddcart(s,search ? search[0]._id :"")}> Add to cart </button>
</div>



</div> : ""} 
        </div>

    </div>


    {/* similair products */}
    <div className="">
      <h1 className='text-center text-lg'>View similair product <span className="inline-block my-auto"><SlArrowDown  /></span></h1>
          <div className="flex  flex-wrap gap-11">
          {search && search[0].productType.name == 'mobile' ? mobile?.map((e,i)=>{
            return <div className="card bg-base-100 w-2/12 shadow-xl max-h-fit" onClick={()=>navigate(`/search/${e._id}`)}  key={i}>
           <figure>
             <img
               src={e.productImage}
               alt="Shoes" />
           </figure>
           <div className="card-body">
             <h2 className="card-title">{e.productName}</h2>
             <p>{e.description}<br/><b>Rs .{e.price}</b></p>
             <div className="card-actions justify-end">
               <button className="btn btn-primary" onClick={(s)=>handleAddcart(s,e._id)}> Add to cart </button>
             </div>
           </div>
                     </div>
           
          }): <></>}
          </div>
          <div className="flex  flex-wrap gap-11">
          {search && search[0].productType.name == 'headphone' ? headphone?.map((e,i)=>{
            return <div className="card bg-base-100 w-2/12 shadow-xl max-h-fit" onClick={()=>navigate(`/search/${e._id}`)}  key={i}>
           <figure>
             <img
               src={e.productImage}
               alt="Shoes" />
           </figure>
           <div className="card-body">
             <h2 className="card-title">{e.productName}</h2>
             <p>{e.description}<br/><b>Rs .{e.price}</b></p>
             <div className="card-actions justify-end">
               <button className="btn btn-primary" onClick={(s)=>handleAddcart(s,e._id)}> Add to cart </button>
             </div>
           </div>
                     </div>
           
          }): <></>}
          </div>
          <div className="flex flex-wrap gap-11 ">
          {search && search[0].productType.name == 'smartWatch' ? smartWatch?.map((e,i)=>{
           return <div className="card bg-base-100 w-2/12 shadow-xl max-h-fit" onClick={()=>navigate(`/search/${e._id}`)}  key={i}>
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
           
          }): <></>}
          </div>
          <div className="flex  flex-wrap gap-11">
          {search && search[0].productType.name == 'speaker' ? speaker?.map((e,i)=>{
            return <div className="card bg-base-100 w-4/12 shadow-xl max-h-fit" onClick={()=>navigate(`/search/${e._id}`)}  key={i}>
           <figure>
             <img
               src={e.productImage}
               alt="Shoes" />
           </figure>
           <div className="card-body">
             <h2 className="card-title">{e.productName}</h2>
             <p>{e.description}<br/><b>Rs .{e.price}</b></p>
             <div className="card-actions justify-end">
               <button className="btn btn-primary" onClick={(s)=>handleAddcart(s,e._id)}> Add to cart </button>
             </div>
           </div>
                     </div>
           
          }): <></>}
          </div>
    </div>
  </div>
  
  
  </>
}

export default Search