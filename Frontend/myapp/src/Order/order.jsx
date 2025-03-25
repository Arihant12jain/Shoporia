import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import useGlobal from '../User.jsx';
const ViewOrders = (props) => {
 

  const [orders, setOrders] = useState([]);
  const [user,setuser]=useState('');
  const id=localStorage.getItem('user');
  const hasOrders = Array.isArray(orders) && orders.length > 0;
  const orderItems = hasOrders ? orders[0].orderItems : [];
  useEffect(() => {

    const fetchOrders = async () => {
    
       console.log(id);
      if(id){
      setuser(id);}
      try {
        console.log(props.user);
        console.log(user);
        const response = await fetch(`http://localhost:8000/order/user/${id}`);
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        if(!data){
          console.log('no data');
        }
        else{
        setOrders(data);
        console.log(data); // Check data in the console
  
        }
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h1>All Orders</h1>
      <ul className=''>
        <div className='flex flex-row flex-wrap justify-between'>
          {orderItems.length > 0 ? (
            orderItems.map(order => (
              <li key={order._id} className='flex flex-col items-center p-2'>
                {/* Assuming Card is a component that takes `order` properties */}
                <Card image={order.images}  quantity={order.quantity} price={order.price} user={id}/>
              </li>
            ))
          ) : (
            <p>No orders found or order items are not available.</p>
          )}
        </div>
      </ul>
      {orders[0]&&
      <p className='text-2xl'>TotalPrice:{orders[0].totalPrice}</p>}
    </div>
  );}
  export default ViewOrders;
