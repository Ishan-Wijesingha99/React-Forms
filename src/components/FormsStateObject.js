
import React from "react";



// using form state object for forms with many input fields
export const FormWithManyFields = function() {
    // make the thing that is changing state an object, not a single variable, that way you can have multiple properties of the object as a state change
    const [inputObject, setInputObject] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        comments: '',
        isFriendly: false,
        employment: '',
        favColour: ''
    })

    console.log(inputObject)

    const handleInputChange = function(event) {

        setInputObject(prevObject => {
            return {
                ...prevObject,
                [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value
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


            {/* textarea is not self-closing in HTML like an input tag, but in React it is */}
            <textarea 
                value={inputObject.comments}
                placeholder="Comments"
                onChange={handleInputChange}
                name="comments"
            />


            {/* checkboxes are different because they only store booleans, not string values */}
            <input 
                type="checkbox"
                checked={inputObject.isFriendly}
                onChange={handleInputChange}
                name="isFriendly"
            />
            {/* this is how you label the checkbox input, htmlFor is used to identify which input this label belongs to */}
            <label htmlFor="isFriendly">Are you friendly?</label>


            {/* radio buttons */}
            {/* the way to make sure only one of the radio buttons can be selected at any one time, is to make them all have the same name property */}
            <fieldset>
                <legend>Current Employment Status</legend>


                <input 
                    type="radio"
                    name="employment"
                    id="unemployed"
                    value="unemployed"
                    onChange={handleInputChange}
                    checked={inputObject.employment === 'unemployed'}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />


                <input 
                    type="radio"
                    name="employment"
                    id="part-time"
                    value="part-time"
                    onChange={handleInputChange}
                    checked={inputObject.employment === 'part-time'}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />


                <input 
                    type="radio"
                    name="employment"
                    id="full-time"
                    value="full-time"
                    onChange={handleInputChange}
                    checked={inputObject.employment === 'full-time'}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />


                {/* select options */}
                <label htmlFor="favColor">What is your favorite color?</label>
                <br />
                <select 
                    id="favColor"
                    onChange={handleInputChange}
                    value={inputObject.favColour}
                    name="favColor"
                >
                    <option value="">-- Choose --</option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="indigo">Indigo</option>
                    <option value="violet">Violet</option>
                </select>
                

                {/* submitting a form */}
                


            </fieldset>
        </form>
    )
}
