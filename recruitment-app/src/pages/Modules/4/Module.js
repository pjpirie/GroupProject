import React from 'react';
import Eta from '../../../components/ETA/Eta';
import '../ModuleGlobal.css';
import './Module.scss';
import ModuleButtonModal from '../../../components/ModuleButtonModal/ModuleButtonModal';


function Module() {

    async function DownloadMedia() {
        return fetch('https://group-54-rct.herokuapp.com/download3', {
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
                a.download = 'Module 3 RemoteVirtule Interview Activity Sheet';
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
        <div className="module">
            <div className="module__header">
                <div className="module__header__text">
                    <h3>Module 3</h3>
                    <h1>Virtual Interview</h1>
                </div>
                <Eta time={15} />
            </div>
            <div className="module__body">
                <div className="module__body__video">
                    <video id="Video" autoplay controls>
                        <source src="https://group-54-rct.herokuapp.com/video/3" type="video/mp4"></source>
                    </video>
                </div>
                <div className="module__body__main">
                    <p>
                    This is a discussion exercise in which a small group of candidates are given a topic to discuss and reach a team conclusion within a given timescale. 
                    </p>
                    {/* Modal Button Section Start */}
                    <ModuleButtonModal>
                        <p>test 1</p>
                        <div>
                            <h1>test 2</h1>
                            <h3>test 3</h3>
                        </div>
                        <h2>test 4</h2>
                    </ModuleButtonModal>
                    {/* Modal Button Section Start */}
                    {/* Text Section Start */}
                    <div className="textSection">
                        <div className="textSection__large">
                            <p>Important</p>
                            <h1>Sample Content{window.innerWidth >900 ? <br />: " "} but not too hard!</h1>
                        </div>
                        <div className="textSection__small">
                            <p>
                             The team discussion will be observed by assessors positioned around the room, scoring one or two candidates each against a number of performance criteria such as communications, persuasiveness, teamwork an leadership.<br />
                            <span>••••••••••••••••••••••</span><br />
                            </p>
                        </div>
                    </div>
                    {/* Text Section End */}
                    {/* Competencies Section Start */}
                    <div>

                    </div>
                    {/* Competencies Section End */}
                </div>
            </div>
        </div>
    )
}

export default Module
