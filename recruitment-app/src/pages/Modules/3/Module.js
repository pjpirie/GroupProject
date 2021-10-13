import React, { useState } from 'react';
import Eta from '../../../components/ETA/Eta';
import '../ModuleGlobal.css';
import './Module.scss';
import CloseButtonImage from '../../../assets/1x/closeicon.png';
import CloseButtonImageDo from '../../../assets/1x/cross.png';
import RSDPModuleLogo from '../../../components/RSDPModuleLogo/RSDPModuleLogo';

function Module() {

    async function DownloadMedia() {
        return fetch('https://rsdp-backend.herokuapp.com/download2', {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                // the filename you want
                a.download = 'Module 2 Interview Action Items';
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
                // alert('your file has downloaded!'); // or you know, something with better UX...
            })
            .catch(() => alert('Issue Downloading File. Please Try Again Later'));
    }

    const handleDownload = () => {
        DownloadMedia();
    };

    const [btnVal, btnClick] = useState(false)

    const modalOpen =(num)=>{
        if(document.querySelector(`.module2__body__main__do__wrapper__do__active`)){document.querySelector(`.module2__body__main__do__wrapper__do__active`).classList.remove(`module2__body__main__do__wrapper__do__active`)}
        if(document.querySelector(`.module2__body__main__do__wrapper__dont__active`)){document.querySelector(`.module2__body__main__do__wrapper__dont__active`).classList.remove(`module2__body__main__do__wrapper__dont__active`)}
        btnClick(num)
        let type = 'buttons'
        console.log(num)
        
        
        if(num===16||num===17){
            type='do'
            if(num===16){return document.querySelector(`.module2__body__main__do__wrapper__do`).classList.add(`module2__body__main__do__wrapper__do__active`)}
            if(num===17){return document.querySelector(`.module2__body__main__do__wrapper__dont`).classList.add(`module2__body__main__do__wrapper__dont__active`)}
            document.querySelector(`.module2__body__main__do__wrapper__do`).classList.add(`module2__body__main__do__wrapper__do__active`)
            document.querySelector(`.module2__body__main__do__wrapper__dont`).classList.add(`module2__body__main__do__wrapper__dont__active`)
        }
        let active = document.querySelector(`.module2__body__main__${type}__wrapper__active`)
        if(active){
            active.classList.remove(`module2__body__main__${type}__wrapper__active`)
        }
        document.querySelector(`#btn${num}`).classList.add(`module2__body__main__${type}__wrapper__active`)
    }

    const modalClose=()=>{
        btnClick(0)
        if(document.querySelector(`.module2__body__main__do__wrapper__do__active`)){document.querySelector(`.module2__body__main__do__wrapper__do__active`).classList.remove(`module2__body__main__do__wrapper__do__active`)}
        if(document.querySelector(`.module2__body__main__do__wrapper__dont__active`)){document.querySelector(`.module2__body__main__do__wrapper__dont__active`).classList.remove(`module2__body__main__do__wrapper__dont__active`)}
        if(document.querySelector('.module2__body__main__buttons__wrapper__active')){document.querySelector('.module2__body__main__buttons__wrapper__active').classList.remove('module2__body__main__buttons__wrapper__active')}
        if(document.querySelector('.module2__body__main__do__wrapper__active')){document.querySelector('.module2__body__main__do__wrapper__active').classList.remove('module2__body__main__do__wrapper__active')}
    }

    return (
        <div className="module2">
            <RSDPModuleLogo />
            <div className="module2__header">
                <div className="module2__header__text">
                    <h3>MODULE TWO</h3>
                    <h1>Face to Face Interview</h1>
                </div>
                <Eta time={10} />
            </div>
            <div className="module2__body">
                <div className="module2__body__video">
                    <video id="Video" autoplay controls>
                        <source src="https://rsdp-backend.herokuapp.com/video/2" type="video/mp4"></source>
                    </video>
                </div>
                <p className="KeyLearningPoints">
                        Key Learning Points
                    </p>
                <div className="module2__body__main">
                    <p className="module2__body__main__p">Interviews can be a daunting and nerve-racking experience but you can prepare to succeed with the tips and techniques within this module. Learn all about the three styles of questions you may experience at your next interview and start preparing your answers today.</p>
                    <div className="module2__body__main__text">
                        <div className="module2__body__main__text__left">
                            <h3>Follow the tips and techniques below to succeed at interview</h3>
                        </div>
                        <div className= "module2__body__main__text__right">
                            <h3>Feel confident and prepared in the interview with these tips and techniques that will enhance your chances of success. Learn the ten most important things you can do to leave a positive and lasting impression.</h3>
                        </div>
                    </div>
                    <div className="module2__body__main__consider">
                        <h1>10 Tips</h1>
                        <h3>1. First Contact</h3>
                        <h4>A recent survey indicated that 33% of interviewers stated that they made their hiring decision within the first 90 seconds. So, what first impression do you want to create?</h4>
                        <h3>2. Body Language</h3>
                        <h4>Definition: “The conscious and unconscious movements and postures by which attitudes and feelings are communicated.” So, what attitudes and feelings do you want to communicate?</h4>
                        <h3>3. Voice and Delivery</h3>
                        <h4>Voice is critical in any recruitment process consequently you have to consider carefully how you are coming over both in terms of clarity and what messages you are conveying about yourself.</h4>
                        <h3>4. Answer the question asked, not the one you hoped would be asked</h3>
                        <h4>One of the most common mistakes in interviews is an amazingly simple one where a candidate answers a question that she or he hoped would be asked as opposed to answering what has actually been asked. This sounds obvious, however, it is critical that you take time and focus on what the interviewer has actually said. If you are unsure it is perfectly reasonable to ask for clarification.</h4>
                        <h3>5. Keep your Responses Concise</h3>
                        <h4>Concise means giving a lot of information clearly and in a few words. Watch how your answers are being received. If you detect signs of boredom finish what you are saying as quickly as possible. </h4>
                        <h3>6. Ask Questions</h3>
                        <h4>If you are asked do you have any questions be prepared and ask one or two about the role and the company. Prepare a few questions in advance so that you can convey that you have researched the company and the role. Don’t overdo this. Keep it short.</h4>
                        <h3>7. Last Impressions Last</h3>
                        <h4>Thank the interviewer(s)and if appropriate shake hands.</h4>
                        <h3>8. Be Honest Throughout</h3>
                        <h4>On a practical level it is too easy to be found out and lying causes stress which can be detected, and it can also lead to confusion. If an interviewer believes a candidate is lying it will almost inevitably cause them to be rejected.</h4>
                        <h3>9. Remember That you are “On Stage” from Arrival to Departure</h3>
                        <h4>From your arrival to your departure your behaviour may be assessed whether formally or informally by all members of staff with whom you are in contact. Receptionists, security staff, someone who takes you for a coffee and any other people you may encounter may pass on their opinions of you.</h4>
                        <h3>10. Review your Performance</h3>
                        <h4>All successful performers (actors, sports people, sales people) always assess how they performed after an event with a view to improving next time. This is not being defeatist rather it is using experience in order to learn.</h4>
                    </div>
                    <div className="module2__body__main__text">
                        <div className="module2__body__main__text__left">
                            <h4>Styles of Questions</h4>
                            <h3>We will now look at three common types of interview questions</h3>
                        </div>
                        <div className= "module2__body__main__text__right">
                            <h3>There are three styles of questions that you may be asked during an interview.</h3>
                            <li>General</li> <br />
                            <li>Competency Based</li> <br />
                            <li>Strength Based</li> <br />
                            <h3>Below is an overview of each of these along with some example questions</h3>
                        </div>
                    </div>
                    <div className="module2__body__main__buttons">
                        <h1>General Questions</h1>
                        <p>This type of question is often used to give candidates an opportunity to “loosen up” and ease themselves into the interview. Read the questions and have a think about what your response might be. Click on the questions to see example answers.</p>
                        <div className="module2__body__main__buttons__wrapper">
                            <button onClick={()=>modalOpen(1)} id="btn1" className="module2__body__main__buttons__wrapper__1"><p>Tell me/us a bit about yourself</p></button>
                            <button onClick={()=>modalOpen(2)} id="btn2" className="module2__body__main__buttons__wrapper__2"><p>Why did you apply for this job?</p></button>
                            <button onClick={()=>modalOpen(3)} id="btn3" className="module2__body__main__buttons__wrapper__3"><p>What do you know about our organisation?</p></button>
                        </div>
                        <div className="module2__body__main__buttons__modal">
                            {
                                btnVal === 0?
                                <>
                                </>
                                :null
                            }
                            {
                                btnVal === 1?
                                    <div className="module2__body__main__buttons__modal__show">
                                        <img src={CloseButtonImage} alt="Close" className="close__btn" onClick={modalClose}/>
                                        <h1>Tell me/us a bit about yourself</h1>
                                        <h2>This question is often used at the start of the interview, so it gives you a great chance to create a positive first impression. Talk about your skills and achievements, work related or in any other areas, for example voluntary activities or at school / college / university. Try to connect these to the role you’ve applied for. Keep your answer short, two or three minutes.</h2>
                                    </div>
                                
                                :null
                            }
                            {
                                btnVal === 2?
                                    <div className="module2__body__main__buttons__modal__show">
                                    <img src={CloseButtonImage} alt="Close" className="close__btn" onClick={modalClose}/>
                                        <h1>Why did you apply for this job?</h1>
                                        <h2>Show that you’ve researched the role by discussing aspects of the job that connect with what you enjoy doing, for example face to face contact with people or dealing with customers on the phone. Highlight particular aspects of the job that attracted you.</h2>
                                    </div>
                                
                                :null
                            }
                            {
                                btnVal === 3?
                                    <div className="module2__body__main__buttons__modal__show">
                                        <img src={CloseButtonImage} alt="Close" className="close__btn" onClick={modalClose}/>
                                        <h1>What do you know about our organisation?</h1>
                                        <h2>Focus on brief details, for example, main purpose, key achievements and some interesting facts. The purpose is to show that you have researched the organisation. Again, keep your answer brief giving a few specific details.</h2>
                                    </div>
                                
                                :null
                            }
                        </div>
                    </div>
                    <div className="module2__body__main__questions">
                        <h1>Competency Based Questions</h1>
                        <p>These are sometimes called behavioural or situational questions and they are designed to check your skills or competencies. The interviewer wants to know that in the past you have demonstrated that you have the necessary behaviours required for the role on offer. If you can show that you have applied relevant skills, then you should be able to repeat this if you get this job. They are very different from general questions which tend to be more informal. Competency based questions are much more systematic and specific, therefore your answers need to follow a clear structure.</p>
                        <div className="module2__body__main__questions__box">
                            <h1>Competency based questions often have an identifiable opening phrase or sentence. Check out these examples to help you identify them.</h1>
                            <p>“Describe a situation in which you had to…”</p>
                            <p>“Give an example of a time you…”</p>
                            <p>“Tell me/us about an important decision you had to make…”</p>
                            <p>“Describe a project that you were involved in and what was your specific role.”</p>
                            <p>“Give me/us an example of a challenge you faced at work and how you dealt with it”</p>
                        </div>
                    </div>
                    <div className="module2__body__main__text">
                        <div className="module2__body__main__text__left">
                            <h3>How to answer competency based question.</h3>
                        </div>
                        <div className= "module2__body__main__text__right">
                            <h3>There are clear rules which must be applied in order to perform well. There is a useful structure which is used to summarise how to answer competency based questions.</h3>
                        </div>
                    </div>
                    <div className="module2__body__main__star">
                        <h1><span>STAR</span> - <span>S</span>ituation, <span>T</span>ask, <span>A</span>ction(s), <span>R</span>esult(s)</h1>
                        <p>Review the following example questions and the answers provided based on the STAR method.</p>
                        <p>Q - “Describe a situation in which you had to deal with an angry customer”</p>
                        <div className="module2__body__main__star__wrapper">
                            <button onClick={()=>modalOpen(4)} id="btn4" className="module2__body__main__star__wrapper__1">Situation</button>
                            <button onClick={()=>modalOpen(5)} id="btn5" className="module2__body__main__star__wrapper__2">Task</button>
                            <button onClick={()=>modalOpen(6)} id="btn6" className="module2__body__main__star__wrapper__3">Action</button>
                            <button onClick={()=>modalOpen(7)} id="btn7" className="module2__body__main__star__wrapper__4">Result</button>
                        </div>
                        <div className="module2__body__main__star__modal">
                            {
                                btnVal === 0?
                                <>
                                </>
                                :null
                            }
                            {
                                btnVal === 4?
                                    <div className="module2__body__main__star__modal__show">   
                                        <img src={CloseButtonImage} alt="Close" className="close__btn" onClick={modalClose}/>
                                        <h1>Situation</h1>
                                        <h2>Explain the background to the events which you are describing.</h2>
                                        <h4>“I was working as a sales assistant in XYZ clothing store in the centre of Birmingham when a customer approached me in a very aggressive way, shouting and holding up a jacket and complaining that there was a rip in the lining.”</h4>
                                    </div>
                                
                                :null
                            }
                            {
                                btnVal === 5?
                                    <div className="module2__body__main__star__modal__show">   
                                        <img src={CloseButtonImage} alt="Close" className="close__btn" onClick={modalClose}/>
                                        <h1>Task</h1>
                                        <h2>What were you trying to achieve in this situation?</h2>
                                        <h4>“I tried to resolve this customer’s problem in the most effective way for her and for the business”                                  </h4>
                                        
                                    </div>
                                :null
                            }
                            {
                                btnVal === 6?
                                    <div className="module2__body__main__star__modal__show">   
                                        <img src={CloseButtonImage} alt="Close" className="close__btn" onClick={modalClose}/>
                                        <h1>Action</h1>
                                        <h2>What did you do? What actions did you take?</h2>
                                        <h4>“Firstly I began to calm her down by indicating that I was sorry that she was upset and I assured her that I would help. Then I asked her to tell me what was the problem. I assured her that I could resolve this and offered to exchange the item or give her a refund provided she had the receipt”.</h4>
                                        
                                    </div>
                                :null
                            }
                            {
                                btnVal === 7?
                                    <div className="module2__body__main__star__modal__show">   
                                        <img src={CloseButtonImage} alt="Close" className="close__btn" onClick={modalClose}/>
                                        <h1>Result</h1>
                                        <h2>What was the overall outcome?</h2>
                                        <h4>“The customer calmed down and I showed her a number of other jackets and she chose one, apologised for shouting and left the store”.</h4>
                                    </div>
                                :null
                            }
                        </div>
                    </div>
                    <div className="module2__body__main__mistake">
                        <h1>Common mistakes to avoid</h1>
                        <p>There are a number of common mistakes that may be made when answering competency based questions. Have a look below to find out what they are.</p>
                        <div className="module2__body__main__mistake__wrapper">
                            <button onClick={()=>modalOpen(8)} id="btn8" className="module2__body__main__mistake__wrapper__1">Too General</button>
                            <button onClick={()=>modalOpen(9)} id="btn9" className="module2__body__main__mistake__wrapper__2">Team Focus </button>
                            <button onClick={()=>modalOpen(10)} id="btn10" className="module2__body__main__mistake__wrapper__3">Job Focus</button>
                        </div>
                        <div className="module2__body__main__mistake__modal">
                            {
                                btnVal === 0?
                                <>
                                </>
                                :null
                            }
                            {
                                btnVal === 8?
                                <div className="module2__body__main__mistake__modal__show">   
                                        <img src={CloseButtonImage} alt="Close" className="close__btn" onClick={modalClose}/>
                                        <h1>Too General</h1>
                                        <h2>Give a general answer not referring to a specific situation</h2>
                                        <h4>“I used to get lots of angry customers. How I dealt with them was to use my customer service skills and my empathy to show that I always put the customer first.”</h4>
                                    </div>
                                
                                :null
                            }
                            {
                                btnVal === 9?
                                <div className="module2__body__main__mistake__modal__show">   
                                        <img src={CloseButtonImage} alt="Close" className="close__btn" onClick={modalClose}/>
                                        <h1>Team Focus</h1>
                                        <h2>Refer to team performance rather than focusing on what YOU did</h2>
                                        <h4>“Our team dealt with complaints so we had to talk to angry customers every day. We used to apply the skills we learned in our customer service training and if anyone had difficulties we all came in to help.”</h4>
                                    </div>
                                :null
                            }
                            {
                                btnVal === 10?
                                <div className="module2__body__main__mistake__modal__show">   
                                        <img src={CloseButtonImage} alt="Close" className="close__btn" onClick={modalClose}/>
                                        <h1>Job Focus</h1>
                                        <h2>Describe jobs you held when you had to deal with this kind of situation</h2>
                                        <h4>“I worked in a bar in the city centre where many of the customers drank heavily and would then get awkward, so I had to learn quickly how to deal with them. Later I became a receptionist in a busy hotel where the system kept breaking down and rooms were double booked regularly. This really upset the customers and I had to figure out how to calm them down.”</h4>
                                    </div>
                                :null
                            }
                        </div>
                    </div>
                    <div className="module2__body__main__card">
                        <h1>The overriding rules to be applied</h1>
                        <p>Be specific about situations</p>
                        <h2>1.	Refer to “I” not “We”</h2>
                        <h2>2.	Always follow the STAR process</h2>
                    </div>
                    <div className="module2__body__main__strength">
                        <h1>Strength Based Questions</h1>
                        <p>As the name suggests these questions are intended to identify what the candidate  enjoys doing, as opposed to what she/he has done which is the focus with competency based questions. From your answers and how you deliver them the interviewer(s) assess what you’re good and maybe not so good at. The intention is to match strengths to the role, resulting in a happier worker who will perform well, learn quickly and stay longer.</p>
                        <p>These questions are more personal and are intended to identify people who will be a good fit for the role and the organisation.</p>
                        <div className="module2__body__main__strength__box">
                            <h1>Check out these examples of strengths based questions.</h1>
                            <p>Firstly, the interviewer is attempting to understand you as a person, therefore, you will probably be asked a lot of questions in a short time period. The focus will depend on the job as obviously different strengths are required depending on the role.</p>
                            <p>“What do you like to do when you are not working?”</p>
                            <p>“How would your work colleagues and friends describe you?”</p>
                            <p>“What are you/are you not particularly good at?”</p>
                            <p>“Tell me/us about something you’re really proud of?”</p>
                            <p>“How do you motivate yourself, even during a bad day?”</p>
                            <p>“How good are you at working to a tight deadline?”</p>
                            <p>“What is it about this this role that really excites you?”</p>
                        </div>
                    </div>
                    <div className="module2__body__main__text">
                        <div className="module2__body__main__text__left">
                            <h3>How to answer strengths based questions</h3>
                        </div>
                        <div className= "module2__body__main__text__right">
                            <h3>Some experts suggest that it is best not to over prepare. “Be yourself and answer authentically”. This is valid advice, however, more specific preparation and applying simple techniques can increase your chances of success.</h3>
                        </div>
                    </div>
                    <div className="module2__body__main__list">
                        <p>Think about your strengths and practice talking about them. Consider the following:</p>
                        <li>What is it that I do well?</li>
                        <li>When have I done my best work?</li>
                        <p>From your answers build a structure which you can apply when asked most strength based questions</p>
                    </div>
                    <div className="module2__body__main__mistake">
                        <h2><span>SEE</span> - <span>S</span>trengths, <span>E</span>nthusiasm, <span>E</span>xamples</h2>
                        <div className="module2__body__main__mistake__wrapper">
                            <button onClick={()=>modalOpen(11)} id="btn11" className="module2__body__main__mistake__wrapper__1">Strength</button>
                            <button onClick={()=>modalOpen(12)} id="btn12" className="module2__body__main__mistake__wrapper__2">Enthusiasm</button>
                            <button onClick={()=>modalOpen(13)} id="btn13" className="module2__body__main__mistake__wrapper__3">Examples</button>
                        </div>
                        <div className="module2__body__main__mistake__modal">
                            {
                                btnVal === 0?
                                <>
                                </>
                                :null
                            }
                            {
                                btnVal === 11?
                                    <div className="module2__body__main__mistake__modal__show">   
                                        <img src={CloseButtonImage} alt="Close" className="close__btn" onClick={modalClose}/>
                                        <h1>Strengths</h1>
                                        <h2>Things you can do well</h2>
                                        <h4>Organise, Communicate, Plan Ahead, Work in a Team, Deal with Pressure</h4>
                                    </div>
                                
                                :null
                            }
                            {
                                btnVal === 12?
                                    <div className="module2__body__main__mistake__modal__show">   
                                        <img src={CloseButtonImage} alt="Close" className="close__btn" onClick={modalClose}/>
                                        <h1>Enthusiasm</h1>
                                        <h2>Intense and eager enjoyment</h2>
                                        <h4>Demonstrate this as you are describing your strengths</h4>
                                        
                                    </div>
                                :null
                            }
                            {
                                btnVal === 13?
                                    <div className="module2__body__main__mistake__modal__show">   
                                        <img src={CloseButtonImage} alt="Close" className="close__btn" onClick={modalClose}/>
                                        <h1>Examples</h1>
                                        <h2>Times when you have demonstrated your strengths</h2>
                                        <h4>Illustrations of when you have shown your strengths</h4>
                                    </div>
                                :null
                            }
                        </div>
                    </div>
                    <div className="module2__body__main__buttons">
                        <h6>Read the questions and have a think about your what your response might be.</h6>
                        <div className="module2__body__main__buttons__wrapper">
                            <button onClick={()=>modalOpen(14)} id="btn14" className="module2__body__main__buttons__wrapper__1"><p>What are you particularly good at?</p></button>
                            <button onClick={()=>modalOpen(15)} id="btn15" className="module2__body__main__buttons__wrapper__2__1"><p>How good are you at working a tight deadline?</p></button>
                        </div>
                        <div className="module2__body__main__buttons__modal">
                            {
                                btnVal === 0?
                                <>
                                </>
                                :null
                            }
                            {
                                btnVal === 14?
                                    <div className="module2__body__main__buttons__modal__show">
                                        <img src={CloseButtonImage} alt="Close" className="close__btn" onClick={modalClose}/>
                                        <h1>What are you particularly good at?</h1>
                                        <h2><span>STRENGTH - Organising </span><br /> “I am particularly good at organising. I really enjoy bringing order into chaotic situations. It gives me a real buzz. Last month our team moved to a different location in the warehouse and we had to set up our work stations and sort out who was doing what. I made a point of clearing a space and setting up my area neatly in order to make it easy for me to access everything. A few colleagues watched me and asked if I could help them. I jumped at the chance as it meant we were all ready more quickly and I really enjoy supporting other members of my team. When our manager came round an hour later she was amazed that we were fully operational in such a short time. I get a real kick out of organising things whether at work or in my private life. I am a “lists person” and it gives me great satisfaction to tick things off at the end of the day and see what I have achieved and begin to plan for what will be completed tomorrow.”</h2>
                                    </div>
                                
                                :null
                            }
                            { 
                                btnVal === 15?
                                    <div className="module2__body__main__buttons__modal__show">
                                        <img src={CloseButtonImage} alt="Close" className="close__btn" onClick={modalClose}/>
                                        <h1>How good are you at working to a tight deadline?</h1>
                                        <h2><span>STRENGTH – Dealing with Pressure</span><br />“When the pressure is on I seem to get an extra boost. It gives me a clear focus and I really enjoy the challenge. At the end of every month my team puts together a performance report for our division and it has to be with the senior management team by close of business on the first of the new month. Three months ago we had a major system problem just as we were about to complete our report. It meant we couldn’t input any data and the I.T. department couldn’t say how long it would take to remedy the situation. I have five people in my team so I got everybody together and asked for ideas in a quick brainstorming session. I love these meetings where everybody is throwing in suggestions, some very practical, others off the wall and sometimes outrageous. We had a real buzz going and I could feel the energy in the room as we all pushed to get results. Within a short time we had a number of action items which we all began to pursue and within two hours we had a clear plan which we then implemented. I contacted my boss with the good news and at lunchtime he came round with a load of cakes and other treats which we all shared as part of our celebration. I find that the more often that kind of thing happens the better we are at dealing with the crisis. I love it, the adrenalin rush, the drive within the team and the terrific sense of achievement when you finally succeed. There’s nothing like it!”  </h2>
                                    </div>
                                
                                :null
                            }
                        </div>
                    </div>
                    <div className="module2__body__main__do">
                        <h1>Enthusiasm - The Dos and Don’ts</h1>
                        <div className="module2__body__main__do__wrapper">
                            <button onClick={()=>modalOpen(16)} id="btn16" className="module2__body__main__do__wrapper__do"><p className="module2__body__main__do__wrapper__do__p">DO</p></button>
                            <button onClick={()=>modalOpen(17)} id="btn17" className="module2__body__main__do__wrapper__dont"><p className="module2__body__main__do__wrapper__dont__p">DON'T</p></button>
                        </div>
                        <div className="module2__body__main__do__modal">
                            {
                                btnVal === 0?
                                <>
                                </>
                                :null
                            }
                            {
                                btnVal === 16?
                                    <div className="module2__body__main__do__modal__show">   
                                        <img src={CloseButtonImageDo} alt="Close" className="close__btn__2" onClick={modalClose}/>
                                        <p>-	Show your feelings when you are answering strength based questions (Tone of voice, body language, eye contact)</p>
                                        <p>-	Quote example(s) of times when you displayed the relevant strength</p>
                                    </div>
                                
                                :null
                            }
                            {
                                btnVal === 17?
                                    <div className="module2__body__main__do__modal__show">   
                                        <img src={CloseButtonImageDo} alt="Close" className="close__btn__2" onClick={modalClose}/>
                                        <p>-	Lie about your strengths. A skilled interviewer will detect this</p>                                        
                                        <p>-	Fake it by “acting out” enthusiasm. Again, this is easy to spot.</p>
                                    </div>
                                :null
                            }
                        </div>
                    </div>
                    <div className="module2__body__main__card">
                        <h1>Examples - Key Points</h1>
                        <h2>1.	Unlike when answering competency based questions, focus on how you felt in the situation rather than providing in depth detailed examples.</h2>
                        <h2>2. Make it personal. The emphasis must be on “I” not “We”</h2>
                        <h2>3. Strengths based answers need to be short and to the point so deliver your content in a concise, punchy style.</h2>
                    </div>
                </div>
                <div className="module2__body__main__download">
                    <h2>Now it's time to work on your action plan</h2>
                    <h3>Press the Download Button to make detailed personal preparations.</h3>
                    <button onClick={handleDownload}>Download</button>
                </div>
            </div>
        </div>
    )
}

export default Module
