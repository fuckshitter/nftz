import React from 'react';
import {BrowserRouter as Router, Route,Redirect , Switch }  from 'react-router-dom';


import Home from './pages/Home';

import Navbar from './Components/Navbar';

import Footer from './Components/Footer';

import Explore from './pages/Explore';
import CreateNFT from './Components/CreateNFT';


const App=()=> {
  return (
    <Router> 
      <main>
      
          <Switch>
          <Route path="/" exact component={Home}>
                <Home/>
          </Route>
           
           <Route path="/Explore" exact component={Explore}>
             <Explore />
           </Route>

           <Route path="/CreateNFT" exact component={CreateNFT}>
             <CreateNFT />
           </Route>


          <Redirect to="/"/>
          </Switch>
 
       
      </main>    
    </Router>
  
  );
}

export default App;
