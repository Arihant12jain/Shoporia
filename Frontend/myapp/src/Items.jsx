import React from 'react'
import Image from './Image.png';
import Product from './Product';
import Screen from './ScreenShot.png';
import Screens from './Screen.png';
import Customer from './Customer.jsx';
import Bread from './food1.png';
import Food1 from './food2.png';
import Food2 from './food3.png';
import Food3 from './Bread.png';
import Slider from './Slider.jsx'
export default function Items(props) {
  return (
    <>
    <Slider></Slider>
    <div className='flex flex-col gap-6'>
      <div className='md:flex justify-around  mt-12  gap-6 '>
        <div className='md:w-[30%]   mt-7 mr-10'>
            <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/64fd45fd9f44c1737bc446e470bed666' className='h-[28rem] w-[24rem] rounded-[2rem]'></img>
        </div>
       
        <div className='flex flex-col gap-4'>
            <div className='text-2xl'>
                <h1>BEST SELLERS</h1>
                <p>Do Not Miss the Current offers</p>
            </div>
            <div className='flex flex-col gap-4'>
<div className='flex md:flex-row flex-col gap-4'>
              <Product Image={Bread} user={props.user}></Product>
              <Product Image={Food1} user={props.user}></Product>
              <Product Image={Food2} user={props.user}></Product>
              <Product Image={Food3} user={props.user}></Product>
                </div>
             
                
            </div>

        </div>
      </div>
      <div className='md:ml-64 '>
        <img src={Screens}></img>
      </div>
      <div className='flex md:flex-row flex-col justify-around mt-10  gap-6'>
        <div className='md:w-[20%]'>
            <img src={Image} className='h-[28rem] w-[20rem]'></img>
        </div>
       <div className=''>
        <img src={Screen} className='w-full h-[24rem] md:h-full'></img>
       </div>

        
      </div>
      <h1 className='text-3xl bg- ml-10'>Customer Reviews</h1>
      <div className='flex md:flex-row flex-col ml-10 gap-8'>
    <div>
    <Customer colour={'yellow'}></Customer></div>
    <div>
    <Customer colour={'blue'}></Customer></div>
    <div>
    <Customer colour={'yellow'}></Customer></div>
    </div>
    </div>
    </>)
}
