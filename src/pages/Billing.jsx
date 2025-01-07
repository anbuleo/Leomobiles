import { Formik } from 'formik'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addBillingAddress} from '../Redux/billingSclice'
import {useNavigate} from 'react-router-dom'

function Billing() {
    let [shipingAdress,setShipingAdress] = useState({})
    let [step, setStep] = useState('address')

    let {shippingAddress} = useSelector(state=>state.billing)

    let navigate = useNavigate()

    let dispatch = useDispatch()

    let initialAddress = {
        fullName: '',
        addressLine1: '',
        addressLine2:'',
        city: '',
        state: '',
        postalcode: '',
        phone:'',
        country:''
    }
    
    const handleAddBilingAddress =async(val)=>{
        setShipingAdress(val)
        dispatch(addBillingAddress(val))
        setStep('')
        navigate('/paypreview')
       
    }



  return <>
   <div className="h-screen/2  ">
    
    <div className="text-4xl font-bold
    text-center">Billing Address</div>
   
<Formik
    initialValues={initialAddress}
    onSubmit={(values)=>handleAddBilingAddress(values)}
    >
    {({errors,handleBlur,handleChange,handleSubmit,touched})=>(
        
   <form className="max-w-md mx-auto my-10" onSubmit={handleSubmit}>
   <div className="relative z-0 w-full mb-5 group">
       <input type="text" name="fullName" id="fullName"   onChange={handleChange}
                onBlur={handleBlur} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
       <label for="fullName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full name</label>
   </div>
   <div className="relative z-0 w-full mb-5 group">
       <input type="text" name="addressLine1"  onChange={handleChange}
                onBlur={handleBlur} id="addressLine1" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
       <label for="addressLine1" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">AddressLine1</label>
   </div>
   <div className="relative z-0 w-full mb-5 group">
       <input type="text" name="addressLine2" id="addressLine2"   onChange={handleChange}
                onBlur={handleBlur} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
       <label for="addressLine2" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">AddressLine2</label>
   </div>
   <div className="grid md:grid-cols-2 md:gap-6">
     <div className="relative z-0 w-full mb-5 group">
         <input type="text" name="city" id="city" onChange={handleChange}
                onBlur={handleBlur} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
         <label for="city" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">City</label>
     </div>
     <div className="relative z-0 w-full mb-5 group">
         <input type="text" name="state" id="state"   onChange={handleChange}
                onBlur={handleBlur} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
         <label for="state" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">State</label>
     </div>
   </div>
   <div className="grid md:grid-cols-2 md:gap-6">
     <div className="relative z-0 w-full mb-5 group">
         <input type="text" name="postalcode" id="postalcode"   onChange={handleChange}
                onBlur={handleBlur} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
         <label for="postalcode" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Postal code</label>
     </div>
     <div className="relative z-0 w-full mb-5 group">
         <input type="text" name="country" id="country"   onChange={handleChange}
                onBlur={handleBlur} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
         <label for="country" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Country</label>
     </div>
   </div>
   <div className="relative z-0 w-full mb-5 group">
   <input type="tel" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" name="phone" id="phone"   onChange={handleChange}
                onBlur={handleBlur} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
         <label for="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (1234567890)</label>
  </div>

   <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Next</button>
 </form>

    )}
</Formik>
       
   
     </div> 



  
  
  </>
}

export default Billing