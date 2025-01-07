import React from 'react'
import { json } from 'react-router-dom'
import { toast } from 'react-toastify'
import {useNavigate} from 'react-router-dom'

function UseAdminCheck() {
    let user  = window.localStorage.getItem('user')
    let navigate = useNavigate()

    let puser = JSON.parse(user)

    let handleAdminCheck = ()=>{
        if(puser.role !== 'admin'){
            toast.warning('Admin only')
            return 
        }

        navigate('/admin')
    }

  return {handleAdminCheck}
}

export default UseAdminCheck