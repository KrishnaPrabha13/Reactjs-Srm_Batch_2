import React, { useState } from 'react';
import './User.css';

export default function NewProject() {
    const [data, setData] = useState({
        date: new Date(),
       });
    

    return (
        <div className="txt">
            <h1>username : Krishna Prabha</h1>
            <div className="res">
                 <h2>{data.date.toString()}</h2>
            </div>
           
        </div>
    )
}