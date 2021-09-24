import React from 'react';
import { NavLink } from 'react-router-dom';
import logo3 from '../images/logo3.png';

const Navbar = () => {
    return (
        <div id="navbar">
            <nav class="navbar navbar-expand-lg navbar-light bg-dark text-gray-50">
            <NavLink className="navbar-brand navbar-logo" to="/" onClick={()=>window.location.replace("/#homepage")} exact>
              <img src={logo3} alt="logo" height="50px" width="220px"  />

            </NavLink>
            <NavLink to="/Explore" className="text-xl explore hover:no-underline text-yellow-50" exact >Explore</NavLink>

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse md:text-gray-50" id="navbarNavDropdown">
    <ul class="navbar-nav ml-auto md:text-gray-50">
      
      <li class="nav-item md:text-gray-50 ">
        <NavLink to="/" onClick={()=>window.location.replace("/#company")} className="text-xl nav-link md:text-gray-50" > <span className="text-gray-200">Our Company</span> </NavLink>
      </li>
      
      <li class="nav-item ">
        <NavLink to="/" onClick={()=>window.location.replace("/#faq")} className="text-xl nav-link" ><span className="text-gray-200">FAQs</span></NavLink>
      </li>
      <li class="nav-item">
        <NavLink to="" onClick={()=>window.location.replace("/#team")} className="text-xl nav-link" ><span className="text-gray-200">About the Developer</span></NavLink>
      </li>
      
      
    </ul>
  </div>
</nav>
            
        </div>
    )
}

export default Navbar;
