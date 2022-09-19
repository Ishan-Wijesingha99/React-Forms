import React from 'react';
import ReactDOM from 'react-dom/client';
import { Form } from './components/Form';
import { FormWithManyFields } from './components/FormsStateObject';
import { SignupForm } from './components/signupForm';
import './index.css'



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <Form /> */}
    {/* <FormWithManyFields /> */}
    <SignupForm />
  </React.StrictMode>
)

