
   

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Stars from './star.png';
import Slder from "react-slick";
import { useState } from 'react';
import Love from './heart.png';
import Close from './close.png'
import Screen from './Image.png';
export default function Fullscreen(props) {

  const handleClickOpen = () => {
    props.changed();
  };

  const handleClose = () => {
    props.changed();
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
const [count,setcount]=useState(1);
  return (
    <div className='relative'>
      <React.Fragment>
       
        <Dialog
          open={!props.opened}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-slide-description"
          fullWidth={true}
          maxWidth="md">
          <div className='p-6 w-full'>
            <div className='text-3xl ml-10'>
              <p>All Natural Italian-Style Balls</p>
              <p>Brands: Wetch's</p>
              <img src={Stars} className='w-14 h-14'></img>
            </div>
            <hr></hr>
            <div className='flex flex-col md:flex-row gap-10 p-4 w-full'>
              <div className="w-full md:w-[45%]">
                <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
                  <div className="carousel-inner rounded-2xl">
                    <div className="carousel-item active">
                      <img src={Screen} className='w-full h-48 md:h-[25rem] object-cover' alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/chz6lsg1uawchbnwo6xy" className='w-full h-48 md:h-[25rem] object-cover' alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/tlth5ulwbhyfhegkeba0" className='w-full h-48 md:h-[25rem] object-cover' alt="..."/>
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div className='flex flex-col gap-3 w-full md:w-1/2'>
                <h1 className='text-xl text-red-500'>$27.25</h1>
                <button className='bg-green-500 p-1 w-24 rounded-xl'>In Stock</button>
                <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic perferendis deleniti minima vero velit nulla nobis non expedita quas, dolore commodi consequuntur doloribus!</h1>
                <div className='flex gap-3 items-center'>
                  <div>
                    <button><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMUAAAEACAMAAAA0tEJxAAAAIVBMVEX///8AAAAsLCw7Ozunp6eurq4aGhooKCiysrItLS03NzeP/3uRAAAAZElEQVR4nO3PQQGAIAAEMERApX9gvxDgeG0NVgoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKs+atqTX7Qrz8LCwsLCwsJi93532swvAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA47QekMgaAVGtP9AAAAABJRU5ErkJggg==' className='rounded-full h-12 w-12'></img></button>
                  </div>
                  <div>
                    <h1 className='text-xl'>{count}</h1>
                  </div>
                  <div>
                    <button><img src='data:image/png;base64,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' className='rounded-full h-8 w-12'></img></button>
                  </div>
                  <div>
                    <button className='text-xl bg-green-300 hover:bg-blue-500 rounded-2xl p-3'>Add To Cart</button>
                  </div>
                </div>
                <br />
                <div className='flex gap-4 text-md'>
                  <button className='rounded-full flex items-center p-2 bg-red-400'><img src={Love} className='w-5 h-5 mr-2'></img>Add To WishList</button>
                  <button className='rounded-full bg-blue-400 p-2'>Compare</button>
                </div>
                <div className='space-y-3 mt-2'>
                  <h1>Type: Organic</h1>
                  <h1>MFG:Jun 4,2021</h1>
                  <h1>LIFE: 70 days</h1>
                </div>
                <hr></hr>
              </div>
            </div>
          </div>
          <button onClick={handleClose}>
          <img src={Close} className='absolute w-6 h-6 top-1 right-2'></img></button>
          
        </Dialog>
      </React.Fragment>
    </div>
  );
}
