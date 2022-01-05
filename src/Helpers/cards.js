import React from "react";
import  ReactDOM  from "react-dom";
import "./cards.css";
import {images} from "./CarouselData";
 
function Cards(){
    return(
<div >
    <h1>This is Cards page !</h1>
    <img src= {require("../images/azadi.png").default}/>
   
</div>
    );
}

export default Cards;