import React, { Component } from "react";
import SearchIcon from '@mui/icons-material/Search';
import ComputerIcon from '@mui/icons-material/Computer';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";
import "./header.css";





 
function Header(){
    return(
<div className="Header">
    <div className="Header-1">
        <div className="Logo-1"><Link to="/start"><img className="Logo-1-img" src="https://www.bel-india.in/images/bel_logo.png"/></Link></div>
        <div  className="Logo-2"><img className="Logo-2-img" src="https://www.bel-india.in/images/azadi-ka-amrit-mahotsav-logo-1a.png"/> </div>
        <div  className="Logo-3"> 
        <h1 className="company-name-1">Bharat Electronics Limited </h1>
       <div> <h3 className="company-name-2">Government of India Ministry of Defence <br/> A Navratna Company</h3></div>
        </div>

    </div>
    <div className="Header-2">
        <div className="search-inbox-1" > <input className="search-inbox-2" type="text" placeholder="Search"></input> <button className="icon Hover"><SearchIcon/></button> </div>
        <div className="skipto Hover"> <a >Skip to Content</a></div>
        <div className="A Hover"><ComputerIcon/></div>
        <div className="A Hover"><a>A+</a></div>
        <div className="A Hover"><a>A</a></div>
        <div className="A Hover"><a>A-</a></div>
        <div  className="skipto content"><a> Contrast</a></div>
        <div  className="skipto space Hover"><a> Hindi</a></div>
 </div>
 <div className='menu-bar'>
   
   <div ><Link className="anchor" to="/start"><HomeIcon/></Link> </div>
   <div ><Link className="anchor" to="/aboutus">About Us</Link> </div>
   <div ><Link className="anchor" to="/whatwedo">What We Do</Link> </div>
   <div ><Link className="anchor" to="/investers">Invester</Link> </div>
   <div ><Link className="anchor" to="/suppliers">Suppliers</Link> </div>
   <div ><Link className="anchor" to="/vegilence">Vigilance</Link> </div>
   <div ><Link className="anchor" to="news">News</Link> </div>
   <div ><Link className="anchor" to="/makeinindia">Make In India</Link> </div>
   <div ><Link className="anchor" to="/careers">Careers</Link> </div>
   <div ><Link className="anchor" to="/contactus">Contact Us</Link> </div>
       
 </div>
</div>
    );
}


export default Header;