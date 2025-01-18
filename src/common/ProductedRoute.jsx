import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Outlet,Navigate } from "react-router-dom"
import { toast } from "react-toastify"
import AxiosService from "./AxiosService"


 function PrivateRoute({children}) {
  
   
    // useEffect(()=>{ setStatus(verifyTokenTime())},[statuss])
    const token = sessionStorage.getItem('token')
    // console.log(user,statuss)
   
  return  token ? children : <Navigate to='/signin' />
}

export default PrivateRoute