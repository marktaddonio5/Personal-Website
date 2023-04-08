/*
Form will use Formik to client-side verify
Form will create a user account
    - require collect password, email, name, 
    - optional collect phone, 
Form will autofill userName based on name input

onsubmit will store data in an array, and then display it on a confirmation page or alert

maybe will use useReducer to store?

password1 and password2 must be the same 
*/
import {useFormik} from "formik"
import * as Yup from "yup";
import FormResult from "./FormResult";
import { useState } from "react";



const Form = () => {
    const [submitted, setSubmitted] = useState(false)

    const handleSubmitted = () => {
        if (submitted === false) {setSubmitted(true)}
        if (submitted === true) {setSubmitted(false)}
    }

    const formik = useFormik({
        initialValues: {
            fname:"",
            lname:"",
            uname:"",
            email:"",
            password: undefined,
            phone: "",
        },
        validationSchema: Yup.object().shape({
            fname: Yup.string()
                .required("Required")
                .min(2, "Please enter your name")
                .max(50, "This form can accepts names with maximum 50 characters"),
            lname: Yup.string()
                .required("Required")
                .min(2, "Please enter your name")
                .max(50, "This form can accepts names with maximum 50 characters"),
            uname: Yup.string()
                .required("Required")
                .min(3, "User name must be at least three characters long")
                .max(20, "User name cannot be more than twenty characters long"),
            email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
            password: Yup.string()
                .required("Required")
                .min(5, "Password must be at least five characters")
                .max(15, "Password cannot be more than fifteen characters"),
            phone: Yup.string()
                .max(12, "please enter a valid phone number")
        }),
        onSubmit: (values) => {
            /*alert(JSON.stringify(values, null, 1))*/
            handleSubmitted()
        },
    })

    if (submitted === false)
    return (
        <form onSubmit={formik.handleSubmit} className="form">
            <h1>Create a new account!</h1>
            <label htmlFor="fname">First Name</label>
            <input
                id="fname"
                name="fname"
                type="text"
                placeholder="First name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fname}
                style={
                    {borderColor: formik.touched.fname && formik.errors.fname ? "red" : null }
                }
                ></input>
                {formik.touched.fname && formik.errors.fname ? (
                    <span className="error">{formik.errors.fname}</span>
                ) : null}
            <label for="lname">Last Name</label>
            <input
                id="lname"
                name="lname"
                type="text"
                placeholder="Last name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lname}
                style={
                    {borderColor: formik.touched.lname && formik.errors.lname ? "red" : null }
                }
                ></input>
                {formik.touched.lname && formik.errors.lname ? (
                <span className="error">{formik.errors.lname}</span>
                ) : null}
            <label for="uname">Create User Name</label>
            <input
                id="uname"
                name="uname"
                type="text"
                placeholder="User name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.uname}
                style={
                    {borderColor: formik.touched.uname && formik.errors.uname ? "red" : null }
                }
                ></input>
                {formik.touched.uname && formik.errors.uname ? (
                <span className="error">{formik.errors.uname}</span>
                ) : null}
            <label for="email">Email Address</label>
            <input
                id="email"
                name="email"
                type="text"
                placeholder="johnDoe@gmail.com"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                style={
                    {borderColor: formik.touched.email && formik.errors.email ? "red" : null }
                }
                ></input>
                {formik.touched.email && formik.errors.email ? (
                <span className="error">{formik.errors.email}</span>
                ) : null}
            <label for="password1">Choose a password</label>
            <input
                id="password"
                type="password"
                name="password"
                placeholder="(must be 5-14 characters)"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                style={
                    {borderColor: formik.touched.password && formik.errors.password ? "red" : null }
                }
                ></input>
                {formik.touched.password && formik.errors.password ? (
                <span className="error">{formik.errors.password}</span>
                ) : null}
            <label for="phone">Phone Number</label>
            <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="123-456-7891"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                style={
                    {borderColor: formik.touched.phone && formik.errors.phone ? "red" : null }
                }
                ></input>
                {formik.touched.phone && formik.errors.phone ? (
                <span className="error">{formik.errors.phone}</span>
                ) : null}
            <input className="formButton" type='submit' value="Submit"></input>
        </form>
    )

    if (submitted === true)
    return (
        <div className="form">
        <FormResult 
            fname={formik.values.fname}
            lname={formik.values.lname}
            uname={formik.values.uname}
            email={formik.values.email}
        />
        <button onClick={handleSubmitted}>Return to form</button>
        </div>
    )
}

export default Form;