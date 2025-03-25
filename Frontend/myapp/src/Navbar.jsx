import React from 'react'
import Menu from './menu.png'
import Arrow from './arrow.png';
import { motion } from "framer-motion";
import { useState } from 'react';
import {Link,BrowserRouter as Router} from 'react-router-dom';
import Final from './Final';
import Dropdown from './dropdown';

export default function Navbar() {
const [open,setopen]=useState('false');
const variant = {
    open: {
      clipPath: "circle(1200px at 50px 160px)",
      transition: { type: 'spring', stiffness: 20,duration:6 },
    },
    closed: {
      clipPath: "circle(1200px at 50px 160px)",
      transition: { type: 'spring', stiffness: 20,duration:6 },
    }
  };
  return (
  
      <div className='flex mt-8 justify-between items-center mb-6'>
        <div>
        <div className='flex justify-around items-center bg-blue-500 w-52 rounded-[10rem] p-2'>
            <img src={Menu} className='w-6 shadow-lg h-5'></img>
            
            <p className='text-2xl ml-2'>All Categories</p>
           
            <img src={Arrow} onClick={()=>{setopen(!open)}}  className='w-6 h-5 ml-8'></img>
       
        </div>
        {!open&&
        <motion.div className='flex flex-col gap-6 text-xl text-black  w-36 md:w-[15%]  h-[22rem] float-right bg-gradient-to-r from-cyan-500 to-blue-500 overflow-y-scroll rounded-2xl text-center absolute z-[999]'
        variants={variant} transition={{type:'spring',stiffness:20,damping:40}} animate={open ? "open" : "closed"}>
            <Link to='/'><button>Home</button></Link>
       <Link to='/'><button>Men</button>
       </Link>

      
       <Link to='/Watches'><button>Watches</button></Link>
       <Link to='/Shoes'><button>Shoes</button></Link>
       <Link to='/order'><button>Orders</button></Link>
       <Link to='/login'><button>Login</button></Link>
       <Link to='/'><button>Contact</button></Link>
            </motion.div>}</div>
      <div className='around md:flex md:justify-around gap-6 text-xl hidden'>
       <Link to='/'><button>Home</button></Link>
      
       
<Link to='/'>
 
<Dropdown></Dropdown>

</Link>
        
       <Link to='/List'><button>Food Items</button></Link>
       <Link to='/List'><button>Beauty</button></Link>
       <Link to='/Watches'><button>Watches</button></Link>
       <Link to='/shoes'><button>Shoes</button></Link>
       <Link to='/Watches'><button>Gift</button></Link>
      
       <Link to='/Contact'><button>Contact</button></Link>
       <Link to='/login'><button>Login</button></Link>
       
      </div>
<hr></hr>
    </div>
  

  )
}
