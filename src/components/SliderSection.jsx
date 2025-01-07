import React, { useState } from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import logo from "../assets/Logo.png"
import UseHomepagedisplay from '../Hooks/UseHomepagedisplay';
import { useSelector } from 'react-redux';

function SliderSection() {
      let {product} = useSelector(state=>state.product)
      let  imgdata = []

     for (let i = 0; i <  product.length;i++){
        imgdata.push({source: product[i].productImage})
        
        
     }
      // console.log(imgdata,product)
      
  return <>
  <section className=''>
    <AwesomeSlider className='max-h-fit z-0' autoPlay={true} play={true} interval={3000} >
    {imgdata.map((url, index) => (
    <div key={index}    > 
          <img src={url.source} alt="" />
    </div>
  ))}
      </AwesomeSlider>
        </section>
  </>
}

export default SliderSection