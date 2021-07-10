import React, { useState,useEffect } from 'react'
import { messageService } from '../_utilities/MessageService';

export default function ComponentB()
{
    const[info,setinfo]= useState();

    useEffect(() =>{
        messageService.getMessage().subscribe(x=>{
            setinfo(x);
            console.log(x);
        });
    },[info])

    return(
        <div>
            <h1> Reciving Component B</h1>
            {/* <h2>{JSON.stringify(info)}</h2> */}
            {info && <div>{info.text.sname}</div>}
            {info && <div>{info.text.age}</div>}
            {info && <div>{info.text.gender}</div>}

        </div>
    )

}