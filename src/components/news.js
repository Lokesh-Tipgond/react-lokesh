import React, { Component } from "react";
import { images } from "../Helpers/CarouselData";
import { Link } from "react-router-dom";
import "./product.css";


function News (){
    
    return(

 <div>
     
    <div className="News"><p>NEWS</p></div>
     <div className="second-row">
     <div className="Rbox-1">
     <div className="border"><p>BEL registers a growth of 54% in PAT during 2nd Quarter of FY 2021-22.</p></div>
         <div  className="border"><p>Indian Navy signs contract with BEL for supply of Naval Anti drone system</p></div>
         <div  className="border"><Link  className="link" to=""><p>BEL bags Rajbhasha Kirti Award for second time, BEL OL Officer awarded Rajbhasha Gaurav Puraskar</p></Link></div>
         <div  className="border"><p>Webinar for Vendors</p></div>
         <div className="border last-border"><Link to="">VIEW ALL</Link></div> 
        
         
     </div>
     <div className="Rbox-2">
     <div className="Rbox-2a"> <img className="Rbox-2aimage" src= {images[12].img}/></div>
         <div className="Rbox-2b">
             <button className="Button">READ MORE</button>
         </div>

     </div>

     </div>
     
     </div>

    );
}


export default News;