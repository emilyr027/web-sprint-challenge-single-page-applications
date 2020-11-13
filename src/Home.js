import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

const Home = () => {
    return (
        <>
        <div>
           <h2>Your Favorite Neighborhood Pizza Place</h2> 
        </div>
        <div>
            <p> Head to Lambda Eats for some comfort food after a long day of coding. You'll find any type of pizza your heart desires.</p>
        </div>
        
        
        <div>
          <Link to='/pizza' className= 'orderPizza'>Order Pizza today!</Link>
        </div>

        </>
    );
};

export default Home;