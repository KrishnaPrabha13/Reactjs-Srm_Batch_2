import React,{ useState }  from 'react'
import './Student.css';
export default function Std() {

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

    }

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
        const regex= /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;

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
    }
    return (
        <div>
             <form  onSubmit = {handleSubmit} noValidate>
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
                                return <option value ={x.id} >{x.name}</option>
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
                                    return <option value ={y.id} >{y.name}</option>
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

                </div>
            </form>
        </div>
    )
}
            
