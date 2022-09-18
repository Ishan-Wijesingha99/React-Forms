
import React from "react";



// using form state object for forms with many input fields
export const FormWithManyFields = function() {
    // make the thing that is changing state an object, not a single variable, that way you can have multiple properties of the object as a state change
    const [inputObject, setInputObject] = React.useState({firstName: '', lastName: '', email: ''})

    console.log(inputObject)

    const handleInputChange = function(event) {

        setInputObject(prevObject => {
            return {
                ...prevObject,
                [event.target.name]: event.target.value
            }
        })

    }

    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleInputChange}
                name="firstName"
                value={inputObject.firstName}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleInputChange}
                name="lastName"
                value={inputObject.lastName}
            />
            <input
                type="text"
                placeholder="Email"
                onChange={handleInputChange}
                name="email"
                value={inputObject.email}
            />
        </form>
    )
}
