import React from 'react';
import Eta from '../../../components/ETA/Eta';
import '../ModuleGlobal.css';
import './Module.scss';


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
                        Increasingly organisations are conducting recruitment remotely. 
                        Some basic elements are the same as in face to face events, however, some additional factors have to be considered.
                    </p>
                    <div className="module__body__main__text">
                        <div className="module__body__main__text__left">
                            
                        </div>
                        <div className="module__body__main__text__right">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Module
