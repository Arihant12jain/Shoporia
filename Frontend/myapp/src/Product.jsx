import React from 'react'
import Stars from './star.png';
import Fullscreen from './Fullscreen.jsx';
import Fullscree from './fullscreen.png';
import Love from './heart.png'
import {useState} from 'react';

import {Link,BrowserRouter } from 'react-router-dom';

export default function Product(props) {
 const [count,setcount]=useState(Number(1));
const [open,setopen]=useState('false');
 
const prices=80;
  const call=(async ()=>{
    const id=localStorage.getItem('user');
    console.log(id);

    setcount((prev)=>{
      return prev+1;
     })
   console.log(props.Image);
  
    const response=await fetch('http://localhost:8000/order',{
      method:"POST",
      headers:{"Content-Type":"application/json"},
    body:JSON.stringify({status:"shipped",quantity:count,images:{url:props.Image},price:prices,user:id})
    })
    const result=await response.json();
  if(!result){
    alert("Order Failed")
  }else{
    alert("Order Placed")
  }
  })

  const change=()=>{
    setopen(!open);
  }
  return (
 
    <div>
       <div className='border-2 p-4 relative'>
                    <Link to='/detail'><img src={props.Image} className='md:w-[10rem] w-[18rem] h-[12rem] mb-7  rounded-2xl'></img></Link>
         <p className='text-lg'>Werther Original Caraml Hard Candles</p>
         <button onClick={()=>{change()}}>

         <img src={Fullscree}  className='hover:h-12 hover:w-12  w-6 h-6 absolute top-2 right-1 '></img></button>
         <img src={Love} className='w-6 h-7 absolute top-12 right-1'></img>
         <p className='text-green-500 '>IN STOCKS</p>
         <img src={Stars} className='h-15 w-14'></img>
         <h1 className='text-red-700'>$14.97</h1>
         <button className='rounded-[8rem] hover:bg-blue-500 hover:text-white text-center border-2 border-blue-500 text-blue-500 p-2 w-[80%] ml-[1rem] mt-[1rem]' onClick={()=>{call()}}>ADD to Cart</button>
         <button className='bg-blue-500 h-10 rounded-lg p-2 absolute top-1 left-2'>30%</button>
                </div>
                {!open&&
                <Fullscreen opened={open} changed={change}></Fullscreen>
                }</div>
              
  )
}
