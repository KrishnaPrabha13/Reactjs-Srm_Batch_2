import React from 'react';
import NavBar from './NavBar';
import { useHistory } from "react-router-dom";
import {Link} from "react-router-dom";


function Loan() {
    const history =useHistory();
    return (
        <div>
            <NavBar/>
            <h2>Loan Page</h2>
            <Link to = "gold" className= "btn btn-primary">Gold</Link> {'   '}
            <Link to = "property" className= "btn btn-primary">Property</Link>{'   '}
            <Link to = "automobile" className= "btn btn-primary">Auto Mobile</Link>{'   '}
        </div>
    )
}

export default Loan
