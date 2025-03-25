import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './Categories1/Item1.jsx';
import Slider from './Slider.jsx';
import Navbar from './Navbar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Items from './Items.jsx';
import Discount from './Discount.jsx';
import Item2 from './Clothes/Item11.jsx'
import Final from './Final.jsx';
import Contact from './Contact.jsx';
import Fullscreen from './Fullscreen.jsx';
import Item3 from './Watches/Item3.jsx'
import Advertise from './Advertise.jsx';
import Productdetail from './Common/Productdetail.jsx';
import Order from './Order/order.jsx';
import Login from './Login/login.jsx';
import Signup from './Login/Signup.jsx';
import useGlobal from './User.jsx';
function App() {
  const [count, setCount] = useState(0)
const {user,setuser}=useGlobal();

  return (
    
    <>

<BrowserRouter>  
  <Home></Home>
  <div className='ml-28 mr-28'>
  <Navbar></Navbar>
  </div>
  

 
  <div className='md:ml-28 md:mr-20'>
    
    <Routes>
{user && <Route exact path='/' element={<Items user={user}></Items>}></Route>}

<Route exact path='/List' element={<List></List>}></Route>
<Route exact path='/Shoes' element={<Item2 user={user}></Item2>}></Route>
<Route exact path='/Watches' element={<Item3 user={user}></Item3>}></Route>
<Route exact path='/Contact' element={<Contact></Contact>}></Route>
<Route exact path='/order' element={<Order></Order>}></Route>
</Routes>
</div>
<Routes>
  <Route exact path='/Detail' element={<Productdetail></Productdetail>}></Route>
  <Route exact path='/login' element={<Login user={user} ></Login>}></Route>
  <Route exact path='/signup' element={<Signup user={user}></Signup>}></Route>
  </Routes>
<Discount></Discount>
<Advertise></Advertise>

<div className='md:ml-32 md:mr-32 opacity-55'>
  <Final></Final>

</div>

</BrowserRouter>

    </>
  )
}

export default App
