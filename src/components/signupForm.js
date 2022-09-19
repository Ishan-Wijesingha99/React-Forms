
import React from "react";



export const SignupForm = function() {
    const [formData, setFormData] = React.useState({
        email: '',
        password: '',
        confirmPassword: '',
        joinNewsletter: false
    })

    console.log(formData)

    const handleInputChange = function(event) {
        setFormData(prevObject => {
            return {
                ...prevObject,
                [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value
            }
        })
    }

    const submitForm = function(event) {
        event.preventDefault()

        if(formData.password === formData.confirmPassword) {
            console.log('Successfully signed up')
        } else {
            console.log('Passwords do not match')
        }

        if(formData.joinNewsletter && formData.password === formData.confirmPassword) {
            console.log('Thanks for signing up for our newsletter!')
        }
    }

    return (
        <div className="signup-form-container">
            <form className="singup-form" onSubmit={submitForm}>
                <input
                    name="email"
                    id="signup-email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                />
                <br />

                <input
                    name="password"
                    id="signup-password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                />
                <br />
                
                <input
                    name="confirmPassword"
                    id="signup-confirm-password"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                />
                <br />

                <input 
                    type="checkbox"
                    name="joinNewsletter"
                    id="join-newsletter"
                    value={formData.joinNewsletter}
                    onChange={handleInputChange}
                />
                <label htmlFor="joinNewsletter">I want to join the newsletter</label>
                <br />

                <button id="signup-button" type="submit">Sign up</button>
            </form>
        </div>
    )
}