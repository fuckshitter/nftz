import React from 'react';
import ExploreNavbar from '../Components/ExploreNavbar';
import ExploreFooter from '../Components/ExploreFooter';

const Explore = () => {
    return (
        <div>
            <ExploreNavbar />
             <div className="object-cover " >
             <img src="./images/comingsoon.png"  className="object-contain w-full h-full" alt="com"/>

             <h1>THis is the change i made for first time</h1>

             </div>
            <ExploreFooter />
        </div>
    )
}

export default Explore
