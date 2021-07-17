import React,{ useState ,useEffect}  from 'react'
import './Student.css';
import './Student.css';
import axios  from 'axios';
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function Std() {
    const history=useHistory();

    const details = {
        sname: "",
        gender:-1,
        age:"",
        address:"",
        medium:-1,
        intext: false
    };

    const [studentValues,setstudentValues]= useState(details);
    const [formErrors, setformErrors] = useState({});
    const [submitted,setSubmitted] = useState(false);

    const gender = [
        {id:1, name: "Female"},
        {id:2, name: "Male"}
    ];
    
    const medium = [
        {id:1, name: "Engilsh"},
        {id:2, name: "Tamil"}        
    ];


    const handleSubmit = (e) => {
        e.preventDefault();
        setformErrors(validate(studentValues));
        console.log(studentValues);
        console.log("Submitted");
        console.log("===" + Object.entries(studentValues).length);
        setSubmitted(true);

        console.log(submitted);
        axios.post("http://localhost:4005/student",studentValues);
    };

    const handleOnchange= (event) => {
        const isAccept = event.target.type === "checkbox";
        const {name,value} = event.target;
        console.log(name);
        console.log(value);
        setstudentValues((prev)=> {
            return {
                ...prev,
                [name]:isAccept?event.target.checked:value
           
            }
        });
    }
    const validate = (values) => {
        let errors={};

        console.log(values)
        if(values.sname == "")
        {
            errors.sname = "Enter Name";
        }
        if(values.gender<0)
        {
            errors.gender = "Select Gender";
        }
        if(values.age<15)
        {
            errors.age = "Enter Valid Age";
        }

        if(values.address == "")
        {
            errors.address = "Enter Address";
        }
        if(values.medium<0)
        {
            errors.medium = "Select Medium";
        }
        if(values.intext== false)
        {
            errors.intext = "Select The Accept Box";
        }
        return errors;
    };
    
    return (
        <div className = "student">
            {/* {(Object.entries(formErrors).length==0)}&&submitted && <div>Submitted Sucessfully</div> */}
             <form action="" onSubmit = {handleSubmit} noValidate>
                 {submitted}
                <div>
                    <h1>Student Registration </h1>
                    <label> Name: </label>  
                    <input value = {studentValues.sname}name = "sname" type ="sname" id ="sname" onChange= {handleOnchange}/>
                    {
                        formErrors.sname && <span className  = "errors">{formErrors.sname}</span>
                    }
                </div>

                <div>   
                    <label> Gender: </label> 
                    <select name= "gender" value = {studentValues.gender} onChange= {handleOnchange}>
                        <option value = "-1" >Please Select Gender</option>
                        {
                            gender.map(x => {
                                return <option value ={x.name} >{x.name}</option>
                                    })
                                }
                    </select>
                    <div>
                        {
                            formErrors.gender && <span className ="errors">{formErrors.gender}</span>
                        }
                    </div>
                </div>

                <div>
                    <label>Age: </label>  
                    <input value = {studentValues.age} name ="age"  type ="age" id ="age" onChange= {handleOnchange}/>
                    {
                        formErrors.age && <span className ="errors">{formErrors.age}</span>
                    }
                </div>

                <div>
                    <label> Address: </label>  
                    <input value = {studentValues.address} name ="address"  type ="address" id ="address" onChange= {handleOnchange}/>
                    {
                        formErrors.address && <span className ="errors">{formErrors.address}</span>
                    }
                </div>

                <div>
                    <label> Medium: </label> 
                        <select name= "medium" value = {studentValues.medium} onChange= {handleOnchange}>
                            <option value = "-1" >Select Medium</option>
                            {   
                                medium.map(y => {
                                    return <option value ={y.name} >{y.name}</option>
                                    })
                            }
                        </select>
                        <div>
                        {
                            formErrors.medium && <span className ="errors">{formErrors.medium}</span>
                        }
                    </div>
                </div>
            
                <div>
                    <label>Accept</label>
                    <input type  ="checkbox" name= "intext" onChange= {handleOnchange}/>
                    {
                        formErrors.intext && <span className ="errors">{formErrors.intext}</span>
                    }
                </div>

                <div>
                     <button type = "submit"> Submit</button>
                {"|"}
                <Button onClick  = {() => history.push("/")}>
                    Back
                </Button>
                </div>
                {/* <div>
                    <h3>Name: {studentValues.sname}</h3>
                    <h3>Gender: {studentValues.gender}</h3>
                    <h3>Age: {studentValues.age}</h3>
                    <h3>Address: {studentValues.address}</h3>
                    <h3>Medium: {studentValues.medium}</h3>

                </div> */}
                
            </form>
        </div>
    )
}
            
