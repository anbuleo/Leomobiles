import { toast } from "react-toastify"
import AxiosService from "./AxiosService"
import { useState } from "react";
import axios from "axios";

export default function convertToBase64(){
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const [uploadedUrl, setUploadedUrl] = useState('');
    const [images, setImages] = useState(null);
  
    let convert = async(file)=>{

        setImage(file);
        setPreview(URL.createObjectURL(file));
      
       
      
        
        //   if (!image) {
        //     alert('Please select an image first!');
        //     return;
        //   }
      
          const formData = new FormData();
          if(image){
            formData.append('file', image);
          formData.append('upload_preset', 'mobile'); // Replace 'my_preset' with your preset name
      
          try {
            const response = await axios.post(
              'https://api.cloudinary.com/v1_1/dzscrmyno/image/upload', // Replace <your-cloud-name>
              formData
            );
            // console.log(formData)
      
            setUploadedUrl(response.data.secure_url);
            toast.success('Image uploaded successfully!');
          } catch (error) {
            console.error('Upload failed:',  error.response?.data);
            toast.error('Failed to upload image');
          }
          }
          setImages(uploadedUrl)
          return uploadedUrl
          
        
    }
    
        // let images = new Promise((resolve,reject)=>{
        //     const fileReader =new FileReader()
        //     fileReader.readAsDataURL(file)
        //     fileReader.onload = ()=>{
        //         resolve(fileReader.result)
        //     }
        //     fileReader.onerror = ()=>{
        //         reject(error)
        //     }
        // })
        // if(image){
        //     let res = await AxiosService.post('/product/upload',{image:image})
       
        // }
        
   

    return   {convert,uploadedUrl,images}
}