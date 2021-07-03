import React, { useState } from 'react'
import './Name.css';

export default function NewProject() {
    const [data, setData] = useState({
        date: new Date(),
       });
    

    return (
        <div className="App">
            <h1>Username :Krishna Prabha</h1>
            <h2>{data.date.toString()}</h2>
           
        </div>
    )
}