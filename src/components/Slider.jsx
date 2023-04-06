import { Carousel } from 'react-carousel-minimal';
import img1 from '../img/shop2.jpg';

function Slider() {
 const data = [
  {
    image: img1,
    caption: "Shop at your fingertips"
  },
  {
    image: "https://img.freepik.com/premium-vector/soccer-jersey-template-sport-t-shirt-design_29096-1494.jpg?w=1060",
    caption: "Sports Jersey"
  },
    {
      image: "https://images.unsplash.com/photo-1531547255897-f400dc1b7de2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      caption: "Shop and relax"
    },
    {
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      caption: "Electronic Gadgets"
    },
    {
      image: "https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140604_1280.jpg",
      caption: "Door Delivery"
    },
    {
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        caption: "Find your Passion"
      },
      {
        image: "https://images.unsplash.com/photo-1558191053-8edcb01e1da3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        caption: "Offers and Discounts"
      },
      {
        image: "https://blog.bizvibe.com/wp-content/uploads/2022/09/largest-sports-equipment-companies.jpg"
      }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <div style={{
          padding: "0px"
        }}>
          <Carousel
            data={data}
            time={3000}
            width="100%"
            height="500px"
            captionStyle={captionStyle}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            style={{
              textAlign: "center",
              maxWidth: "1800px",
              maxHeight: "600px",
              margin: "0px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Slider;