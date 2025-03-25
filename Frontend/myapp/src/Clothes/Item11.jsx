import React from 'react'
import Carousel from '../Common/CarouselCommon.jsx';


import Common from '../Common/CommonSide.jsx'
import Product from'./Products11.jsx';
export default function Item11(props) {
  console.log(props.user);
  const images=["https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-13072024-TopBannerBU-Z1-P2-NIKE-ADIDAS-MIN40.jpg","https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-13072024-TopBannerBU-Z1-P5-REDTAPE-CARLTONLONDON-MIN70.jpg","https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-13072024-uhphim-z10-p3-CLARKS-DUNELONDON-UPTO50.jpg"]
 const shoes=['Nike','Addidas','Puma','Black','Wagon','FottBall','FootWear']
 return (
<div className='md:flex gap-6'>
       <div>
        <Common Shoes={shoes}></Common>
       </div>
<div>

  <Carousel img={images}></Carousel>
  <Product text="Shoes Of The Week"></Product>
  <Product text="Best Quality" user={props.user}></Product>
</div>
      </div>
  )
}
