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
<div className='flex md:flex-row flex-col gap-6'>
              <Pro Image={Bread} user={props.user}></Pro>
              <Pro Image={Food1} user={props.user}></Pro>
              <Pro Image={Food2} user={props.user}></Pro>
              <Pro Image={Food3} user={props.user}></Pro>
                </div>
             
                
            </div>

        </div>
    </div>
  )
}
