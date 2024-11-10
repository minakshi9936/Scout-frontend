// import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import HomeComponent from "./HomeComponent";
import AboutComponent from "./AboutComponent";
import ContactComponent from "./ContactComponent";
import ServicesComponent from "./ServiceComponet";
import LoginComponent from "./LoginComponent";
// import SignupComponent from "./SignupComponent";
import './NavbarComponent.css'

const Header = () =>
  
    (
     <Router>
       <div>
         <header>
          <div className='logo'></div>
           <nav>
             <ul>
               <li>
                 <NavLink to="/" end activeClassName="active-link">Home</NavLink>
               </li>
               <li>
                 <NavLink to="/about" activeClassName="active-link">About</NavLink>
               </li>
               <li>
                 <NavLink to="/contact" activeClassName="active-link">Contact</NavLink>
               </li>
               <li>
                 <NavLink to="/services" activeClassName="active-link" className="logo">Services</NavLink>
               </li>
               <li>
                 <NavLink to="/login" activeClassName="active-link">Login</NavLink>
               </li>
               {/* <li>
                 <NavLink to="/signup" activeClassName="active-link">Signup</NavLink>
               </li> */}
             </ul>
           </nav>
         </header>
         <div className="body-content">
           <Routes>
             <Route path="/" element={<HomeComponent />} />
             <Route path="/about" element={<AboutComponent />} />
             <Route path="/contact" element={<ContactComponent />} />
             <Route path="/services" element={<ServicesComponent />} />
             <Route path="/login" element={<LoginComponent />} />
             <Route path="/signup" element={<LoginComponent />} />
           </Routes>
         </div>
       </div>
     </Router>
   );

   export default Header;