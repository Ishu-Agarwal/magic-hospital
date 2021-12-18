import React from 'react'
import {BrowserRouter as Router ,Switch,Route,Link} from "react-router-dom";
import "./index.css"
import Appointment from './Appointment'
const Home = () => {
    return (
        
            <div>
             <h1 id="heading">HELLO THERE!</h1>
  <div className="extra">Always caring about your health , <br></br>we are here to help you</div>
    <div className="main">
      <ul className="gear">
        <li><Link to ="/Appointment" ><button>BOOK APPOINTMENT</button></Link></li>
        <br></br>
       <li><Link ><button>VIEW HEALTH RECORDS</button></Link></li> 
      </ul>
    </div>
    <div className="about"><p> <b>Apollo 24|7 - Your Most Trusted Healthcare Brand</b><br></br>
Apollo 24|7 is the largest multi-channel digital healthcare platform in India, created with a vision of eliminating flexibility blockages from the healthcare industry. We believe in making healthcare affordable to everyone by combining analytic excellence, affordable cost, and extensive research with advanced technology. Apollo 24|7 is a single online platform where you have access to a wide range of services such as online pharmacy, online doctor consultations, and diagnostic lab tests at home. We also provide expert solutions for chronic conditions and COVID-care with a secured digital vault, 
where you can safely upload all your medical reports.</p>
<p>
The Smart Choice for Your Health is Here
Make the best decision for your health by choosing Apollo 24|7. Here’s why you can count on us:
<ul className='content'>
  <li>36 years of legacy in the healthcare industry</li><br></br>
  <li>24x7 availability of doctors</li>
</ul>
</p>
</div>
        </div>
        
        
    )
}

export default Home
