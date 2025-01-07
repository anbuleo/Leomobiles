import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import AxiosService from '../common/AxiosService'

function UseHomepagedisplay() {
    let [loading, setLoading] = useState(false)
    let [mobileData, setMobileData] = useState([])
    let productData = useSelector(state => state.product)
    let [mobile,setMobile] = useState([])
    let [smartWatch,setSmartWatch] = useState([])
    let [speaker,setSpeaker] = useState([])

    let [headphone,setheadphone] = useState([])

    const getData = async () => {
        setLoading(true)
        try {
            setMobileData(productData)
            let respons = await AxiosService.get('/product/getallproductbycat')
            // console.log(respons)
            if(respons.status ==200){
                setMobile(respons.data.categories.mobiles)
                setSmartWatch(respons.data.categories.smartWatchs)
                setSpeaker(respons.data.categories.speakers)
                setheadphone(respons.data.categories.headphones)
             }
        }catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }


    
                                     
   return {loading,mobileData,getData,mobile,smartWatch,speaker,headphone}
}

export default UseHomepagedisplay