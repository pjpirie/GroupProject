import { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import FaceToFaceIcon from '../../assets/FaceToFaceIcon.png';
import GroupIcon from '../../assets/GroupIcon.png';
import GuideIcon from '../../assets/GuideIconV2.png';
import PrepIcon from '../../assets/PrepIcon.png';
import RolePlayIcon from '../../assets/RolePlayIcon.png';
import VirtualIcon from '../../assets/VirtualIcon.png';
import WrittenIcon from '../../assets/WrittenIcon.png';
import ModuleModal from '../../components/ModuleModal/ModuleModal';
import ModulesCompleted from '../../components/ModulesCompleted/ModulesCompleted';
import './ModuleTree.css';
import './ModuleTree.responsive.css';




function ModuleTree() {
    
    
    const UserData = useSelector(state => state.getAccount).user;
    const [isMod1Open, setMod1Open] = useState(false);
    const [isMod2Open, setMod2Open] = useState(false);
    const [isMod3Open, setMod3Open] = useState(false);
    const [isMod4Open, setMod4Open] = useState(false);
    const [isMod5Open, setMod5Open] = useState(false);
    const [isMod6Open, setMod6Open] = useState(false);
    const [isMod7Open, setMod7Open] = useState(false);

    async function completeModule(inData, moduleNumber) {
        return await fetch(`/user/moduleComplete/${moduleNumber}`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(inData), 
            credentials: 'same-origin'
        })
        .then(data => console.log(data));
    }

    return (
        <Fragment>
            <div className="ModuleTree">
                <div className="ModuleTree__container">
                    <div className="ModuleTree__header">
                        <h1>Modules</h1>
                        <ModulesCompleted form="pie" theme="dark" />
                    </div>
                    <div className="ModuleTree__Tree">
                        <div className="ModuleTree__Tree__row">
                            <div className="ModuleTree__Tree_item Mod1" >
                                <img onClick={() => {setMod1Open(!isMod1Open); completeModule({email: UserData.email}, 1)}} src={GuideIcon} alt="Course Guide"/>
                            </div>
                            <span className="ModuleTree__Line"></span>
                        </div>
                        <div className="ModuleTree__Tree__row">
                            <div className="ModuleTree__Tree_item Mod2">
                                <img onClick={() => {setMod2Open(!isMod2Open)}} src={PrepIcon} alt="Interview Preperation"/>
                            </div>
                        </div>
                        <div className="ModuleTree__Tree__row ModuleTree__Tree__row--duo">
                            <span className="ModuleTree__Line TopLineM45 "></span>
                            <span className="ModuleTree__Line TopLineP45 "></span>
                            <div className="ModuleTree__Tree_item Mod3">
                                <img onClick={() => {setMod3Open(!isMod3Open)}} src={FaceToFaceIcon} alt="Face To Face Interview"/>
                            </div>
                            <div className="ModuleTree__Tree_item Mod4">
                                <img onClick={() => {setMod4Open(!isMod4Open)}} src={VirtualIcon} alt="Virtual Interview"/>
                            </div>
                            <span className="ModuleTree__Line M45"></span>
                            <span className="ModuleTree__Line P45"></span>
                        </div>
                        <div className="ModuleTree__Tree__row">
                            <div className="ModuleTree__Tree_item Mod5">
                                <img onClick={() => {setMod5Open(!isMod5Open)}} src={GroupIcon} alt="Group Exercises"/>
                            </div>
                            <span className="ModuleTree__Line"></span>
                        </div>
                        <div className="ModuleTree__Tree__row">
                            <div className="ModuleTree__Tree_item Mod6">
                                <img onClick={() => {setMod6Open(!isMod6Open)}} src={RolePlayIcon} alt="Written Exercises"/>
                            </div>
                            <span className="ModuleTree__Line"></span>
                        </div>
                        <div className="ModuleTree__Tree__row">
                            <div className="ModuleTree__Tree_item Mod7">
                                <img onClick={() => {setMod7Open(!isMod7Open)}} src={WrittenIcon} alt="Role Play Exercises"/>
                            </div>
                        </div>
                        {isMod1Open ? <ModuleModal number={1} modalOpen={setMod1Open}/> : ''}
                        {isMod2Open ? <ModuleModal number={2} modalOpen={setMod2Open}/> : ''}
                        {isMod3Open ? <ModuleModal number={3} modalOpen={setMod3Open}/> : ''}
                        {isMod4Open ? <ModuleModal number={4} modalOpen={setMod4Open}/> : ''}
                        {isMod5Open ? <ModuleModal number={5} modalOpen={setMod5Open}/> : ''}
                        {isMod6Open ? <ModuleModal number={6} modalOpen={setMod6Open}/> : ''}
                        {isMod7Open ? <ModuleModal number={7} modalOpen={setMod7Open}/> : ''}
                        
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default ModuleTree;