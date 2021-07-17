import React from 'react'
import {Link} from "react-router-dom";
import NavBar from './NavBar';
function Gold() {
    return (
        <div>
            <NavBar/>
            <h1></h1>
            <h2 style={{color:"#ed872d"}}>Gold Loan: Get Loan Against Gold Jewellery</h2>
            <h1></h1>
            <h4 style={{fontSize:"20px"}}>Life is full of opportunities. Do not allow the opportunities to pass just because of financial constraint. Get instant gold loan by bringing your gold jewellery at any branch of SM Bank. Your gold stays safe while you can go ahead and take advantage of every opportunity."</h4>
            <Link to = "gold" className= "btn btn-primary">APPLY FOR GOLD LOAN</Link> {'   '}
        </div>
    )
}

export default Gold
