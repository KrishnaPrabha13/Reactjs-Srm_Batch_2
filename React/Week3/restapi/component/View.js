import React,{useState} from 'react';
export default function View(){
    const[res,setResult]=useState([]);
    const handleOnClick=()=>{
        fetch("http://localhost:4003/student").then(res => res.json()).then(data=>{
          console.log(data);
          setResult(data);
        }).catch(e=>{
          console.error("Error in Student...");
          console.error(e);
        }).finally(()=>{
          console.log("Finally");
        })

    }
    return(
        <div>
          
         <table border="2px"> <tr> <input type="submit" onClick={handleOnClick} value="view"/></tr> 
           <tr> <td><h4>Student Name</h4></td>
           <td><h4>Gender</h4></td>
           <td><h4>Age</h4></td>
           <td><h4>Country</h4></td></tr>
              {res.map((x) => {
                return <tr><td><label key={x.id}>{x.name}</label></td>
                <td><label key={x.id}>{x.gender}</label></td>
                <td><label key={x.id}>{x.age}</label></td>
                <td><label key={x.id}>{x.city}</label></td>
                </tr>
              })}
            </table>
            
        </div>
    )
}