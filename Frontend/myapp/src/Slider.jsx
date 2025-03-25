import React from "react";
import Slder from "react-slick";
export default function Slider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        autoplay:true,
      };
  return (
    <div className="md:ml-10 md:mr-10">
        <Slder {...settings} >
            <div>
                <img src='https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/ad70d101102cd21c.jpg?q=20' className="h-[22rem] w-[100%]"></img>
            </div>
            <div className="">
                <img src='https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/f6cb8b7cbeafbd38.jpg?q=20'  className="h-[22rem] w-[100%]"></img>
            </div>
            <div>
                <img src='https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/1aaeb0a6531bef88.jpg?q=20'  className="h-[22rem] w-[100%]"></img>
            </div>
            <div>
                <img src='https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/bdd9bb733f1c0b71.jpg?q=20'  className="h-[22rem] w-[100%]"></img>
            </div>
        </Slder>
    </div>
  )
}
