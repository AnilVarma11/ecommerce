import React from 'react';
import '../styles/Sports.css';

const Sports = () => {

  const sportsProducts = [
           {
               image:'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/715TLEvzxUS._UL1500_.jpg',
               title: 'WAAN SPORTS',
               description: "Comfortable Ultralight Men's Sports Light Weighted Shoe",
               price: '799'
           },
           {
            image:'https://images.naptol.com/usr/local/csp/staticContent/product_images/horizontal/750x750/FW16-Blade-Sports-Shoes-(-S2-)--1.jpg',
            title: 'FW16 BLADE',
            price: '499'
        },
        {
            image:'https://i.ebayimg.com/images/g/nB0AAOSwWkRj~5Rp/s-l1600.jpg',
            title: 'ADIDAS',
            price: '12000'
        },
        {
            image:'https://www.aishcart.in/1447-thickbox_default/lancer-grey-sports-shoes-for-men.jpg',
            title: 'LANCER GREY',
            price: '690'
        },
        {
            image: 'https://ethlits.com/media/catalog/product/cache/1/small_image/400x/5c70003709c325957b6e8568305cfcc8/n/e/new_balance_tc1140_english_willow_cricket_bat_size_sh_ethlits.com_1_.jpg',
            title: 'NEW BALANCE',
            price: '26999'
        },
        {
            image: 'https://5.imimg.com/data5/ZZ/ZZ/GLADMIN-/a-img922-7108-h3lbac-500x500.jpg',
            title: 'SPARTAN',
            price: '5000'
        },
        {
            image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81fgYPMgo1L._SX679_.jpg',
            title:"SG",
            price:'3183'
        },
        {
            image:'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/511vapgFOUL._SL1100_.jpg',
            title:'MRF',
            price:'8480'
        }

  ];


    return (
        <div>
            <h1 className='sports'>Sports & More</h1>
            <div className='sports-container'>
                  {sportsProducts.map((sitem)=>(
                      <div key={sitem.ID}>
                          <div className='sport'>
                              <img src={sitem.image} alt="img" />
                              <h3>{sitem.title}</h3>
                              {/* <p>{sitem.description}</p> */}
                              <p><b>{sitem.price}</b>/-</p>
                            <div className='btn'><button>Add To Cart</button></div>  
                          </div>
                      </div>
                  ))}
            </div>
        </div>
    );
}

export default Sports;
