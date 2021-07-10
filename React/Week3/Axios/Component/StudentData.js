import React,{useState,useEffect} from 'react'
import axios from 'axios';

export default function Student() {
    const [student,setStudents] = useState([]);
    useEffect(() => {
        const fetchData=async ()=>{
            const result =await axios.get("http://localhost:4005/student");
    
        setStudents(result.data);
        };
        fetchData();
    }, []);
    console.log(student)
    return (
        <div>
            <h1 className="heading">Student Information</h1>
            <div className="container">
                <div className="det">
                    {student&&
                    student.map((Student)=>(
                        <div className="det">
                        <h2>Id: {Student.id}</h2>
                        <h3>Name: {Student.name}</h3> 
                        <h3>Gender: {Student.gender}</h3>
                        <h3>Age: {Student.age}</h3>
                        <h3>City: {Student.city}</h3>
                        </div>   
                    ))}
                    </div>
                    </div>
                </div>
                    
        
    )
}