
import React from "react";



// using form state object for forms with many input fields
export const FormWithManyFields = function() {
    // make the thing that is changing state an object, not a single variable, that way you can have multiple properties of the object as a state change
    const [inputObject, setInputObject] = React.useState({firstName: '', lastName: ''})

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
            />

            <input
                type="text"
                placeholder="Last Name"
                onChange={handleInputChange}
                name="lastName"
            />
        </form>
    )
}
