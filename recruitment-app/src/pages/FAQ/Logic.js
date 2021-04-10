import React from 'react'
import './FAQ.css'


function Logic({question, index, toggleFAQ}) {
    return (
        <div className={"faq " + (question.open ? 'open':'')} key={index} onClick={()=>toggleFAQ(index)}>
                <div className="faq-question">
                    {question.question}
                </div>
                <div className="faq-answer">
                    {question.answer}
                </div>
                {/* <div>
                    <button onClick={()=>toggleFAQ(index)}>Click</button>
                </div> */}
        </div>
    )
}

export default Logic
