import React from 'react';
import Navbar from './Navbar';
import Products from './Products';
import { useState, useEffect } from 'react';
import {auth,fs} from '../config/config';
import Slider from './Slider';
import Sports from './Sports';
import CoverContainer from './CoverContainer';
import Brand from './Brand';


const Home = () => {

   function GetCurrentUser() {
     const [user, setUser] = useState(null);
     
     useEffect(()=>{
         auth.onAuthStateChanged(user=>{
            if(user){
                fs.collection('users').doc(user.uid).get().then( snapshot=>{
                    setUser(snapshot.data().Fullname);
                })
            } else{
                 setUser(null);
            }
         })
     }, [])
     return user;
   }


    const user = GetCurrentUser();

    const[products, setProducts] = useState('');

    const getProducts = async () =>{
         const products = await fs.collection('Products').get();
         const productsArray = [];
         for(var snap of products.docs){
            var data = snap.data();
            data.ID = snap.id;
            productsArray.push({
                ...data
            })
            if(productsArray.length===products.docs.length){
                setProducts(productsArray);
            }
         }
    }

    useEffect(()=>{
        getProducts();
    }, []);

    return (
        <div>
            <Navbar user={user}/>
            <Slider/> <br /> 
            <CoverContainer/>
            
            {products.length > 0 && (
                <div>
                    <div>
                        <Products products={products}/>
                    </div>
                </div>
            )}

            <Sports/>

            <Brand/>

            
        </div>
    );
}

export default Home;
