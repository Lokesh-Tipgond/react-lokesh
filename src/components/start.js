import React, { Component } from "react";
import  ReactDOM  from "react-dom";
import "./product.css";
import Carousel from "./carousel";
import News from "./news";
import Cards from "../Helpers/cards";
import { Link } from "react-router-dom";
import { images } from "../Helpers/CarouselData";



 
function Start (){
    
    return(
<div className="start" >
    <div className="image-slider row-1">
    <Carousel/>
    </div>
    <div className="para-space row-2">
<p className="para">Bharat Electronics Limited (BEL) is a Navratna PSU under the Ministry of Defence, Government of India. It manufactures state-of-the-art electronic products and systems for the Army, Navy and the Air Force. BEL has also diversified into various areas like homeland security solutions, smart cities, e-governance solutions, space electronics including satellite integration, energy storage products including e-vehicle charging stations, solar, network & cyber security, railways & metro solutions, airport solutions, Electronic Voting Machines, telecom products, passive night vision devices, medical electronics, composites and software solutions.</p>
</div>
<div className="row-3" >
 <div className="first">
   <News/>
 </div>
 <div className="second">
<Cards/>
 </div>
 <div className="third"></div>

</div>
</div>
    );
}


export default Start;