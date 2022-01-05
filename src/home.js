import React, { Component } from "react";
import  ReactDOM  from "react-dom";
import Body from "./components/body";
import Footer from "./components/footer";
import Header from "./components/header";

 
function Home (){
    return(
<div>
    <Header/>
   <Body/>
    <Footer/>
</div>
    );
}


export default Home;