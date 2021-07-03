import React from 'react'
import {useFormik} from 'formik';
import * as Yup from 'yup';
export default function Student() {

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/; 
    const emailRegExp ="^[a-zA-Z0-9]{3,20}@gmail.com$";
    const bloodgrpRegExp = "^(A|B|AB|O)[-+]$";

    const validationSchema = Yup.object({
        stdname : Yup.string().required("Required").max(15,"Must be 15 character or less"),
        bloodgrp: Yup.string().required("Required").matches(bloodgrpRegExp,"Example: A+"),
        email : Yup.string().email("Invalid").required("Enter Email").matches(emailRegExp,"Enter valid Email"),
        address: Yup.string().typeError("Enter Address").required("Required"),
        age : Yup.string().required("Enter Age").min(20,"Enter Valid Age").max(60,"Enter Valid Age"),
        mob: Yup.string().required("Please Enter Mobile Number").length(10,"Enter valid Number").matches(phoneRegExp,"enter validNumber"),
        dept: Yup.string().typeError("Enter Dept").required("Required"),
    })

    const { handleSubmit,handleChange,values,errors} = useFormik({
        initialValues: {
            stdname:'',
            bloodgrp:'',
            email:'',
            address:'',
            age:0,
            mob:'',
            dept:''
        },

        validationSchema,
        onSubmit(values){
            console.log("Submitted");
            console.log(values);
        }
    })
    return (
        <div>
            <form onSubmit={handleSubmit} noValidate>
                <h1>Form Registration</h1>
                <div>
                    <label>First Name</label>
                    <input type="text" name="stdname" onChange={handleChange} values={values.stdname}/>
                    {errors.stdname ? errors.stdname : null}
                </div>
                <div>
                    <label>Department</label>
                    <input type="text" name="dept" onChange={handleChange} values={values.dept}/>
                    {errors.dept ? errors.dept: null}
                </div>
                <div>
                    <label>Adress</label>
                    <
                        input type="text" name="address" onChange={handleChange} values={values.address}/>
                    {errors.address ? errors.address : null}
                </div>
                <div>
                    <label>Age</label>
                    <input type="number" name="age" onChange={handleChange} values={values.age}/>
                    {errors.age ? errors.age: null}
                </div>
                <div>
                    <label>Blood Group</label>
                    <input type="bloodgrp" name="bloodgrp" onChange={handleChange} values={values.bloodgrp}/>
                    {errors.bloodgrp ? errors.bloodgrp : null}
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" onChange={handleChange} values={values.email}/>
                    {errors.email ? errors.email : null}
                </div>
                <div>
                    <label>Mobile NO</label>
                    <input type="number" name="mob" onChange={handleChange} values={values.mob}/>
                    {errors.mob ? errors.mob: null}
                </div>

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}


