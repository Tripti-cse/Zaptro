import React, {  useEffect } from "react";
import { getData } from "../context/DataContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Category from "./Category";

const Carousel = () => {
  const { data, fetchAllProducts } = getData();
  console.log(data);
  useEffect(() => {
    fetchAllProducts();
  }, []);

  var settings = {
    dots: false,
    autoplay:true,
    autoplaySpeed: 2000,
    infinite:true,
    speed:500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        {
          data?.slice(0,7)?.map((item,index)=>{
            return <div key={index} className ="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] ">
             <div className="flex flex-col md:flex-row gap-10 justify-center h-[600px] items-center px-4">
              <div className=" space-y-3 md:space-y-6">
                <h3 className="text-red-500 font-semibold font-sans text-xl mb-5">Powering Your World With the Best in Products</h3>
                <h1 className="md:text-4xl text-xl font-bold uppercase line-clamp-2 md:line-clamp-3 md:w-[500px] text-white ">{item.title}</h1>
                <p className="md:w-[500px] line-clamp-3 text-gray-400 pr-7 ">{item.description}</p>
                <button className="bg-linear-to-r from-red-500 to-purple-500 text-white px-3 py-2 rounded-md cursor-pointer mt-2">Shop Now</button>
              </div>
              <div className="md:w-[420px] md:h-[420px] h-[250px] w-[250px] mb-12 bg-white rounded-full flex items-center justify-center cursor-pointer
               hover:scale-105 transition-all shadow-2xl shadow-red-400 md:mb-16 ">
                <img src={item.image} alt={item.title} 
                 className="md:w-[250px] w-[150px] " />
              </div>
             </div>
            </div>
          })
        }
      </Slider>
      <Category/>
    </div>
  );
};

export default Carousel;
