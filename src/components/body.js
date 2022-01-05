import React, { Component } from "react";
import  ReactDOM  from "react-dom";
import "./body.css";
import {Link,Routes,Route} from "react-router-dom";
import Product from "./product";
import Location from "./location";
import Managment from "./managment";
import Units from "./units";
import Socialmedia from "./socialmedia";
import Headquaters from "./headquaters";
import Vegilence from "./vegilence";
import AboutUs from "./aboutus";
import ContactUs from "./contactus";
import MakeInIndia from "./makeinindia";
import Careers from "./careers";
import WhatWeDo from "./whatwedo";
import News from "./news";
import Suppliers from "./suppliers";
import Investers from "./investers";
import Start from "./start";



 
function Body (){
   
    return(
<div className="Body-page">
    <div className="side-bar">
       <div ><Link  className="side-menu" to="/location" >Location</Link></div>
       <div ><Link  className="side-menu" to="/managment" >Managment</Link></div>
       <div ><Link  className="side-menu" to="/units" >Units</Link></div>
       <div ><Link  className="side-menu" to="/product" >Products</Link></div>
       <div ><Link  className="side-menu" to="/socialmedia" >Social Media</Link></div>
       <div ><Link  className="side-menu" to="/headquaters" >Head Quaters</Link></div>
     </div>
     
    <div className="content-page">
    <Routes>
  <Route path="/product" element= {<Product/>}/>
  <Route path="/units" element= {<Units/>}/>
  <Route path="/location" element= {<Location/>}/>
  <Route path="/headquaters" element= {<Headquaters/>}/>
  <Route path="/socialmedia" element= {<Socialmedia/>}/>
  <Route path="/managment" element= {<Managment/>}/>

  <Route path="/vegilence" element= {<Vegilence/>}/>
  <Route path="/aboutus" element= {<AboutUs/>}/>
  <Route path="/careers" element= {<Careers/>}/>
  <Route path="/whatwedo" element= {<WhatWeDo/>}/>
  <Route path="/suppliers" element= {<Suppliers/>}/>
  <Route path="/investers" element= {<Investers/>}/>
  <Route path="/news" element= {<News/>}/>
  <Route path="/makeinindia" element= {<MakeInIndia/>}/>
  <Route path="/contactus" element= {<ContactUs/>}/>
  <Route path="/" exact element= {<Start/>}/>
  <Route path="/start"  element= {<Start/>}/>

  
   </Routes>
    </div>

</div>
    );
}

export default Body;