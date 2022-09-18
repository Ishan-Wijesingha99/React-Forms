
import React from "react";



// in regular javascript, when the submit button is clicked on a form, the values inside the input fields are captured as variables and sent to the backend, but in React, we constantly watch for state changes in each input field, when a new letter is typed, when a letter is backspaced, the state is watched for changes

// EVERY TIME a state change occurs, the entire component is rerendered, meaning all the code inside the functional component is rerun

export const Form = function() {

    // the initial value for firstName and lastName should be an empty string, because the input fields will start as blank
    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')

    const handleFirstNameChange = function(event) {
        // event.target is the DOM element in question, so in this case it will be the <input /> HTML
        // event.target.value is what is written inside the input field
        setFirstName(event.target.value) // everytime the input field changes, change the state so that firstName is the event.target.value
    }

    const handleLastNameChange = function(event) {
        setLastName(event.target.value) 
    }

    console.log(firstName)
    console.log(lastName)

    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                // every input field has an attribute called onChange
                onChange={handleFirstNameChange}
            />

            <input
                type="text"
                placeholder="Last Name"
                onChange={handleLastNameChange}
            />
        </form>
    )
}