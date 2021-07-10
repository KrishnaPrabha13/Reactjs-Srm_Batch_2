import React, {useState,useEffect} from 'react'
import './Student.css';
export default function Std()
{
    const std= {
        name:"",
        gender:"",
        age: "",
        city:-1
    };

    const [student,setStudent]= useState(std);
    const [cities,setCities] = useState([]);
    const [res,setResult] = useState(0);
    const handleOnChange = (event) =>{
        const {name,value} = event.target;
        setStudent((prev) =>{
            return {
                ...prev,
                [name]: value,
            };
        });
    };
    
    const handleSubmit = (e)=> {
        e.preventDefault();
        console.log("Submited");
        console.log(student);

        const reqOptions= {
            method:"POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(student)
        };
        fetch ("http://localhost:4003/student",reqOptions).then(res=> res.json()).then(data=>{
            console.log("saved");
            console.log(data.id);
        }).catch(e =>{
            console.error("Errror in save data");
            console.error(e);
        }).finally(()=>{
            console.log("finally");
        })
    }
    useEffect(() => {
        fetch("http://localhost:4002/city").then(result=> result.json()).then(data=>{
            console.log(data);
            setCities(data);
        }).catch(e=>{
            console.error("Error in city");
            console.error(e);
       }).finally(()=>{
            console.log("Final");
        });
    },[])
        
    return(
    <div>
        <h2>Student Registration</h2>
        <form>
            <table>
            <tr><td><label>Name</label></td>
        <td><input type="text" name="name" value={student.name} onChange={handleOnChange}/></td> 
        </tr>
        <tr>
            <td><label>Gender</label></td>
            <td> <input type="text" name="gender" value={student.gender} onChange={handleOnChange}/></td>
        </tr>
        <tr >
            <td><label>Age</label></td>
            <td>
                <input type="text" name="age" value={student.age} onChange={handleOnChange}/>
            </td>
        </tr>
        <tr>
            <td><label>Country</label></td>
            <td>
                <select name="city" onChange={handleOnChange} value={student.city}>
                    <option value="-1">Please select a country</option>
                    {cities.map((x) => {
                        return <option key={x.id} value={x.name} name={x.name}>{x.name}</option>;
                        
                    })}
                </select>
            </td>
        </tr>
        <tr>
       <input  type="submit" onClick={handleSubmit} value="Submit"/>
        </tr> 
            </table>
        </form>
        </div>
    )
}