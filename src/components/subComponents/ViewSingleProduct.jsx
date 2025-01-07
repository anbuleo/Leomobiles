import React from 'react'
import imgUrl from '../../assets/Logo.png'

function ViewSingleProduct() {
  return <>
  <section className="px-4 pt-2">
    <div className="card bg-base-100 w-full shadow-lg shadow-orange-700 max-h-fit">
        <div className="flex">
           <div className="flexItems">
            <div className="items-center">
                <img src={imgUrl} alt="" />
            </div>
            
           </div>
           <div className="flexItems ">
            <h1 className='text-xl'>{'productName'}</h1>
            <div className="pt-5 text-left">
                <div className="">
                <p>Features</p>
                <div className="">

                </div>
                </div>
            </div>
           </div>
        </div>
    </div>
  </section>
  <section className="px-4 pt-6">
    <div className=" ">
        <h1 className='text-2xl font-bold'>Related Products</h1>
        <div className="pt-4">
        <div className="card bg-base-100 w-1/4 shadow-xl max-h-fit">
  <figure>
    <img
      src="https://www.91-img.com/gallery_images_uploads/4/7/47cc3f2e55f7f31e2c1505251b7c273fa2276a8a.JPG?tr=h-550,w-0,c-at_max"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
            </div>
        </div>
    </div>
  </section>
  
  </>
}

export default ViewSingleProduct