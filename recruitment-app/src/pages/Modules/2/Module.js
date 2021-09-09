import React from 'react';
import Eta from '../../../components/ETA/Eta';
import '../ModuleGlobal.css';
import './Module.scss';
import ModuleButtonModal from '../../../components/ModuleButtonModal/ModuleButtonModal.js';
import DidYouKnow from '../../../assets/SVG/Didyouknow.svg';
import RSDPModuleLogo from '../../../components/RSDPModuleLogo/RSDPModuleLogo';


function Module() {

    async function DownloadMedia() {
        return fetch('https://rsdp-backend.herokuapp.com/download1', {
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
            a.download = 'Module 6 Written Exercise Activity Sheet';
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
        <div className="module1">
            <RSDPModuleLogo />
            <div className="module1__header">
                <div className="module1__header__text">
                    <h3>MODULE ONE</h3>
                    <h1>Preparation</h1>
                </div>
                <Eta time={10} />
            </div>
            <div className="module1__body">
                <div className="module1__body__video">
                    <video id="Video" autoplay controls>
                        <source src="https://rsdp-backend.herokuapp.com/video/1" type="video/mp4"></source>
                    </video>
                </div>
                <div className="module1__body__main">
                    {/* <p>
                    Written exercises are designed to check that a candidate can communicate logically and clearly in a written format as information is analysed, conclusions reached and recommendations made.
                    </p> */}
                    {/* Text Section Start */}
                    <div className="textSection">
                        <div className="textSection__large">
                            <p>How to</p>
                            <h1>
                                Maximise your
                                chances of success
                                at recruitment events
                            </h1>
                        </div>
                        <div className="textSection__small">
                            <p>
                            You have probably invested a lot of time and effort finding a job that you really want, passed an initial screening and now you face the last hurdle, the interview. Do you realise how difficult it is to reach this point?
                            <br />
                            </p>
                        </div>
                    </div>
                    {/* Text Section End */}
                    {/* Quote Section Start */}
                    <div className="module1__quote">
                        <img src={DidYouKnow} alt="Did you know"/>
                        <div className="module__quote__text">
                            <h2>“98% of job seekers are eliminated at the initial screening and only the ‘Top 2%’ of candidates make it to the interview”</h2>
                            <h5>Robert Meier</h5>
                            <h4>President of Job Market Experts.</h4>
                        </div>
                    </div>
                    {/* Quote Section Start */}
                    {/* Modal Button Section Start */}
                    <div className="module1__body__buttons__mod1">
                        <p>
                            Explore below to find out what you can do to prepare 
                            for your next recruitment event.
                            <span>••••••••••••••••••••••</span><br />
                        </p>
                        <ModuleButtonModal type="1x3"/>
                    </div>
                    {/* Modal Button Section Start */}
                    
                    {/* Activity Section Start */}
                    <div className="module1__body__activity">
                        <h1>Now its time to work on your action plan</h1>
                        <p>
                            Download the Module 1 action items and work through the 
                            exercises to be fully prepared for your recruitment event.
                        </p>
                        <button onClick={() => { handleDownload(); }}>Download</button>
                    </div>
                    {/* Activity Section End */}
                </div>
            </div>
        </div>
    )
}

export default Module
