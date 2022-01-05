import React, { Component, useState } from "react";
import "./carousel.css";
import {images } from "../Helpers/CarouselData";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
 
function Carousel (){
   const [currImg,setcurrImg] = useState(0)

    
    return(
<div className="carousel">
<div className="inner-carousel" >
    <img className=" carousel-image" src={images[currImg].img}/>
    <button  onClick={() => { currImg > 0 && setcurrImg(currImg - 1);}} className="slider-leftbtn"> <ArrowBackIosIcon/></button>
     <button  onClick={() => {currImg < images.length-1 && setcurrImg(currImg + 1)}} className="slider-rightbtn"><ArrowForwardIosIcon/></button>
</div> 

</div>
    );
}


export default Carousel;