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

const Form = () => {
    function handleSubmit(){

    }

    return (
       
        <form onSubmit={handleSubmit}>
            <h1>Create a new account!</h1>
            <label for="fname">First Name</label>
            <input
                id="fname"
                type="text"
                placeholder="First name"
                required></input>
            <label for="lname">Last Name</label>
            <input
                id="lname"
                type="text"
                placeholder="Last name"
                required></input>
            <label for="uname">Create User Name</label>
            <input
                id="uname"
                type="text"
                placeholder="User name"
                required></input>
            <label for="email">Email Address</label>
            <input
                id="email"
                type="text"
                placeholder="johnDoe@gmail.com"
                required></input>
            <label for="password1">Choose a password</label>
            <input
                id="password1"
                type="password"
                placeholder="(must be 5-14 characters)"
                minLength="5"
                maxLength="15"
                required></input>
            <label for="password2">Re-type password</label>
            <input
                id="password2"
                type="password"
                required></input>
            <label for="phone">Phone Number</label>
            <input
                id="phone"
                type="tel"
                placeholder="123-456-7891"
                ></input>
            <input className="formButton" type='submit' value="submit"></input>
        </form>
    )

}

export default Form;