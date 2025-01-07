import React from 'react'
import logo from '../assets/Logo.png'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import SignUpHook from '../Hooks/SignUpHook'
import { toast } from 'react-toastify'

function SignUp() {
  
    let navigate = useNavigate()

    

    const userSchema = Yup.object().shape({
        userName: Yup.string().required('* Required').min(4,'User name atleast 4 characters'),
        email: Yup.string().email('Invalid Email').required('* Required'),
        phoneNumber: Yup.string().required('* Required').min(10,'Ten digit mobile number').max(10,'Ten digit mobile number'),
        address: Yup.string().required('* Required'),
        password: Yup.string().required('* Required').min(6,'Password atleast 6 characters')
    })
    let {message,loading,SignUP,code} = SignUpHook()
    const handleAddUser = async(val) => {
      // console.log(val)
        try {
          // console.log(val)
         await SignUP(val)
         if(code==201){
          toast.success(message)
          navigate('/signin')
         }else{
          toast.error(message||'error occur')
         }
            
        } catch (error) {
          toast.error(message)
            console.log(error)
        }
    }



  return <>

<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-blue-700">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src={logo}
            className="mx-auto  w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-orange-400">
            Sign up your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <Formik initialValues={{
                userName:"",
                email:"",
                phoneNumber:"",
                password:""

            }}
            validationSchema={userSchema}
            onSubmit={(values)=>handleAddUser(values)}>
                 {({errors,handleBlur, handleSubmit, touched, handleChange})=>(
                <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="userName" className="block text-sm font-medium leading-6 text-orange-200">
                User Name
              </label>
              <div className="mt-2">
                <input
                onChange={handleChange}
                onBlur={handleBlur}
                 
                  name="userName"
                  type="text"
                  required
                  
                  className=" p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                />
                 {errors.userName && touched.userName ? <p className='text-red-500'>{errors.userName}</p>:null}
              </div>
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium leading-6 text-orange-200">
                Mobile Number
              </label>
              <div className="mt-2">
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                 
                  name="phoneNumber"
                  type="tel"
                  required
                  placeholder='9876543210'
                  
                  className=" p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                />
                {errors.phoneNumber && touched.phoneNumber ? <p className='text-red-500'>{errors.phoneNumber}</p>:null}
              </div>
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium leading-6 text-orange-200">
                address
              </label>
              <div className="mt-2">
              <textarea
                onChange={handleChange}
                onBlur={handleBlur}
                 
                  name="address"
                  type="text"
                  required
                  autoComplete='address'
                  placeholder='Enter address'
                  
                  className=" p-2 block w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                />
                {errors.address && touched.address ? <p className='text-red-500'>{errors.address}</p>:null}
         
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-orange-200">
                Email address
              </label>
              <div className="mt-2">
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                 
                  name="email"
                  type="email"
                  required
                  autoComplete='email'
                  placeholder='Enter Email'
                  
                  className=" p-2 block w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                />
                {errors.email && touched.email ? <p className='text-red-500'>{errors.email}</p>:null}
         
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-orange-200">
                  Password
                </label>
                
              </div>
              <div className="mt-2">
                <input
                placeholder='********'
                onChange={handleChange}
                onBlur={handleBlur}
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md p-2 border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
             {errors.email && touched.email ? <p className='text-red-500'>{errors.email}</p>:null}

              </div>
            </div>

            <div>
            <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-orange-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
               {loading?<span className="loading loading-ring loading-md"></span>:'SignUp'}
              </button>
            </div>
          </form>)}
          

            </Formik>
            <p className="mt-10 text-center text-lg text-orange-200">
            Already a member?{' '}
            <span  className="font-semibold leading-6 text-green-600 hover:text-green-500 cursor-pointer" onClick={()=>navigate('/signin')}>
              Sign in
            </span>
          </p>
           
          

        
        </div>
      </div>
  
  </>
}

export default SignUp