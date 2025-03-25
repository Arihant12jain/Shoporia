import React from 'react'
import Bread from '../food1.png';
import Food1 from '../food2.png';
import Food2 from '../food3.png';
import Food3 from '../Bread.png';

import Pro from '../Product.jsx';
export default function Productt(props) {
  return (
    <div>
       <div className='flex flex-col gap-4 mt-14'>
            <div className='text-2xl text-red-400'>
                <h1>{props.text}</h1>
             
            </div>
            <div className='flex flex-col gap-4'>
<div className='flex flex-col md:flex-row gap-6'>
              <Pro Image='https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw77995370/images/Titan/Catalog/2608QM02_1.jpg?sw=360&sh=360'></Pro>
              <Pro Image='https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw61458d43/images/Titan/Catalog/90188AP01_1.jpg?sw=360&sh=360'></Pro>
              <Pro Image='https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwca0ec4a1/images/Titan/Catalog/90197AP03K_1.jpg?sw=360&sh=360'></Pro>
              <Pro Image='https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwa2d1274a/images/Fastrack/Catalog/38138PP01_1.jpg?sw=360&sh=360'></Pro>
                </div>
             
                
            </div>

        </div>
    </div>
  )
}
