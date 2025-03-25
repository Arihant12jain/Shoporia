import React from 'react'
import Screen from './news.png';
import Mail from './mail.png';
export default function Advertise() {
  return (
    <div>
      <div className='back flex  justify-around '>
  <div className='flex flex-col p-9'>
    <h1 className='text-xl text-slate-300'>$20 discount for your first order</h1>
<h1 className='text-2xl '>Join our Company and Get...</h1>
<br>
</br>
<p className='text-lg opacity-.4'>Join our email subscription now to get update on offers and deals</p>

 
  <div className='bg-white p-2 mt-6 flex justify-between'>
    <div className='flex items-center'>
  <img src={Mail} className='w-8 h-8'></img>
  <input type='text' placeholder='Your Email address'></input>
  </div>
  <div>
<button className='bg-blue-500 p-3'>Subscribe</button>
</div> </div>  </div>
  <div>
    <img src={Screen} className='w-[60%] mt-20'></img>
  </div>

</div>

    </div>
  )
}
