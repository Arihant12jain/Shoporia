import React from 'react'
import Profile from './profile.png';
export default function Customer(props) {

  return (
    <div>
   
    <div className='flex'>
        <div className={`border-1 p-6 bg-${props.colour}-500 rounded-3xl`}>
<p className='mb-3 text-xl'>The Best MarketPlace</p>
<p className='mb-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius esse, ad assumenda nihil ex rem odio perspiciatis distinctio sit architecto quaerat quisquam est eos sed sunt. Neque repellat eos harum.</p>
<div className='flex gap-4'>
    <img src={Profile} className='h-10 w-10'></img>
    <div className='flex flex-col'>
    <h1 className='text-red-600'>Tine McDonell</h1>
    <p>Sales Manager</p>
    </div>
</div>
        </div>
    </div>
    </div>
  )
}
