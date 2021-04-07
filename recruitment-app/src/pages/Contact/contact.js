import { useSelector } from 'react-redux'
import { Redirect } from 'react-router';

import { Button } from '@material-ui/core';
import emailjs from 'emailjs-com';
import { useState } from 'react';
import './contact.css';
function Contact() {

    const [display, setDisplay] = useState(false)

    const handelSubmit = (e) =>{

        e.preventDefault()
        
        setDisplay(true)
        
        emailjs.sendForm('service_iqjz62q', 'template_i5kvdhs', e.target, 'user_hjOhdBEySuWYMcZA2nuWV')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        // e.target.reset()
    }

    return (
        <div className="contact-page">
            <div className="contact">
                <h1 className="contact-header">Contact Us</h1>
                {
                    !display?
                <form onSubmit={handelSubmit} className="contact-form">
                    <label className="label">
                        <p>Name</p>
                        <input type="text" className="input" required name="name" />
                    </label>

                    <label className="label">
                        <p>Email</p>
                        <input type="email" className="input" required name="email"/>
                    </label>
                    
                    <label className="label">
                        <p>Number</p>
                        <input type="text" className="input" required name="number" pattern="^\d{11}$" />
                    </label>

                    <label className="label">
                        <p>Category</p>
                        <select required className="input-select" name="category">
                            <option></option>
                            <option>Select 1</option>
                            <option>Select 2</option>
                            <option>Select 3</option>
                        </select> 
                    </label>

                    <label className="label">
                        <p>Enquiry</p>
                        <textarea className="textarea" rows="5" cols="74" required name="enquiry"/>
                    </label>

                    <Button type="submit" className="submitBtn button-style">Submit</Button>
                </form>
                : null
                }
                {
                    display?
                    <div className="contact-message">
                        <h1 className="formSubmit">Thank you for contacting us with your enquiry</h1>
                        <h2 className="formSubmit">We will be in touch</h2>
                    </div>
                    : null
                }
            </div>
        </div>
    );
}

export default Contact;