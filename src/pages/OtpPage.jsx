import React, { useState } from 'react'
import logo from '../assets/Logo.png'
import OTPInput from 'react-otp-input'

function OtpPage() {

    const [otp,setOtp] = useState('')
  return <>
  <div className="flex  h-screen flex-1 flex-col justify-center  px-6 py-12 lg:px-8 bg-blue-700">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src={logo}
            className="mx-auto  w-auto"
          />
          <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-orange-400">
            Enter the OTP 
          </h2>
        </div>
        <div className="p-6">
        <div className="  mx-auto max-w-fit h-max text-center shadow-lg shadow-black bg-blue-400 p-10  m-10 rounded-lg">
               <OTPInput className='mx-auto'
                        value={otp}
                        onChange={setOtp}
                        numInputs={4}
                        renderSeparator={<span >-</span>}
                        renderInput={(props) => <input  {...props} />}
                />
               </div>
        </div>

        </div>
  
  </>
}

export default OtpPage