import React, { Component } from "react";
import  ReactDOM  from "react-dom";
import "./footer.css";
import { NavLink  } from "react-router-dom";
import GroupsIcon from '@mui/icons-material/Groups';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PaymentIcon from '@mui/icons-material/Payment';
import TelegramIcon from '@mui/icons-material/Telegram';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
 
function Footer (){
   
    return(
<div className="footer-page">
    <div className="footer-1">
        <div className="lists">
        <div className="list-1">
       <div className="headings"><a><GroupsIcon/> Bharat Electronics Educational Institutions</a></div>
       <div className="headings"><a><TelegramIcon/>BEL Superannuation Benefit Scheme</a></div>
       <div className="headings"><a><MedicalServicesIcon/> Retired Employees Medical Scheme</a></div>
       <div className="headings"><a><TelegramIcon/>Citizen's Charter</a></div>
       <div className="headings"><a><AirplaneTicketIcon/>Collaborative R&D</a></div>
       <div className="headings"><a> <TelegramIcon/>Start-ups</a></div>
       <div className="headings"><a><MenuBookIcon/>Feedback</a></div>
       <div className="headings"><a><TelegramIcon/>Swachh Bharat</a></div>
        </div>
        <div className="list-2">
        <div className="headings"><a><TelegramIcon/>Other Defence Sites</a></div>
        <div className="headings"><a><ModeEditIcon/>Public Grievances</a></div>
        <div className="headings"><a><MenuBookIcon/>Right to Information</a></div>
        <div className="headings"><a><TelegramIcon/>SRM</a></div>
        <div className="headings"><a><ThumbUpOffAltIcon/>MSME Initiatives</a></div>
        <div className="headings"><a><PaymentIcon/>Digital Payments</a></div>
        </div>
        <span><hr/></span>
        <div className="list-3">
         <div className="image-logo"><img src="https://www.bel-india.in/images/iig-logo.jpg"></img></div>
         <div className="image-logo"><img src="https://www.bel-india.in/images/india-gov-logo.png"></img></div>
         <div className="image-logo"><img src="https://www.bel-india.in/images/Skill_india%20_logo.png"></img></div>
         <div className="image-logo"><img src="https://www.bel-india.in/images/Samanvay_English_16082018.jpg"></img></div>
         <div className="image-logo"><img src="https://www.bel-india.in/images/isea_logo.jpg"></img></div>
  </div>
  <div className="list-4">
         <div className="image-logo"><img src="https://www.bel-india.in/images/Defence_16082018.jpg"></img></div>
         <div className="image-logo"><img src="https://www.bel-india.in/images/Digital_India_logo.png"></img></div>
         <div className="image-logo"><img src="https://www.bel-india.in/images/Gem_logo.png"></img></div>
         <div className="image-logo"><img src="https://www.bel-india.in/images/nvsp-hindi.png"></img></div>
  </div>
  </div>
    </div>
    <div className="footer-2">
        <div>
        <p className="footer-text">This is the official website of <span className="Bel">Bharat Electronics Limited (BEL)</span> <br/>A Public Sector Undertaking under the Ministry of Defence, Government of India</p>
        </div>
        <div>
        <p className="date">Last Upadated : Nov 03,2021</p>
        <a className="aaa">Disclaimer</a>
        <a  className="aaa">Sitemap</a>
        <a  className="aaa">Archive</a>

        </div>
    </div>
    
</div>
    );
}





export default Footer;