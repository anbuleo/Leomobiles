import React, { useState } from 'react'
import AxiosService from '../common/AxiosService'

function SignUpHook() {

    const [loading,setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const [code , setCode] = useState('')
    
        const SignUP = async(val)=>{
            setLoading(true)
            try {
                // console.log(val)
                let res =await AxiosService.post('/user/signup',val)
                // let data = await res.json()
                if(res.status === 201){
                    setMessage(res?.data.message)
                    setCode(res.status)
                }
               

               

                
            } catch (error) {
                setMessage(error?.response.data.message)
                setCode(error?.response.data.statusCode)
                console.log(error)
            } finally{
                setLoading(false)
            }
        }

  return {SignUP,loading,message,code}
}

export default SignUpHook