import React from 'react';
import { useState } from 'react';
import {storage, fs} from '../config/config';

const AddProducts = () => {

   const[title, setTitle] = useState('');
   const[description, setDescription] = useState('');
   const[price, setPrice] = useState('');
   const[image, setImage] = useState(null);

   const[successMsg, setSuccessMsg] = useState('');
   const[errorMsg, setErrorMsg] = useState('');
   const[imageError, setImageError] = useState('');

   
   const types = ['image/jpg', 'image/png', 'image/jpeg', 'image/webp'];
   const handleProductImage = (e) =>{
           let selectedFile = e.target.files[0];

           if(selectedFile){
           if(selectedFile&&types.includes(selectedFile.type)){
                  setImage(selectedFile);
                  setImageError('');
           }  else{
                  setImage(null);
                  setImageError('please select a valid image file type');
           }
        } else{
                console.log('please select your file');
        }
   }

   const handleAddProducts = (e) =>{
      e.preventDefault();
      console.log(title, description, price);
       console.log(image);
      const uploadTask = storage.ref(`product-images/${image.name}`).put(image);
      uploadTask.on('state_changed', snapshot => {
         const progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
         console.log(progress);
      }, error=>setErrorMsg(error.message), ()=>{
         storage.ref('product-images').child(image.name).getDownloadURL().then(url=>{
            fs.collection('Products').add({
               title,
               description,
               price: Number(price),
               url
            }).then(()=>{
               setSuccessMsg('Product added successfully');
               setTitle('');
               setDescription('');
               setPrice('');
               document.getElementById('file').value='';
               setImageError('');
               setErrorMsg('');
               setTimeout(()=>{
                  setSuccessMsg('');
               }, 3000)
            }).catch(error=>setErrorMsg(error.message));
         })
      })
   }


    return (
        <div>
            {successMsg&& <>
               <div>{successMsg}</div>
            </>}
            <form onSubmit={handleAddProducts}>
               <label>Product Title</label> <br />
               <input type="text" required 
               onChange={(e)=> setTitle(e.target.value)} value={title} /> <br /> <br />
               <label>Product Description</label> <br />
               <input type="text" required
               onChange={(e)=>setDescription(e.target.value)} value={description} /> <br /> <br />
               <label>Product Price</label> <br />
               <input type="number" required 
               onChange={(e)=>setPrice(e.target.value)} value={price}/> <br /> <br />
               <label>Product Image</label> <br />
               <input type="file" id='file' required onChange={handleProductImage} /> <br /> <br />

               {imageError&& <>
                    <div>{imageError}</div>
               </>}

               <button type='submit'>Submit</button>

            </form>
            {errorMsg&&<>
               <div>{errorMsg}</div>
            </>}
        </div>
    );
}

export default AddProducts;
