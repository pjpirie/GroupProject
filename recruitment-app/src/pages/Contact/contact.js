import { useState } from 'react';
import {Button} from '@material-ui/core';
import './contact.css'

function Contact() {

    const [display, setDisplay] = useState(false)
    // const [number, setNumber] = useState()

    const handelSubmit = (e) =>{
        e.PreventDefault()
        setDisplay(true)
        console.log('s')
    }

    const checkNumber = num =>{
        if(num.value.match(/^\d{10}$/)){
            
        }
        console.log(num.value)
    }

    return (
        <div className="contact-page">
            <div className="contact">
                <h1 className="contact-header">Contact Us</h1>
                {
                    !display?
                <form onSubmit={handelSubmit}>
                    <label className="label">
                        <p>Name</p>
                        <input type="text" className="input" required />
                    </label>

                    <label className="label">
                        <p>Email</p>
                        <input type="email" className="input" required />
                    </label>
                    
                    <label className="label">
                        <p>Number</p>
                        <input type="text" className="input" onChange={e => checkNumber(e.target.value)} required />
                    </label>

                    <label className="label">
                        <p>Category</p>
                        <select required className="input">
                            <option></option>
                            <option>Select 1</option>
                            <option>Select 2</option>
                            <option>Select 3</option>
                        </select> 
                    </label>

                    <label className="label">
                        <p>Enquiry</p>
                        <textarea className="textarea" rows="5" cols="74" required />
                    </label>

                    <Button type="submit" className="submitBtn">Submit</Button>
                </form>
                : null
                }
                {
                    display?
                <h1 className="formSubmit">Thank you for contacting us with your enquiry</h1>
                : null
                }
            </div>
        </div>
    );
}

export default Contact;