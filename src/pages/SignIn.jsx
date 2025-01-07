import React from 'react'
import logo from '../assets/Logo.png'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import UseSignIn from '../Hooks/UseSignIn'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { addAllProduct } from '../Redux/ProductSlice'


function SignIn() {


 
    let navigate = useNavigate()

    

    const userSchema = Yup.object().shape({
       
        email: Yup.string().email('Invalid Email').required('* Required'),
        
        password: Yup.string().required('* Required').min(6,'Password atleast 6 characters')
    })
    let {code,loading,message,signIn} = UseSignIn()



    const handleAddUser = async(val) => {
        try {
         
         let codes = await signIn(val)
         
            console.log(codes)
            if(code==200 || codes ==200){
              toast.success(message|| 'Login success')
              navigate('/home')
            }else{
              // console.log(code)
              toast.error(message||'try Again')
            }
        } catch (error) {
          console.log(error)
            toast.error(message||'error occurrs')
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
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <Formik initialValues={{
               
                email:"",
               
                password:""

            }}
            validationSchema={userSchema}
            onSubmit={(val)=>handleAddUser(val)}>
                 {({errors,handleBlur, handleSubmit, touched, handleChange})=>(
                <form onSubmit={handleSubmit}  className="space-y-6">
            
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
               {loading?<><span className="loading loading-ring loading-md"></span></>:'SignIn'}
              </button>
            </div>
          </form>)}
          

            </Formik>
            <p className="mt-10 text-center text-lg text-orange-200">
           Not a registered member?{' '}
            <span  className="font-semibold leading-6 text-green-600 hover:text-green-500 cursor-pointer" onClick={()=>navigate('/signup')}>
              signUp
            </span>
          </p>
           
          

        
        </div>
      </div>
  
  </>
}

export default SignIn