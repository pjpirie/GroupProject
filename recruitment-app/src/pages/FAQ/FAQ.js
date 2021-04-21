import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRedirect } from '../../actions';
import ModulesCompleted from '../../components/ModulesCompleted/ModulesCompleted';
import './FAQ.css';
import Logic from './Logic.js';

// import image from '../../assets/msg.png'

function FAQPage() {
    const dispatch = useDispatch();

    const name = useSelector(state => state.getAccount).user.firstName + " " + useSelector(state => state.getAccount).user.lastName

    const [questions, setQuestion] = useState([
        {
            question: "Will following the advice in each module guarantee I get a job?",
            answer: "No, However, If you follow the guidelines described in RSDP and spend time on preparation and compiling your Personal Action Plan you will significantly improve your chances of success.",
            open: false
        },
        {
            question: "Do I need to complete all 6 modules?",
            answer: "No. Everyone should complete Module 1 Preparation as this covers aspects common to all recruitment events. When you know the format you will be experiencing you can access the relevant modules. For Example if you are attending a Face to Face Interview and a Group Exercise focus on Modules 2 and 4.",
            open: false
        },
        {
            question: "What kinds of recruitment events does RSDP cover?",
            answer: "RSDP has modules covering all main elements used in recruitment events it can be tailored to suit specific events. By using the Action Items each person can create an individual Personal Action Plan.",
            open: false
        },
        {
            question: "Is RSDP designed for a particular level of job?",
            answer: "No. It is designed to be suitable for entry level to senior roles",
            open: false
        },
        {
            question: "Some people say that at an interview you should simply be yourself and let the interviewer assess your suitability for the role.",
            answer: "It is crucial that you should portray the “real you”. RSDP provides a framework which enables you to do this in the most effective way.",
            open: false
        },
        {
            question: "Does RSDP take the place of support people who advise those looking for jobs?",
            answer: "No. RSDP is most effective when combined with the expertise of experienced advisers and coaches.",
            open: false
        }
    ])

    const toggleFAQ = index => {
        setQuestion(questions.map((question, i) => {
            if (i === index) {
                question.open = !question.open
            } else {
                question.open = false
            }
            console.log(question.open)

            return question
        }))
    }

    return (
        <div className="faq-container">
            <div className="faq-pi">
                <ModulesCompleted form="pie" theme="dark" />
            </div>
            <div className="faq-info">
                <h1>{name}</h1>
            </div>
            <div className="faq-dropdown">
                <div className="faq-drop-heading">
                    <h1>FAQ</h1>
                </div>
                {
                    questions.map((question, i) =>
                        <Logic question={question} index={i} toggleFAQ={toggleFAQ} />
                    )
                }
                <div className="faq-contact-container">
                    <p onClick={() => { dispatch(setRedirect(true, `/contact`)) }} className="faq-contact">Contact us</p>
                </div>
            </div>
        </div>
    )
}

export default FAQPage
