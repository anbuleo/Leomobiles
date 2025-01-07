import React, { useState } from 'react'
import AxiosService from '../common/AxiosService'
import { useNavigate } from 'react-router-dom'
import {persistor } from '../Redux/Store'

function UseLogOut() {

    let [loading,setLoading] = useState(false)
    let navigate = useNavigate()

    let logOut = async()=>{
        try {
            setLoading(true)
            persistor.purge()
            localStorage.clear()
            sessionStorage.clear()
           

            navigate('/')
            
            
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
        
    }


  return {loading,logOut}
}

export default UseLogOut