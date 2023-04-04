
const FormResult = (props) => {
    return (
        <>
            <label htmlFor="fname">First Name:</label>
            <p id="fname">{props.fname}</p>
            <label htmlFor="lname">Last Name:</label>
            <p id="lname">{props.lname}</p>
            <label htmlFor="uname">User Name:</label>
            <p id="uname">{props.lname}</p>
            <label htmlFor="email">Email:</label>
            <p id="email">{props.email}</p>
        </>
    )
}

export default FormResult;