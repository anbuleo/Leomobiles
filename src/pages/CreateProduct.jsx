
import React, { useEffect, useReducer, useState } from "react";
import {Reducer} from '../common/CreateProductReducer'
import convertToBase64 from '../common/Convert'
import UseCreateProduct from "../Hooks/UseCreateProduct";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function CreateProduct() {
  let [mobAcc, setMobAcc] = useState("mobile");
  let [imgUrl,setImgUrl] = useState('')
  // console.log(imgUrl)
  const {code,message,loading,createProduct} = UseCreateProduct()
  let navigate = useNavigate()
  let {convert,uploadedUrl,images} = convertToBase64()
  useEffect(() => {}, [mobAcc,imgUrl]);
  let initVaL = {
    productName: "",
    productType: {name:'',features:{}},
    brandName: "",
    productImage: "",
    description: "",
    price: "",
    sellingPrice: "",
    stock:'',
    

  }

 


  let [state,dispatch] = useReducer(Reducer,initVaL)


  

 
  const handleSubmit=async(e)=>{
    
    e.preventDefault()
    try {
     createProduct(state)

      if(code ==201){
        toast.success(message||'product created Success')
        navigate('/home')
      }else {
        toast.error(message||'error occurs')
      }
    } catch (error) {
      console.log(error)
      toast.error(message||'error occurs')
    }
    
  }
  const handleConvertUrl =async(val)=>{
   if(!val) return
    let urlimg = await convert(val)
    if(uploadedUrl){
      setImgUrl(uploadedUrl)
      if(urlimg)   dispatch({type:'changeImage',nextVal:uploadedUrl})
    }
    
    
  }

  return (
    <>
      <section className="border-stone-950 bg-stone-300 h-screen  ">
        <div className=" border-orange-600 flex justify-center pt-10">
          <div className="card bg-white w-3/4 ">
            <div className="">
              <p className="text-4xl font-bold text-center">Create Product</p>
            </div>
            <div className="">
              
                  <form onSubmit={(e)=>handleSubmit(e)}>
                    <div className="flex justify-evenly  flex-wrap ">
                      <div className="flexItems">
                        <label
                          htmlFor="productName"
                          className="label label-text "
                        >
                          Product Name
                        </label>
                        <input
                          type="text"
                          name="productName"
                          required
                          onChange={(e)=>{dispatch({type:'changeProductName',nextVal:e.target.value})}}
                          
                          placeholder="Product Name "
                          className="input input-bordered input-accent w-full max-w-xs"
                        />
                        
                      </div>
                      <div className="flexItems">
                      
                      <div className="">
                                <label
                                  htmlFor="productType"
                                  className="label label-text "
                                >
                                 Product Type
                                </label>
                                <select name="productType.Pname" onChange={(e) => {dispatch({type:'changeProductTypeName',nextVal:e.target.value});setMobAcc(e.target.value)}} className="select select-bordered select-accent">
                                  <option disabled selected>
                                    Pick one
                                  </option>
                                  <option  value={"mobile"}>Mobiles </option>
                                  <option value={"headphone"}>Headphone</option>
                                  
                                  <option value={"smartWatch"}>Smart Watch</option>
                                  
                                  <option value={"speaker"}>speakers</option>

                                  
                                </select>
                               
                              </div>
                      </div>
                      {mobAcc == "mobile" ? (
                        <>
                          <div className="mobile flexItems">
                            <div className="flex justify-evenly">
                              <div className="">
                                <label
                                  htmlFor="productName"
                                  className="label label-text "
                                >
                                  Brand Name
                                </label>
                                <select onChange={(e)=>{dispatch({type:'changeBrandName',nextVal:e.target.value})}} className="select select-bordered select-accent">
                                  <option disabled selected>
                                    Pick one
                                  </option>
                                  <option value={"samsung"}>Samsung </option>
                                  <option value={"oneplus"}>OnePlus</option>
                                  <option value={"realme"}>realme </option>
                                  <option value={"vivo"}>vivo </option>
                                  <option value={"xiaomi"}>Xiaomi </option>
                                  <option value={"oppo"}>OPPO </option>
                                  <option value={"motorola"}>Motorola </option>
                                  <option value={"poco"}>POCO </option>
                                  <option value={"other"}>others </option>
                                </select>
                                
                              </div>
                              <div className="">
                                <label
                                  htmlFor="networktype"
                                  className="label label-text"
                                >
                                  NetWorkType
                                </label>
                                <select onChange={(e)=>{dispatch({type:'changeNetworkType',nextVal:e.target.value})}} className="select select-bordered select-accent">
                                  <option disabled selected>
                                    Pick one
                                  </option>
                                  <option value={"2G"}>2G </option>
                                  <option value={"3G"}>3G</option>
                                  <option value={"4G"}>4G </option>
                                  <option value={"4G voLTE"}>4G VoLTE </option>
                                  <option value={"5G"}>5G </option>
                                  
                                </select>
                                
                              </div>
                            </div>
                          </div>
                          <div className="mobile flexItems">
                            <div className="flex justify-evenly">
                              <div className="">
                                <label
                                  htmlFor="productName"
                                  className="label label-text "
                                >
                                  Display Type
                                </label>
                                <select onChange={(e)=>{dispatch({type:'changeDisplayType',nextVal:e.target.value})}} className="select select-bordered select-accent">
                                  <option disabled selected>
                                    Pick one
                                  </option>
                                  <option value={"LCD"}>LCD  </option>
                                  <option value={"OLED"}>OLED </option>
                                  <option value={"AMOLED"}>AMOLED  </option>
                                  <option value={"SLCD"}>Super LCD </option>
                                  <option value={"Retina Display"}>Retina Display </option>
                                  <option value={"IGZO "}>IGZO  </option>
                                  <option value={"MicroLED"}>MicroLED </option>
                                  <option value={"AMOLED Plus"}>AMOLED Plus </option>
                                  <option value={"N/A"}>N/A </option>
                                </select>
                                
                              </div>
                              <div className="">
                                <label
                                  htmlFor="networktype"
                                  className="label label-text"
                                >
                                  Memory
                                </label>
                                <select onChange={(e)=>{dispatch({type:'changeMemory',nextVal:e.target.value})}} className="select select-bordered select-accent">
                                  <option disabled selected>
                                    Pick one
                                  </option>
                                  <option value={"2GB+2GB"}>2GB + 2GB </option>
                                  <option value={"2GB+8GB"}>2GB + 8GB</option>
                                  <option value={"2GB+16GB"}>2GB + 16GB </option>
                                  <option value={"4GB+16GB"}>4GB + 16GB </option>
                                  <option value={"4GB+32GB"}>4GB + 32GB</option>
                                  <option value={"4GB+64GB"}>4GB + 64GB</option>
                                  <option value={"4GB+128GB"}>4GB + 128GB </option>
                                  <option value={"8GB+32GB"}>8GB + 32GB</option>
                                  <option value={"8GB+64GB"}>8GB + 64GB</option>
                                  <option value={"8GB+128GB"}>8GB + 128GB</option>
                                  <option value={"8GB+256GB"}>8GB + 256GB</option>
                                  <option value={"8GB+512GB"}>8GB + 512GB</option>
                                  
                                </select>
                                
                              </div>
                            </div>
                          </div>
                          <div className="flexItems">
                            <div className="flex  ">
                            <div className="">
                                <label
                                  htmlFor="networktype"
                                  className="label label-text"
                                >
                                  Battery
                                </label>
                                <select onChange={(e)=>{dispatch({type:'changeBattary',nextVal:e.target.value})}} className="select select-bordered select-accent">
                                  <option disabled selected>
                                    Pick one
                                  </option>
                                  <option value={"2000"}>2000 mAh </option>
                                  <option value={"3000"}>3000 mAh</option>
                                  <option value={"3500"}>3500 mAh </option>
                                  <option value={"4000"}>4000 mAh</option>
                                  <option value={"4500"}>4500 mAh</option>
                                  <option value={"5000"}>5000 mAh</option>
                                  <option value={"5500"}>5500 mAh</option>
                                  <option value={"6000"}>6000 mAh</option>
                                  <option value={"6500"}>6500 mAh</option>
                                  <option value={"7000"}>7000 mAh</option>
                                  
                                </select>
                                
                              </div>
                              <div className="flex flex-col items-center">
                              <label
                                  htmlFor="img"
                                  className="label label-text"
                                >
                                  Upload image
                                </label>
                              <input type="file" accept="image/*"  onChange={(e)=>handleConvertUrl(e.target.files[0])} className="file-input file-input-bordered file-input-accent w-3/4 max-w-xs" /> 
                              {imgUrl && <span className=" card w-3/4 p-4 card-bordered rounded-md border-accent h-40  "><span>preview</span><img src={imgUrl} className="max-w-fit h-3/4 mx-auto" alt="" /></span>}
                              </div>
                            </div>
                           
                          </div>
                          <div className="flexItems flex gap-10">
                            <div className="">
                            <label
                                  htmlFor="productName.pname"
                                  className="label label-text "
                                >
                                  Price
                                </label>
                                <input type="number" onChange={(e)=>dispatch({type:'changePrice',nextVal:e.target.value})} className="input input-bordered input-accent w-full max-w-xs"/>
                                  
                            </div>
                            <div className="">
                            <label
                                  htmlFor="productName.pname"
                                  className="label label-text "
                                >
                                 Selling Price
                                </label>
                                <input type="number" onChange={(e)=>dispatch({type:'changeSellingPrice',nextVal:e.target.value})}  className="input input-bordered input-accent w-full max-w-xs"/>

                            </div>
                            
                           
                          </div>
                         
                        </>
                      ) : `${mobAcc}`==='smartWatch'?(
                        <>
                          <div className="mobile flexItems">
                            <div className="flex justify-evenly">
                              <div className="">
                                <label
                                  htmlFor="productName"
                                  className="label label-text "
                                >
                                  Brand Name
                                </label>
                                <select onChange={(e)=>{dispatch({type:'changeBrandName',nextVal:e.target.value})}} className="select select-bordered select-accent">
                                  <option disabled selected>
                                    Pick one
                                  </option>
                                  <option value={"samsung"}>Samsung </option>
                                  <option value={"apple"}>Apple</option>
                                  <option value={"garmin"}>Garmin </option>
                                  <option value={"fitbit"}>Fitbit </option>
                                  <option value={"xiaomi"}>Xiaomi </option>
                                  <option value={"fossil"}>Fossil </option>
                                  <option value={"huawei"}>Huawei </option>
                                  <option value={"polar"}>Polar </option>
                                  <option value={"other"}>others </option>
                                </select>
                                
                              </div>
                              <div className="">
                                <label
                                  htmlFor="conection"
                                  className="label label-text"
                                >
                                  Connectivity Type
                                </label>
                                <select onChange={(e)=>{dispatch({type:'changeNetworkType',nextVal:e.target.value})}} className="select select-bordered select-accent">
                                  <option disabled selected>
                                    Pick one
                                  </option>
                                  <option value={"bluetooth"}>Bluetooth </option>
                                  <option value={"wifi"}>wifi</option>
                                  <option value={"sim"}>nano Sim </option>
                                  
                                  
                                </select>
                                
                              </div>
                            </div>
                          </div>
                          <div className="mobile flexItems">
                            <div className="flex justify-evenly">
                              <div className="">
                                <label
                                  htmlFor="productName"
                                  className="label label-text "
                                >
                                  Display Type
                                </label>
                                <select required onChange={(e)=>{dispatch({type:'changeDisplayType',nextVal:e.target.value})}} className="select select-bordered select-accent">
                                  <option disabled selected>
                                    Pick one
                                  </option>
                                  <option value={"LCD"}>LCD  </option>
                                  <option value={"OLED"}>OLED </option>
                                  <option value={"AMOLED"}>AMOLED  </option>
                                  <option value={"SLCD"}>Super LCD </option>
                                  <option value={"Retina Display"}>Retina Display </option>
                                  <option value={"IGZO "}>IGZO  </option>
                                  <option value={"MicroLED"}>MicroLED </option>
                                  <option value={"AMOLED Plus"}>AMOLED Plus </option>
                                  <option value={"N/A"}>N/A </option>
                                </select>
                                
                              </div>
                              <div className="">
                                <label
                                  htmlFor="networktype"
                                  className="label label-text"
                                >
                                  Memory
                                </label>
                                <select onChange={(e)=>{dispatch({type:'changeMemory',nextVal:e.target.value})}} className="select select-bordered select-accent">
                                  <option disabled selected>
                                    Pick one
                                  </option>
                                  <option value={"1GB+32GB"}>1GB + 32GB </option>
                                  <option value={"1.5GB+32GB"}>1.5GB + 32GB</option>
                                  <option value={"1.5GB+16GB"}>1.5GB + 16GB </option>
                                  <option value={"1GB+8GB"}>1GB + 8GB </option>
                                  <option value={"1GB+4GB"}>1GB + 4GB</option>
                                  <option value={"n/a"}>N/A</option>
                                                              
                                </select>
                                
                              </div>
                            </div>
                          </div>
                          <div className="flexItems">
                            <div className="flex  ">
                            <div className="">
                                <label
                                  htmlFor="networktype"
                                  className="label label-text"
                                >
                                  Battery
                                </label>
                                <select onChange={(e)=>{dispatch({type:'changeBattary',nextVal:e.target.value})}} className="select select-bordered select-accent">
                                  <option disabled selected>
                                    Pick one
                                  </option>
                                  <option value={"2000"}>282 mAh </option>
                                  <option value={"3000"}>308 mAh</option>
                                  <option value={"3500"}>284 mAh </option>
                                  <option value={"4000"}>410 mAh</option>
                                  <option value={"4500"}>590 mAh</option>
                                  <option value={"5000"}>330 mAh</option>
                                  <option value={"5500"}>200 mAh</option>
                                  <option value={"6000"}>266 mAh</option>
                                  <option value={"6500"}>450 mAh</option>
                                  <option value={"7000"}>100 mAh</option>
                                  
                                </select>
                                
                              </div>
                              <div className="flex flex-col items-center">
                              <label
                                  htmlFor="img"
                                  className="label label-text"
                                >
                                  Upload image
                                </label>
                              <input type="file" required accept="image/*"  onChange={(e)=>handleConvertUrl(e.target.files[0])} className="file-input file-input-bordered file-input-accent w-3/4 max-w-xs" /> 
                              {imgUrl && <span className=" card w-3/4 p-4 card-bordered rounded-md border-accent h-40  "><span>preview</span><img src={imgUrl||uploadedUrl} className="max-w-fit h-3/4 mx-auto" alt="" /></span>}
                              </div>
                            </div>
                           
                          </div>
                          <div className="flexItems flex gap-10">
                            <div className="">
                            <label
                                  htmlFor="productName.pname"
                                  className="label label-text "
                                >
                                  Price
                                </label>
                                <input type="number" required onChange={(e)=>dispatch({type:'changePrice',nextVal:e.target.value})} className="input input-bordered input-accent w-full max-w-xs"/>
                                  
                            </div>
                            <div className="">
                            <label
                                  htmlFor="productName.pname"
                                  className="label label-text "
                                >
                                 Selling Price
                                </label>
                                <input type="number" onChange={(e)=>dispatch({type:'changeSellingPrice',nextVal:e.target.value})}  className="input input-bordered input-accent w-full max-w-xs"/>

                            </div>
                            
                           
                          </div>
                        </>
                      ): `${mobAcc}`==='headphone'? <>
                      <div className="mobile flexItems">
                        <div className="flex justify-evenly">
                          <div className="">
                            <label
                              htmlFor="productName"
                              className="label label-text "
                            >
                              Brand Name
                            </label>
                            <select onChange={(e)=>{dispatch({type:'changeBrandName',nextVal:e.target.value})}} className="select select-bordered select-accent">
                              <option disabled selected>
                                Pick one
                              </option>
                              <option value={"samsung"}>Samsung </option>
                              <option value={"apple"}>Apple</option>
                              <option value={"garmin"}>Garmin </option>
                              <option value={"fitbit"}>Fitbit </option>
                              <option value={"xiaomi"}>Xiaomi </option>
                              <option value={"fossil"}>Fossil </option>
                              <option value={"huawei"}>Huawei </option>
                              <option value={"polar"}>Polar </option>
                              <option value={"other"}>others </option>
                            </select>
                            
                          </div>
                          <div className="">
                            <label
                              htmlFor="conection"
                              className="label label-text"
                            >
                              Connectivity Type
                            </label>
                            <select onChange={(e)=>{dispatch({type:'changeNetworkType',nextVal:e.target.value})}} className="select select-bordered select-accent">
                              <option disabled selected>
                                Pick one
                              </option>
                              <option value={"bluetooth"}>Bluetooth </option>
                              <option value={"WireHeadphone"}>Wire headphone</option>
                              <option value={"other"}>Others</option>
                              
                              
                            </select>
                            
                          </div>
                        </div>
                      </div>
                      
                      <div className="flexItems">
                        <div className="flex  ">
                        {state.productType.features?.networkType === 'bluetooth'?<> <div className="">
                                <label
                                  htmlFor="networktype"
                                  className="label label-text"
                                >
                                  Battery
                                </label>
                                <select onChange={(e)=>{dispatch({type:'changeBattary',nextVal:e.target.value})}} className="select select-bordered select-accent">
                                  <option disabled selected>
                                    Pick one
                                  </option>
                                  <option value={"43"}>43 mAh </option>
                                  <option value={"572"}>572 mAh</option>
                                  <option value={"519"}>519 mAh </option>
                                  <option value={"61"}>61 mAh</option>
                                  <option value={"75"}>75 mAh</option>
                                  <option value={"85"}>85 mAh</option>
                                  <option value={"530"}>530 mAh</option>
                                  
                                  
                                </select>
                                
                              </div></>:<></>}
                          <div className="flex flex-col items-center">
                          <label
                              htmlFor="img"
                              className="label label-text"
                            >
                              Upload image
                            </label>
                          <input type="file" required accept="image/*"  onChange={(e)=>handleConvertUrl(e.target.files[0])} className="file-input file-input-bordered file-input-accent w-3/4 max-w-xs" /> 
                          {imgUrl && <span className=" card w-3/4 p-4 card-bordered rounded-md border-accent h-40  "><span>preview</span><img src={imgUrl} className="max-w-fit h-3/4 mx-auto" alt="" /></span>}
                          </div>
                        </div>
                       
                      </div>
                      <div className="flexItems flex gap-10">
                        <div className="">
                        <label
                              htmlFor="productName.pname"
                              className="label label-text "
                            >
                              Price
                            </label>
                            <input type="number" required onChange={(e)=>dispatch({type:'changePrice',nextVal:e.target.value})} className="input input-bordered input-accent w-full max-w-xs"/>
                              
                        </div>
                        <div className="">
                        <label
                              htmlFor="productName.pname"
                              className="label label-text "
                            >
                             Selling Price
                            </label>
                            <input type="number" onChange={(e)=>dispatch({type:'changeSellingPrice',nextVal:e.target.value})}  className="input input-bordered input-accent w-full max-w-xs"/>

                        </div>
                        
                       
                      </div>
                    </>: <>
                      <div className="mobile flexItems">
                        <div className="flex justify-evenly">
                          <div className="">
                            <label
                              htmlFor="productName"
                              className="label label-text "
                            >
                              Brand Name
                            </label>
                            <select onChange={(e)=>{dispatch({type:'changeBrandName',nextVal:e.target.value})}} className="select select-bordered select-accent">
                              <option disabled selected>
                                Pick one
                              </option>
                              <option value={"Bose"}>Bose </option>
                              <option value={"Sonos"}>Sonos</option>
                              <option value={"JBL"}>JBL </option>
                              <option value={"Sony"}>Sony </option>
                              <option value={"xiaomi"}>Xiaomi </option>
                              <option value={"Yamaha"}>Yamaha </option>
                              <option value={"Focal"}>Focal </option>
                              <option value={"polar"}>Polar </option>
                              <option value={"other"}>others </option>
                            </select>
                            
                          </div>
                          <div className="">
                            <label
                              htmlFor="conection"
                              className="label label-text"
                            >
                              Connectivity Type
                            </label>
                            <select onChange={(e)=>{dispatch({type:'changeNetworkType',nextVal:e.target.value})}} className="select select-bordered select-accent">
                              <option disabled selected>
                                Pick one
                              </option>
                              <option value={"bluetooth"}>Bluetooth </option>
                              <option value={"Only DC"}>Only Dc</option>
                              <option value={"other"}>Others</option>
                              
                              
                            </select>
                            
                          </div>
                        </div>
                      </div>
                      
                      <div className="flexItems">
                        <div className="flex  ">
                        {state.productType.features?.networkType === 'bluetooth'?<> <div className="">
                                <label
                                  htmlFor="networktype"
                                  className="label label-text"
                                >
                                  Battery
                                </label>
                                <select onChange={(e)=>{dispatch({type:'changeBattary',nextVal:e.target.value})}} className="select select-bordered select-accent">
                                  <option disabled selected>
                                    Pick one
                                  </option>
                                  <option value={"7500"}>7500 mAh </option>
                                  <option value={"3200"}>3200 mAh</option>
                                  <option value={"4800"}>4800 mAh </option>
                                  <option value={"9400"}>9400 mAh</option>
                                  <option value={"5200"}>5200 mAh</option>
                                  <option value={"2200"}>2200 mAh</option>
                                  <option value={"2700"}>2700 mAh</option>
                                  
                                  
                                </select>
                                
                              </div></>:<></>}
                          <div className="flex flex-col items-center">
                          <label
                              htmlFor="img"
                              className="label label-text"
                            >
                              Upload image
                            </label>
                          <input type="file" required accept="image/*"  onChange={(e)=>handleConvertUrl(e.target.files[0])} className="file-input file-input-bordered file-input-accent w-3/4 max-w-xs" /> 
                          {imgUrl && <span className=" card w-3/4 p-4 card-bordered rounded-md border-accent h-40  "><span>preview</span><img src={imgUrl} className="max-w-fit h-3/4 mx-auto" alt="" /></span>}
                          </div>
                        </div>
                       
                      </div>
                      <div className="flexItems flex gap-10">
                        <div className="">
                        <label
                              htmlFor="productName.pname"
                              className="label label-text "
                            >
                              Price
                            </label>
                            <input type="number" required onChange={(e)=>dispatch({type:'changePrice',nextVal:e.target.value})} className="input input-bordered input-accent w-full max-w-xs"/>
                              
                        </div>
                        <div className="">
                        <label
                              htmlFor="productName.pname"
                              className="label label-text "
                            >
                             Selling Price
                            </label>
                            <input type="number" onChange={(e)=>dispatch({type:'changeSellingPrice',nextVal:e.target.value})}  className="input input-bordered input-accent w-full max-w-xs"/>

                        </div>
                        
                       
                      </div>
                    </>}
                    </div>
                    <div className="flexItems flex justify-evenly">
                    <div className="">
                          <label
                                htmlFor="productName.pname"
                                className="label label-text "
                              >
                               Edit Quantity
                              </label>
                              <input type="number" onChange={(e)=>dispatch({type:'changeStockQuantity',nextVal:e.target.value})}  className="input input-bordered input-accent w-full max-w-xs"/>
  
                          </div>
                              <div className="px-5">
                              <label
                                  htmlFor="description"
                                  className="label label-text "
                                >
                                 Description
                                </label>
                                <textarea
                                name="description"
  placeholder="description"
  className="textarea textarea-bordered textarea-accent textarea-lg w-full max-w-full" onChange={(e)=>dispatch({type:'changeDescription',nextVal: e.target.value})}></textarea>

                              </div>
                              <div className="">

                              </div>
                            </div>
                    <div className="px-10 pb-10">
                    <button className="btn btn-outline btn-accent w-full "  type="submit">Create {state.productName}</button></div>
                    
                  </form>
               
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}

export default CreateProduct;
