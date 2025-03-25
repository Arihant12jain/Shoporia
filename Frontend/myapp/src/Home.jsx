import React from 'react'
import {Link,BrowserRouter as Router} from 'react-router-dom'
import Defence from './defence.png';
import Arrow from './arrow.png';
import Shopping from './shopping-bag.png';
import Location from './Location'
import Search from './magnifying-glass.png';
import Profile from './profile-user.png';
import Cart from './shopping-cart.png'
export default function Home() {
  return (
    <div>
    <center className='bg-blue-500 h-12 p-2 text-sm sm:text-base'>
      Due To Covid 19 epidemic, orders may be processed with a slight delay
    </center>
  
    <div className='flex flex-col md:flex-row justify-around  p-4'>
      <div className='flex justify-between gap-4 mb-2 md:mb-0'>
        <ul className='flex flex-col md:flex-row justify-between gap-4'>
          <li><Link to='/About'>About us</Link></li>
          <li><Link to='/Account'>My Account</Link></li>
          <li><Link to='/WishList'>WishList</Link></li>
          <li><Link to='/Order'>Order Tracking</Link></li>
        </ul>
      </div>
  
      <div className='flex flex-col md:flex-row items-center'>
        <img src={Defence} className='w-5 h-5 mb-2 md:mb-0' alt='Defence' />
        <h2 className='mr-10 text-center md:text-left'>
          100% Secure delivery without contacting the courier
        </h2>
        <h2 className='text-center md:text-left'>
          Need Help? Call Us: +9390241
        </h2>
      </div>
  
      <div className='flex flex-col md:flex-row items-center mt-2 md:mt-0'>
        <h2 className='mr-2'>English</h2>
        <img src={Arrow} className='w-5 h-5' alt='Arrow' />
      </div>
    </div>
  
    <hr />
  
    <div className='flex items-center flex-col gap-4 md:flex-row p-4 ml-28 mr-28'>
        <div className='flex flex-col gap-2 ml-6'>
            <div className='flex  justify-between w-[40%]'>
<img src={Shopping} className='w-9 h-10'></img>
<h1 className='text-4xl'>Shopify</h1>
        </div>
<div>
    <h1 className='opacity-[.6]'>Offline Grocery Shopping Center</h1>
</div>
</div>

<div>
<button className='border-2 border-slate-300 ml-10 mr-10'>
    <Location></Location>
</button>
</div>
<div className='border-2 bg-slate-400 flex items-center justify-between md:w-[35%] md:ml-10 mt-10 md:mt-0 md:mr-10'>

   <input type='text' placeholder='Search for Products' className='md:w-[85%] md:h-10 w-[18rem] md:border-none'></input>
   <img src={Search} className='w-[9%] h-[2%] mr-2'></img>
</div>
<div className='flex ml-10 gap-6'>
    <img src={Profile} className='w-10 h-10'></img>
    <h1 className='text-2xl'>$10</h1>
    <Link to='/order'><img src={Cart} className='w-20 h-14'></img></Link>
</div>
    </div>
   
   </div>
  )
}
