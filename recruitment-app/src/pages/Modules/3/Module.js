import React from 'react';
import Eta from '../../../components/ETA/Eta';
import '../ModuleGlobal.css';
import './Module.scss';

function Module() {

    async function DownloadMedia() {
        return fetch('https://group-54-rct.herokuapp.com/download2', {
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
                a.download = 'Module 2 Interview Activity Sheet';
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
    return (
        <div className="Module__Page__Wrapper">
            <div className="Module__Page__Header__Modules">
                <div className="Module__Page__Header__Text">
                    <h3>Module 2</h3>
                    <h1>Interview</h1>
                </div>
                <Eta time={15} />
            </div>
            <div className="Module__Page__Body">
                <div className="Module__Page__Video__Container">
                    <video id="Video" autoplay controls>
                        <source src="https://group-54-rct.herokuapp.com/video/2" type="video/mp4"></source>
                    </video>
                </div>
                <div className="Module__Page__Text">
                    <p></p>
                </div>
                <div className="Module__Page__LearningPoints">
                    <h2>Key Learning Points</h2>
                    <div className="Module__Page__Point">
                        <div className="Module__Page__Point__Header">
                            <h4>01</h4>
                            <h3>1st Contact</h3>
                        </div>
                        <div className="Module__Page__Point__Body">
                            <p>A recent survey indicated that 33% of interviewers stated that they made their hiring decision within the first 90 seconds. So, what first impression do you want to create?</p>
                        </div>
                    </div>
                    <div className="Module__Page__Point">
                        <div className="Module__Page__Point__Header">
                            <h4>02</h4>
                            <h3>Body Language</h3>
                        </div>
                        <div className="Module__Page__Point__Body">
                            <p>Definition: “The conscious and unconscious movements and postures by which attitudes and feelings are communicated.” So, what attitudes and feelings do you want to communicate?</p>
                        </div>
                    </div>
                    <div className="Module__Page__Points">
                        <div className="Module__Page__Point__Header">
                            <h4>03</h4>
                            <h3>Voice and Delivery</h3>
                        </div>
                        <div className="Module__Page__Point__Body">
                            <p>Voice is critical in any recruitment process consequently you have to consider carefully how you are coming over both in terms of clarity and what messages you are conveying about yourself.</p>
                        </div>
                    </div>
                    <div className="Module__Page__Points">
                        <div className="Module__Page__Point__Header">
                            <h4>04 </h4>
                            <h3>Answer the question asked, not the one you hoped would be asked</h3>
                        </div>
                        <div className="Module__Page__Point__Body">
                            <p>One of the commonest mistakes in interviews is an amazingly simple one where a candidate answers a question that she or he hoped would be asked as opposed to answering what has actually been asked. This sounds obvious however it is critical that you take time and focus on what the interviewer has actually said. If you are unsure it is perfectly reasonable to ask for clarification.</p>
                        </div>
                    </div>
                    <div className="Module__Page__Points">
                        <div className="Module__Page__Point__Header">
                            <h4>05</h4>
                            <h3>Keep your responses concise</h3>
                        </div>
                        <div className="Module__Page__Point__Body">
                            <p>Concise means giving a lot of information clearly and in a few words. Watch how your answers are being received. If you detect signs of boredom finish what you are saying as quickly as possible. </p>
                        </div>
                    </div>
                    <div className="Module__Page__Points">
                        <div className="Module__Page__Point__Header">
                            <h4>06</h4>
                            <h3>Ask Questions</h3>
                        </div>
                        <div className="Module__Page__Point__Body">
                            <p>If you are asked do you have any questions be prepared and ask one or two about the role and the company. Prepare a few questions in advance so that you can convey that you have researched the company and the role. Don’t overdo this. Keep it short.</p>
                        </div>
                    </div>
                    <div className="Module__Page__Points">
                        <div className="Module__Page__Point__Header">
                            <h4>07</h4>
                            <h3>Last Impressions Last</h3>
                        </div>
                        <div className="Module__Page__Point__Body">
                            <p>Thank the interviewer(s)and if appropriate shake hands.</p>
                        </div>
                    </div>
                    <div className="Module__Page__Points">
                        <div className="Module__Page__Point__Header">
                            <h4>08</h4>
                            <h3>Be honest throughout</h3>
                        </div>
                        <div className="Module__Page__Point__Body">
                            <p>On a practical level it is too easy to be found out and lying causes stress which can be detected, and it can also lead to confusion. If an interviewer believes a candidate is lying it will almost inevitably cause them to be rejected.</p>
                        </div>
                    </div>
                    <div className="Module__Page__Points">
                        <div className="Module__Page__Point__Header">
                            <h4>09</h4>
                            <h3>Remember you are “on stage” from arrival to departure</h3>
                        </div>
                        <div className="Module__Page__Point__Body">
                            <p>From your arrival to your departure your behaviour may be assessed whether formally or informally by all members of staff with whom you are in contact. Receptionists, security staff, someone who takes you for a coffee and any other people you may encounter may pass on their opinions of you.</p>
                        </div>
                    </div>
                    <div className="Module__Page__Points">
                        <div className="Module__Page__Point__Header">
                            <h4>10</h4>
                            <h3>Review your performance</h3>
                        </div>
                        <div className="Module__Page__Point__Body">
                            <p>All successful performers (actors, sports people, sales people) always assess how they performed after an event with a view to improving next time. This is not being defeatist rather it is using experience in order to learn.</p>
                        </div>
                    </div>
                </div>
                <div className="Module__Page__Extra__Content">
                    <h2>Types of Interview Questions</h2>
                    <p>
                        A)	    General<br />
                        B)	    Competency Based<br />
                        C)	    Strength Based<br />
                        <br />
                        A)	General<br />
                        <br />
                        These are often used to give candidates an opportunity to “loosen up” and ease themselves into the interview.<br />
                        <br />
                        Examples:<br />
                        <br />
                        “Tell me/us a bit about yourself”<br />
                        <br />
                        This question is often used at the start of the interview, so it gives you a great chance to create a positive first impression. Talk about your skills and achievements, work related or in any other areas, for example voluntary activities or at school/college/university. Try to connect these to the role you’ve applied for. Keep your answer short, two or three minutes.<br />
                        <br />
                        “Why did you apply for this job?”<br />
                        <br />
                        Show that you’ve researched the role by discussing aspects of the job that connect with what you enjoy doing, for example face to face contact with people or dealing with customers on the phone. Highlight particular aspects of the job that attracted you.<br />
                        <br />
                        “What do you know about our organisation?”<br />
                        <br />
                        Focus on brief details, for example, main purpose, key achievements and some interesting facts. The purpose is to show that you have researched the organisation. Again, keep your answer brief giving a few specific details.<br />
                        <br />
                        B)	Competency Based Questions<br />
                        <br />
                        These are sometimes called behavioural or situational questions and they are designed to check your skills or competencies. The interviewer wants to know that in the past you have demonstrated that you have the necessary behaviours required for the role on offer. If you can show that you have applied relevant skills, then you should be able to repeat this if you get this job. They are very different from general questions which tend to be more informal. Competency-based questions are much  more systematic and specific, therefore your answers need to follow a clear structure.<br />
                        <br />
                        How to identify competency based questions:<br />
                        <br />
                        The opening phrase or sentence - Examples<br />
                        <br />
                        -	“Describe a situation in which you had to…..”.<br />
                        -	“Give an example of a time you …..”<br />
                        -	“Tell me/us about an important decision you had to make…..”<br />
                        -	“Describe a project that you were involved in and what was your specific role…..”<br />
                        -	“Give me/us an example of a challenge you faced at work and how you dealt with it…..”<br />
                        <br />
                        How to answer competency based questions:<br />
                        <br />
                        Clear rules which must be applied in order to perform well
                        There is a useful structure which is used to summarise how to answer competency based questions – STAR - Situation, Task, Action(s), Result(s)<br />
                        <br />
                        Example: “Describe a situation in which you had to deal with an angry customer”<br />
                        <br />
                        Situation = Explain the background to the events which you are describing.<br />
                        <br />
                        Example - “I was working as a sales assistant in XYZ clothing store in the centre of Birmingham when a customer approached me in a very aggressive way, shouting and holding up a jacket and complaining that there was a rip in the lining.”<br />
                        <br />
                        Task = What were you trying to achieve in this situation?<br />
                        <br />
                        Example -“Resolve this customer’s problem in the most effective way for her and for the business”<br />
                        <br />
                        Action(s) =  What did you do?<br />
                        <br />
                        Example – “Firstly I began to calm her down by indicating that I was sorry that she was upset and I assured her that I would help. Then I asked her to tell me what was the problem. I assured her that I could resolve this and offered to exchange the item or give her a refund provided she had the receipt”.<br />
                        <br />
                        Result(s) = What was the outcome?<br />
                        <br />
                        Example - “The customer calmed down and I showed her a number of other jackets and she chose one, apologised for shouting and left the store”.<br />
                        <br />
                        Common mistakes made when answering competency based questions:<br />
                        <br />
                        - Give a general answer not referring to a specific situation<br />
                        <br />
                        Example – “I used to get lots of angry customers. How I dealt with them was to use my customer service skills and my empathy to show that I always put the customer first.”<br />
                        <br />
                        -	Refer to team performance rather than focusing on what YOU did<br />
                        <br />
                        Example – “Our team dealt with complaints so we had to talk to angry customers every day. We used to apply the skills we learned in our customer service training and if anyone had difficulties we all came in to help. <br />
                        <br />
                        -	State that jobs that you had required you to deal with the situation<br />
                        <br />
                        Example – “I worked in a bar in the city centre where many of the customers drank heavily and would then get awkward, so I had to learn quickly how to deal with them. Later I became a receptionist in a busy hotel where the system kept breaking down and rooms were double booked regularly. This really upset the customers and I had to figure out how to calm them down.”<br />
                        <br />
                        The overriding rules to be applied:-<br />
                        <br />
                        Be specific about situations <br />
                        1.	Refer to “I” not “We”<br />
                        2.	Always follow the STAR process<br />
                        <br />
                        C)	Strength Based Questions<br />
                        <br />
                        As the name suggests these questions are intended to identify what the candidate  enjoys doing, as opposed to what she/he has done which is the focus with competency based questions. From your answers and how you deliver them the interviewer(s) assess what you’re good and maybe not so good at. The intention is to match strengths to the role, resulting in a happier worker who will perform well, learn quickly and stay longer.<br />
                        <br />
                        These questions are more personal and are intended to identify people who will be a good fit for the role and the organisation.<br />
                        <br />
                        How to identify strength based questions:<br />
                        <br />
                        Firstly, the interviewer is attempting to understand you as a person, therefore, you will probably be asked a lot of questions in a short time period. The focus will depend on the job as obviously different strengths are required depending on the role. For example, in a customer facing role a required strength would be the ability to communicate with a wide range of people. <br />
                        <br />
                        Examples of strength based questions:<br />
                        <br />
                        What do you like to do when you are not working?<br />
                        How would your work colleagues and friends describe you?<br />
                        What are you particularly good at?<br />
                        What are you not particularly good at?<br />
                        Tell me/us about something you’re really proud of?<br />
                        How do you motivate yourself, even during a bad day?<br />
                        How good are you at working to a tight deadline?<br />
                        What is it about this this role that really excites you?<br />
                        <br />
                        How to answer strength based questions:<br />
                        <br />
                        Some experts suggest that it is best not to over prepare. “Be yourself and answer authentically”. This is valid advice, however, more specific preparation and applying simple techniques can increase your chances of success.<br />
                        <br />
                        Think about your strengths and practice talking about them. Consider the following: :<br />
                        •	What is it that I do well?<br />
                        •	When have I done my best work?<br />
                        <br />
                        From your answers build a structure which you can apply when asked most strength based questions- SEE - Strengths, Enthusiasm, Examples<br />
                        <br />
                        S	Strengths – Things you can do well.<br />
                        <br />
                            Examples:- Organise, Communicate, Plan Ahead, Work in a Team, Deal with Pressure<br />
                        <br />
                        E	Enthusiasm – Intense and eager enjoyment<br />
                        <br />
                            Demonstrate this as you are describing your strengths<br />
                        <br />
                        E	Examples – Times when you have demonstrated your strengths<br />
                        <br />
                            Illustrations of when you have shown your strengths<br />
                        <br />
                        Sample Answer:<br />
                        <br />
                        Q)	What are you particularly good at?<br />
                        <br />
                        STRENGTH - Organising<br />
                        “I am particularly good at organising. I really enjoy bringing order into chaotic situations. It gives me a real buzz. Last month our team moved to a different location in the warehouse and we had to set up our work stations and sort out who was doing what. I made a point of clearing a space and setting up my area neatly in order to make it easy for me to access everything. A few colleagues watched me and asked if I could help them. I jumped at the chance as it meant we were all ready more quickly and I really enjoy supporting other members of my team. When our manager came round an hour later she was amazed that we were fully operational in such a short time. I get a real kick out of organising things whether at work or in my private life. I am a “lists person” and it gives me great satisfaction to tick things off at the end of the day and see what I have achieved and begin to plan for what will be completed tomorrow.”  <br />
                        <br />
                        Q)	How good are you at working to a tight deadline?<br />
                        <br />
                        STRENGTH – Dealing with Pressure<br />
                        “When the pressure is on I seem to get an extra boost. It gives me a clear focus and I really enjoy the challenge. At the end of every month my team puts together a performance report for our division and it has to be with the senior management team by close of business on the first of the new month. Three months ago we had a major system problem just as we were about to complete our report. It meant we couldn’t input any data and the I.T. department couldn’t say how long it would take to remedy the situation. I have five people in my team so I got everybody together and asked for ideas in a quick brainstorming session. I love these meetings where everybody is throwing in suggestions, some very practical, others off the wall and sometimes outrageous. We had a real buzz going and I could feel the energy in the room as we all pushed to get results. Within a short time we had a number of action items which we all began to pursue and within two hours we had a clear plan which we then implemented. I contacted my boss with the good news and at lunchtime he came round with a load of cakes and other treats which we all shared as part of our celebration. I find that the more often that kind of thing happens the better we are at dealing with the crisis. I love it, the adrenalin rush, the drive within the team and the terrific sense of achievement when you finally succeed. There’s nothing like it!”  <br />
                        <br />
                        ENTHUSIASM – Do’s and Don’ts<br />
                        <br />
                        Do:<br />
                        -	Show your feelings when you are answering strength based questions<br />
                        (Tone of voice, body language, eye contact)<br />
                        -	Quote example(s) of times when you displayed the relevant strength<br />
                        Don’t<br />
                        -	Lie about your strengths. A skilled interviewer will detect this<br />
                        -	Fake it by “acting out” enthusiasm. Again, this is easy to spot.<br />
                        <br />
                        EXAMPLES -  Key Points<br />
                        <br />
                        1)	Unlike when answering competency based questions, focus on how you felt in the situation rather than providing in depth detailed examples.<br />
                        2)	Make it personal. The emphasis must be on “I” not “We”<br />
                        3)	Strengths based answers need to be short and to the point so deliver your content in a concise, punchy style.</p>
                </div>
                <div className="Module__Page__Activity__Container">
                    <div className="Module__Page__Activity__Header">
                        <h2>Activity</h2>
                    </div>
                    <div className="Module__Page__Activity__Body">
                        <p>Download the Module 2 activity sheet and work through the exercises to be fully prepared for your interview.</p>
                    </div>
                </div>
                <div className="Module__Page__Btn__Container">
                    <button onClick={() => { handleDownload(); }}>Download</button>
                </div>
            </div>
        </div>
    )
}

export default Module
