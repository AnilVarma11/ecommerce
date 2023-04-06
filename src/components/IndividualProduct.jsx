import React from 'react';
import '../styles/IndividualProduct.css';

const IndividualProduct = ({item}) => {
    console.log(item);
    return (
        <div className='product'>
             <div>
                <img src={item.url} alt={item} />
             </div>
             <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p> <b>{item.price}</b>/-</p>
             </div>
             <div className='cart'>
               <button>Add To Cart</button> 
            </div>
        </div>
    );
}

export default IndividualProduct;
