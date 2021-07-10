import React,{useState} from 'react'
import { messageService } from '../_utilities/MessageService';

export default function ComponentA()
{
    const [info,setInfo]=useState({
        sname:"",
        age:"",
        gender:"",
    });
    const handleOnChange = (e) => {
        const {name,value} =e.target;
        setInfo(prev=>{
            return {
                ...prev,
               [name]:value
            }
        });
    }
    const sendData = () =>{
        messageService.sendMessage(info);
        console.log(info);
    }

    const resetData = () =>{
        messageService.clearMessage();
    }
    return(
        <div>
            <h1>Component A - (Sending Data)</h1>
            <div>
            <label>Name</label>
            <input name = "sname" type = "text" placeholder = "send data" onChange ={handleOnChange} value ={info.sname}/>
            </div>
            <div>
            <label>Age</label>
            <input name = "age" type = "text" placeholder = "send data" onChange ={handleOnChange} value ={info.age}/>
            </div>
            <div>
            <label>Gender</label>
            <input name = "gender" type = "text" placeholder = "send data" onChange ={handleOnChange} value ={info.gender}/>
            </div>
            

            
            <div>
                <button onClick={sendData}>Send Data</button>
            </div>
            <div>
                <button onClick= {resetData}> Clear Data</button>
            </div>
        </div>
    )
}