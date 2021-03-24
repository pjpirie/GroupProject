import { useState } from 'react';
import {Button} from '@material-ui/core';
import emailjs from 'emailjs-com'
import './contact.css'

import {Line} from 'react-lineto';


function Contact() {

    function values (){
        const v = ["10", "20", "30", "40"]
    } 

    const [display, setDisplay] = useState(false)
    // const [number, setNumber] = useState()

    const handelSubmit = (e) =>{

        e.preventDefault()
        
        setDisplay(true)

        console.log('s')

        
        emailjs.sendForm('service_iqjz62q', 'template_i5kvdhs', e.target, 'user_hjOhdBEySuWYMcZA2nuWV')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        // e.target.reset()
    }

    // const checkNumber = num =>{
    //     if(num.value.match(/^\d{10}$/)){
    //      onChange={e => checkNumber(e.target.value)} 
    //     }
    //     console.log(num.value)
    // }

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
                        <input type="email" className="input" required name="email" />
                    </label>
                    
                    <label className="label">
                        <p>Number</p>
                        <input type="text" className="input" required name="number" />
                    </label>

                    <label className="label">
                        <p>Category</p>
                        <select required className="input" name="category">
                            <option></option>
                            <option>Select 1</option>
                            <option>Select 2</option>
                            <option>Select 3</option>
                        </select> 
                    </label>

                    <label className="label">
                        <p>Enquiry</p>
                        <textarea className="textarea" rows="5" cols="74" required name="enquiry" />
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
                <Line x0={values.v(0)} y0={values.v(1)} x1={values.v(2)} y1={values.v(3)} borderWidth={10} />
                </div>
        </div>
    );
}

export default Contact;