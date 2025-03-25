import React from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import useGlobal from '../User.jsx';
export default function Login() {

  const Navigate=useNavigate();
    const [name,setname]=useState('');
    const [email,setemail]=useState('');
   
    const [pass,setpass]=useState('');
    const call = async (e) => {
        e.preventDefault();
    
     
          const response = await fetch('http://localhost:8000/user/login', {
            method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name:name,email:email,password:pass}),
          });
    
          if (!response.ok) {
            alert("Something Went Wrong Try Again")
          }
    else{
          const result1 = await response.json();
    console.log(result1);
          if (result1 && result1.user._id) {
          
            localStorage.setItem('user', result1.user._id);
            console.log('Login successful:', result1.user._id);
            Navigate('/'); 
          } else {
            alert('Please enter correct details');
          }
        } }
      ;
    
  return (
    <div className="flex  justify-around mt-10">
      <div className="flex flex-col gap-0 mt-28">
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
          alt="Facebook Logo"
          className="h-28"
        />
        <h1 className="w-[34rem] text-3xl ml-[14rem]">
          Facebook helps you connect and share with people in your life
        </h1>
      </div>
      <div className="flex flex-col gap-4">
        <form className="gap-5 flex flex-col border p-4 shadow-2xl bg-white w-[28rem]" onSubmit={call}>
          <h1 className="text-center text-2xl">Login Here</h1>
          <div className="border-2 h-13 w-[24rem] p-2 border-blue-400">
            <input
              type="text"
              className="text-lg h-10 w-64 border-none"
              placeholder="Email address or Phone number"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div className="border-2 h-13 w-[24rem] p-2 border-blue-400">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className="text-lg h-10 w-64 border-none"
            />
          </div>
          <div className="border-2 border-blue-300 items-center h-13 p-2 w-[24rem]">
            <input
              type="password"
              className="text-xl h-10 w-64 border-none"
              placeholder="Password"
              value={pass}
              onChange={(e) => setpass(e.target.value)}
            />
          </div>
          <div className="border-2 border-black bg-[#1877f2] p-1 text-center w-[24rem]">
            <button className="text-3xl text-white" type="submit">Log in</button>
          </div>
        </form>

        <div className="flex text-green-500 justify-center items-center">
          <p>Forgot Password?</p>
        </div>

        <hr/>

        <div className="flex rounded-md border-2 bg-green-500 text-xl justify-center mx-4 p-2 items-center">
          <a href="/signup" className="text-white">Create Account</a>
        </div>

        <div className="ml-4">
          <h3><b>Create a Page</b> for a celebrity, brand, or business.</h3>
        </div>
      </div>
    </div>

  )
}
