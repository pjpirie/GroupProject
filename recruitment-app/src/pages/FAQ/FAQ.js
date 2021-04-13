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

    const [questions, setQuestion]=useState([
        {
            question: "Lorem Ipsum?",
            answer: "Lorem Ipsum",
            open: false
        },
        {
            question: "Lorem Ipsum?",
            answer: "Lorem Ipsum",
            open: false
        },
        {
            question: "Lorem Ipsum?",
            answer: "Lorem Ipsum",
            open: false
        }
    ])

    const toggleFAQ = index => {
        setQuestion(questions.map((question, i)=>{
            if(i===index){
                question.open = !question.open
            }else{
                question.open=false
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
                    <p onClick={() => { dispatch(setRedirect(true, `/contact`))} } className="faq-contact">Sign Up!</p>
                </div>
            </div>
        </div>
    )
}

export default FAQPage
