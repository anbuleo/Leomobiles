import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Outlet,Navigate } from "react-router-dom"
import { toast } from "react-toastify"
import AxiosService from "./AxiosService"

 function PrivateRoute({children}) {
  // let [token,setToken] = useState("")

   
    // useEffect(()=>{},[token])
    const token = localStorage.getItem('token')
   
  return token? children : <Navigate to='/' />
}

export default PrivateRoute