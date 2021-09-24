import React from 'react';
import { NavLink } from 'react-router-dom';
import logo3 from '../images/logo3.png';

const Navbar = () => {
  function checkMetamask(){
    if (typeof window.ethereum !== 'undefined') {
      console.log('MetaMask is installed!');
    }
     window.ethereum.request({ method: 'eth_requestAccounts' });
  };
  

//   const ethereumButton = document.querySelector('.enableEthereumButton');

// ethereumButton.addEventListener('click', () => {
//   //Will Start the metamask extension
//   ethereum.request({ method: 'eth_requestAccounts' });
// });

  
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            <NavLink className="navbar-brand navbar-logo" to="/" exact>
              <img src={logo3} alt="logo" height="50px" width="220px"  />

            </NavLink>
            <NavLink to="/Explore" className="no-underline explore" exact ><span className="text-xl text-gray-200 md:hover:no-underline ">Explore</span></NavLink>
      
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <NavLink to="/CreateNFT" className="nav-link" style={{color:"white"}}>Create<span class="sr-only">(current)</span></NavLink>
      </li>
      <li class="nav-item">
        <NavLink to="/Myprofile" className="nav-link" style={{color:"white"}}>My Profile</NavLink>
      </li>

      <li class="nav-item">
        <NavLink to="" className="nav-link" style={{color:"white"}} onClick={checkMetamask}>Connect Wallet</NavLink>
      </li>
      
      
    </ul>
  </div>
</nav>
            
        </div>
    )
}

export default Navbar;
