import { Button } from '@material-ui/core';
import emailjs from 'emailjs-com';
import { useState } from 'react';
import Letter from '../../assets/letter.svg'
import './contact.scss';

function Contact() {

    const [display, setDisplay] = useState(false);

    const handelSubmit = (e) =>{

        e.preventDefault()
        
        setDisplay(true)
        
        // emailjs.sendForm('service_iqjz62q', 'template_i5kvdhs', e.target, 'user_hjOhdBEySuWYMcZA2nuWV')
        //     .then((result) => {
        //         console.log(result.text);
        //     }, (error) => {
        //         console.log(error.text);
        //     });
        // e.target.reset()
    }

    return (        
        <div className="contact">                

            <div className="contact__header">
                <div className="contact__header__left">
                    <h4 className="contact__header__h4">Need More Info?</h4>
                    <h3 className="contact__header__h3">Use the Form Below to Get in Touch</h3>
                </div>
                <div className="contact__header__right">
                    <img src={Letter} alt="Letter" className="contact__header__letter" />
                </div>
            </div>

            <div className="contact__form">
                <form className="contact__form__left" onSubmit={handelSubmit}>
                    {
                    !display?
                        <>
                        <label className="contact__form__left__label">Whats your name?</label>
                        <input className="contact__form__left__input" type="text" placeholder="Jon Doe" required/>
                        <label className="contact__form__left__label">And your email address?</label>
                        <input className="contact__form__left__input" type="email" placeholder="jondoe@mail.com" required/>
                        <label className="contact__form__left__label">What number can we reach you on?</label>
                        <input className="contact__form__left__input" type="text" placeholder="0987654210"  pattern="^\d{11}$" required/>
                        <label className="contact__form__left__label">And what is your enquiry about?</label>
                        <textarea className="contact__form__left__input contact__form__left__area" required/>
                        <Button type="submit" className="contact__form__left__input contact__form__left__submit">SUBMIT</Button>
                        </>
                    : null
                    }{
                    display?
                        <>
                        <h3 className="contact__form__left__post">Thanks for contacting us with your enquiry</h3> <br />
                        <h3 className="contact__form__left__post">We will be in touch ASAP</h3>
                        </>
                : null
            }
                </form>
                <div className="contact__form__right">
                    <p className="contact__form__right__info">If you don’t fancy using the form you can contact us by email:</p>
                    <p className="contact__form__right__email">info@info.co.uk</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;