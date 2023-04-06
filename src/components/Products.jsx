import React from 'react';
import IndividualProduct from './IndividualProduct';
import '../styles/Products.css';

const Products = ({products}) => {

    console.log(products);

    return ( 
      <>
      <h1 className='deals'>TOP DEALS</h1>
      <div className='product-container'>
           {products.map((item)=>(
            <IndividualProduct key={item.ID} item={item}/>
           ))}
      </div>
      </>
    );




   
}

export default Products;
