import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import SliderSection from '../components/SliderSection'
import DisplayHomeListing from '../components/DisplayHomeListing'

function Home() {
  // useEffect(()=>{},[])

  return <>
    <NavBar/>
    <SliderSection />
    <DisplayHomeListing />

  </>
}

export default Home