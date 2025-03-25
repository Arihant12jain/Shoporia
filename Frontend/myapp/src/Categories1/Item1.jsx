import React from 'react'

import Carousel from '../Common/CarouselCommon.jsx';


import Common from '../Common/CommonSide.jsx'
import Product from'./Productt.jsx';
export default function Item1() {
  const images=["https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-Maindailychaningbanner-Z1-Giantfashionsale-5090.jpg","https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-13072024-MainBannerDailyChanging-Z1-P5-SPYKAR-USPA-MIN50.jpg","https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-13072024-MainBannerDailyChanging-Z1-P7-TEAMSPIRIT-DNMX-UNDER399.jpg"]
 const Shoes=['Shakes','Breads','Oats','Protein','Heavy','Butter','Grocries']
  return (
    <div className='flex md:flex-row flex-col gap-6'>
       <div>
        <Common Shoes={Shoes}></Common>
       </div>
<div>

  <Carousel img={images}></Carousel>
  <Product text="BEST SELLERS"></Product>
  <Product text="HOT DEALS"></Product>
</div>
      </div>
   
  )
}
