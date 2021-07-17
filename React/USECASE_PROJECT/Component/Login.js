import React from 'react'
// import NavBar from './NavBar';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Form } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { Button } from 'bootstrap';


function Login() {

    const history= useHistory();
    const emailRegExp = "^[a-zA-Z0-9]{3,20}@gmail.com$";
    // const passRegExp = "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8}$";

    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid").required("Enter Email").matches(emailRegExp, "Enter valid Email"),
        password: Yup.string().required('Enter Password')
        // matches(passRegExp, "Must contain 8 Characters, Example - Abcd@123")
    })

    const { handleSubmit, handleChange, values, errors } = useFormik({
        initialValues: {
            email: '',
            password: ''
        },

        validationSchema,
        onSubmit(values) {
            console.log("Submitted");
            console.log(values);
            history.push("/loan");

        }
    })
    return (
        <div>
            <h2>Welcome</h2>
            {/* <NavBar /> */}
            <header className="App-header">
                <Form onSubmit={handleSubmit} noValidate>
                    <Form.Text style={{ textAlign: "center", fontSize: "25px" }}>
                        Login
                    </Form.Text>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" onChange={handleChange} values={values.email} placeholder="email" />
                        <div style={{ color: "red" }}>{errors.email ? errors.email : null}</div>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="passoword" onChange={handleChange} values={values.password} placeholder="password" />
                        <div style={{ color: "red" }}>{errors.password ? errors.password : null}</div>
                    </Form.Group>
                    <button type="submit">Login</button>
                    <Link to="home" className="btn btn-primary">
                        Login
                    </Link>
                </Form>
            </header>
        </div >
    );
};

export default Login
