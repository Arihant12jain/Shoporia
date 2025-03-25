import React from 'react'
import {useState} from 'react';

import {useNavigate,BrowserRouter as Router} from 'react-router-dom'
export default function Signup(props) {

  const navigate=useNavigate();
  const [name,setname]=useState('');
  const [email,setemail]=useState('');
  const [pass,setpass]=useState('');
  const call=async (e)=>{
  
    const result=await fetch('http://localhost:8000/user/signup',{
      method:'POST',
body: JSON.stringify({name:name,email:email,password:pass}),
headers:{
'Content-Type':'application/json'
},
    })
    let result1=await result.json();
   
    if(result1 && result1._id){
      console.log("hello");
      window.history.back();
    }
    else{
      navigate('/');
    }
    
  }
  return (
    <div>
    
    <body>
   
    <div class="flex items-center flex-col mt-24">
    <div class="flex flex-col gap-0">
<img src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" class="h-32"/>

</div>
<div class="flex flex-col gap-4">
   
<div class=" gap-5 flex flex-col border-4 border-green-300 p-4 shadow-2xl  shadow-cyan-300 bg-white w-[28rem]">
 <h1 class="text-center text-2xl">Login Here</h1>
 
 <div class="border-2 h-13 w-[24rem] p-2 visited: border-blue-400">
 <input type="text" placeholder="Email address or Phone number"  value={name} onChange={(e)=>{setname(e.target.value)}} class=" text-lg h-10 w-64"/>
</div>
<div class="border-2 h-13 w-[24rem] p-2 visited: border-blue-400">
 <input type="text" placeholder="Email address"  value={email} onChange={(e)=>{setemail(e.target.value)}} class=" text-lg h-10 w-64"/>
</div>
<div class="border-2 border-blue-300 items-center h-13 p-2 w-[24rem] ">
<input type="password" placeholder="Password"  value={pass} onChange={(e)=>{setpass(e.target.value)}} class="text-xl h-10 w-64 border-none"/>
</div>
<div class="border-2 border-blue-300 items-center h-13 p-2 w-[24rem] ">
 <input type="password" placeholder="Confirm Password" class="text-xl h-10 w-64 border-none"/>
</div>
<div class="bo*--+*rder-2 border-black bg-[#1877f2] p-1 text-center w-[18rem] mx-10">
    <button class="text-3xl" type="submit" onClick={()=>{call()}}>Sign Up</button>
</div>


</div>
<div class="ml-4">
<h3><b>Create a Page</b> for a celebrity, brand or business.</h3>
</div></div>
</div>

</body>
      </div>
    
  
  )
}
