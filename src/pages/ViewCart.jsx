import React, { useEffect } from 'react'
import UseCheckout from '../Hooks/UseCheckout'


function ViewCart() {
    let {getCart} = UseCheckout()

    useEffect(()=>{
        getCart()
    },[])

  return <>
        <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col sm:flex-row  lg:flex-row">
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <div className="flex ">
                        <div className=""><h2>selling Price</h2>
                        <p>{'sp'}</p></div>
                        <div className="">
                        <h2>selling Price</h2>
                        <p>{'sp'}</p>
                        </div>
                        <div className="">
                        <button className='btn btn-error btn-outline '>delete</button>
                        </div>

                        </div>

                    
                    </div>
                </div>
                
        </div>

  
  
  </>
}

export default ViewCart