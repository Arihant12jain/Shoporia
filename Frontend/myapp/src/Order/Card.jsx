import React from 'react';

export default function Card(props) {
  const deletee=(async ()=>{
const response=await fetch("http://localhost:8000/order/deleteid",{
    method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({image:{img:props.image},user:{us:props.user}}),
          });

          const res=await response.json();
          if(res){
            alert("Items reduced successfully");
          }
})

  return (
    <div className="">
      
        <div  className="card" style={{ width: '18rem', marginBottom: '20px' }}>
          <img 
            src={props.image} 
            className="card-img-top h-[280px] w-full" 
           
           
          />
          <div className="card-body">
            <h5 className="card-title"></h5>
            <p className="card-text">Lorem ipsum dolor, sit amet consectetur  totam enim laboriosam vero nemo autem debitis ullam possimus, molestiae fuga?</p>
            <p className="card-text text-xl">Quantity: {props.quantity}</p>
            <p className="card-text text-xl">Price: {props.price}</p>
           
            <a href="#" className="btn btn-primary" onClick={()=>{deletee()}}>Delete One</a>
          </div>
        </div>
     
    </div>
  );
}

// Styles for the component
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 'auto',
  },
};

