import React from 'react'
import Screen1 from './Screen1.png';
import Screen2 from './Screen2.png';
export default function Discount() {
  return (
    <div>
      <h1 className='text-2xl mt-20 mb-8'>
        Customers Discount
      </h1>
      <div className='flex md:flex-row flex-col  flex-around gap-4'>
        <img src={Screen1} className='md:w-[35%] hover:scale-105'></img>
        <img src={Screen2} className='md:w-[35%] hover:scale-105'></img>
        <img src={Screen1} className='md:w-[35%] hover:scale-105'></img>
      </div>
    </div>
  )
}
