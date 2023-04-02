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



const Form = () => {
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
                .required("Please enter your first name"),
            lname: Yup.string()
                .required("Please enter your last name"),
            uname: Yup.string()
                .required("Please create a user name")
                .min(3, "must be at least three characters long")
                .max(20, "User name cannot be more than twenty characters long"),
            email: Yup.string()
                .email("Invalid email address")
                .required("Please enter an email address"),
            password: Yup.string()
                .required("Please create a password"),
            phone: Yup.string()
                .max(12, "please enter a valid phone number")
        })
    })

    return (
        <form onSubmit="">
            <h1>Create a new account!</h1>
            <label for="fname">First Name</label>
            <input
                id="fname"
                type="text"
                placeholder="First name"
                required
                onChange={formik.handleChange}
                value={formik.values.fname}
                ></input>
            {formik.touched && formik.errors.fname ? (
                <span classname="error">{formik.errors.fname}</span>
            ) : null}
            <label for="lname">Last Name</label>
            <input
                id="lname"
                type="text"
                placeholder="Last name"
                required
                onChange={formik.handleChange}
                value={formik.values.lname}
                ></input>
            <label for="uname">Create User Name</label>
            <input
                id="uname"
                type="text"
                placeholder="User name"
                required
                onChange={formik.handleChange}
                value={formik.values.uname}
                ></input>
            {formik.touched && formik.errors.uname ? (
                <span classname="error">{formik.errors.uname}</span>
            ) : null}
            <label for="email">Email Address</label>
            <input
                id="email"
                type="text"
                placeholder="johnDoe@gmail.com"
                required
                onChange={formik.handleChange}
                value={formik.values.email}
                ></input>
            <label for="password1">Choose a password</label>
            <input
                id="password1"
                type="password"
                placeholder="(must be 5-14 characters)"
                minLength="5"
                maxLength="15"
                required
                onChange={formik.handleChange}
                value={formik.values.password}
                ></input>
            <label for="password2">Re-type password</label>
            <input
                id="password2"
                type="password"
                required
                onChange={formik.handleChange}
                value={formik.values.password}
                ></input>
            <label for="phone">Phone Number</label>
            <input
                id="phone"
                type="tel"
                placeholder="123-456-7891"
                onChange={formik.handleChange}
                value={formik.values.phone}
                ></input>
            <input className="formButton" type='submit' value="submit"></input>
        </form>
    )

}

export default Form;