import React from 'react';
import Eta from '../../../components/ETA/Eta';
import '../ModuleGlobal.css';
import './Module.css';


function Module() {

    async function DownloadMedia() {
        return fetch('https://group-54-rct.herokuapp.com/download1', {
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
                a.download = 'Module 1 Preparation Activity Sheet';
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
                    <h3>Module 1</h3>
                    <h1>Preparation</h1>
                </div>
                <Eta time={10} />
            </div>
            <div className="Module__Page__Body">
                <div className="Module__Page__Video__Container">
                    <video id="Video" autoplay controls>
                        <source src="https://group-54-rct.herokuapp.com/video/1" type="video/mp4"></source>
                    </video>
                </div>
                <div className="Module__Page__Text">
                    <p>You have probably invested a lot of time and effort finding a job that you really want, passed an initial screening and now you face the last hurdle, the interview. <strong>Do you realise how difficult it is to reach this point? </strong>

                    “98% of job seekers are eliminated at the initial screening and only the “Top 2%” of candidates make it to the interview” - Robert Meier, President of Job Market Experts.

                    How can you give yourself the best possible chance of taking the final step and justifying all your investment in order to reach your goal – THE JOB.

                    The modules in this programme will give you practical guidance and tools to use in whatever form your assessment or selection process takes.

                    </p>
                </div>
                <div className="Module__Page__LearningPoints">
                    <h2>Key Learning Points</h2>
                    <p>Irrespective of the selection process you are facing there are a number of basic things to do before the appointed day:-</p>
                    <div className="Module__Page__Point">
                        <div className="Module__Page__Point__Header">
                            <h4>01</h4>
                            <h3>Research</h3>
                        </div>
                        <div className="Module__Page__Point__Body">
                            <p>Use the internet, communications from the hiring organisation and any other sources to gather relevant information. Make sure you have a good understanding of the following:

                            - The organisation – History, nature of the business
                            - The job – Responsibilities (What will I be expected to do?)
                            - What is the format of the assessment process? (Interview/Other exercises)
                            - Who will be present? (number of interviewers?)
                            - Am I expected to bring anything with me?
                            </p>
                        </div>
                    </div>
                    <div className="Module__Page__Point">
                        <div className="Module__Page__Point__Header">
                            <h4>02</h4>
                            <h3>Personal Preperation</h3>
                        </div>
                        <div className="Module__Page__Point__Body">
                            <p>Given the importance of the interview ensure that you give yourself plenty of time to arrive at the location, or indeed at the computer if the assessment has to be carried out remotely. Whether remote or face to face think about appropriate dress and overall appearance.
                            </p>
                        </div>
                    </div>
                    <div className="Module__Page__Points">
                        <div className="Module__Page__Point__Header">
                            <h4>03</h4>
                            <h3>Self Confidence</h3>
                        </div>
                        <div className="Module__Page__Point__Body">
                            <p>Definition: “A feeling of trust in one’s abilities, qualities and judgement.” There are literally thousands of books, online resources and programmes on this subject. It is worth exploring this area.  </p>
                        </div>
                    </div>
                </div>
                <div className="Module__Page__Activity__Container">
                    <div className="Module__Page__Activity__Header">
                        <h2>Activity</h2>
                    </div>
                    <div className="Module__Page__Activity__Body">
                        <p>Download the Module 1 activity sheet and work through the exercises to be fully prepared for your recruitment event.</p>
                    </div>
                </div>
                <div className="Module__Page__Btn__Container">
                    <button onClick={() => { DownloadMedia(); }}>Download</button>
                </div>
            </div>
        </div>
    )
}

export default Module
