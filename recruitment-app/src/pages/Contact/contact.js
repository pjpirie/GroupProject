import { Button } from '@material-ui/core';
import emailjs from 'emailjs-com';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLightNav } from '../../actions';
import contactBg from '../../assets/ContactBG.png'
import contactBubbles from '../../assets/ContactBubbles.png'
import './contact.css';

function Contact() {

    const [display, setDisplay] = useState(false);
    const dispatch = useDispatch();

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

    useEffect(() => {
        dispatch(setLightNav(false))
    }, [])

    return (
        <div className="contact-page">
            <div className="contact-header">
                <div className="contact-left">
                    <img src={contactBg} alt="" className="bigcircle"/>
                    <img src={contactBubbles} alt="" className="bubble"/>
                </div>
                <div className="contact-right">
                    <h1>Contact Us</h1>
                </div>
            </div>
            <div className="contact">        
                {
                    !display? 
                <div className="container-form">
                    <h2 className="form-h4">Get in touch below</h2>
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
                            <textarea className="textarea" required name="enquiry"/>
                        </label>

                        <Button type="submit" className="submitBtn">Submit</Button>
                    </form>
                </div>
                : null
                }
                {
                    display?
                    <div className="contact-message-container">
                        <div className="contact-message">
                            <h1 className="formSubmit">Thank you for contacting us with your enquiry</h1>
                            <h2 className="formSubmit">We will be in touch</h2>
                        </div>
                    </div>
                    : null
                }
            </div>
        </div>
    );
}

export default Contact;