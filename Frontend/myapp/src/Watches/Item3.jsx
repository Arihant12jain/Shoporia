import React from 'react'

import Carousel from '../Common/CarouselCommon.jsx';


import Common from '../Common/CommonSide.jsx'
import Product from'./ProductWatch.jsx';
export default function Item1() {
  const images=["https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw05cf6619/images/Category%20Banners/Espot_new10.jpeg","https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw0fa3ef4f/images/PLP/SmartJuly_PLP.jpg","https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw9b1db56b/images/PLP/RagaNew_PLP.jpg"]
 const Shoes=['Titan','Smart Watch','Normal Watch','Expensive One','Heavy','Light','Diamond']
  return (
    <div className='md:flex gap-6'>
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
