import { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ReactTooltip from 'react-tooltip';
import GuideIcon from '../../assets/2x/CourseGuide_Gray@2x.png';
import GuideIconGreen from '../../assets/2x/CourseGuide__Green@2x.png';
import FaceToFaceIcon from '../../assets/2x/FaceToFace_Gray@2x.png';
import FaceToFaceIconGreen from '../../assets/2x/FaceToFace_Green@2x.png';
import GroupIcon from '../../assets/2x/Group_Gray@2x.png';
import GroupIconGreen from '../../assets/2x/Group_Green@2x.png';
import PrepIcon from '../../assets/2x/Prep_Gray@2x.png';
import PrepIconGreen from '../../assets/2x/Prep_Green@2x.png';
import RolePlayIcon from '../../assets/2x/RolePlay_Gray@2x.png';
import RolePlayIconGreen from '../../assets/2x/RolePlay_Green@2x.png';
import VirtualIcon from '../../assets/2x/Virtual_Gray@2x.png';
import VirtualIconGreen from '../../assets/2x/Virtual_Green@2x.png';
import WrittenIconGreen from '../../assets/2x/Written_Green@2x.png';
import WrittenIcon from '../../assets/2x/Written_Green_1@2x.png';
import ModuleModal from '../../components/ModuleModal/ModuleModal';
import ModulesCompleted from '../../components/ModulesCompleted/ModulesCompleted';
import './ModuleTree.css';
import './ModuleTree.responsive.css';






function ModuleTree(props) {

    useEffect(() => {
        console.log(props)
        props.checkAuth();
    }, [])
    
    const UserData = useSelector(state => state.getAccount).user;

    const [isMod1Open, setMod1Open] = useState(false);
    const [isMod2Open, setMod2Open] = useState(false);
    const [isMod3Open, setMod3Open] = useState(false);
    const [isMod4Open, setMod4Open] = useState(false);
    const [isMod5Open, setMod5Open] = useState(false);
    const [isMod6Open, setMod6Open] = useState(false);
    const [isMod7Open, setMod7Open] = useState(false);

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
                                <img onClick={() => { 
                                    setMod1Open(!isMod1Open); 
                                    setMod2Open(false); 
                                    setMod3Open(false); 
                                    setMod4Open(false); 
                                    setMod5Open(false); 
                                    setMod6Open(false); 
                                    setMod7Open(false); 
                                    }} src={UserData.modulesCompleted[0] ? GuideIconGreen : GuideIcon} alt="Course Guide" data-for="toolRight" data-tip="Course Guide" />
                            </div>
                            <span className="ModuleTree__Line"></span>
                        </div>
                        <div className="ModuleTree__Tree__row">
                            <div className="ModuleTree__Tree_item Mod2">
                            <img onClick={() => { 
                                    setMod1Open(false); 
                                    setMod2Open(!isMod2Open);  
                                    setMod3Open(false); 
                                    setMod4Open(false); 
                                    setMod5Open(false); 
                                    setMod6Open(false); 
                                    setMod7Open(false); 
                                    }} src={UserData.modulesCompleted[1] ? PrepIconGreen : PrepIcon} alt="Interview Preparation" data-for="toolRight" data-tip="Recruitment Event Preparation" />
                            </div>
                        </div>
                        <div className="ModuleTree__Tree__row ModuleTree__Tree__row--duo">
                            <span className="ModuleTree__Line TopLineM45 "></span>
                            <span className="ModuleTree__Line TopLineP45 "></span>
                            <div className="ModuleTree__Tree_item Mod3">
                            <img onClick={() => { 
                                    setMod1Open(false); 
                                    setMod2Open(false); 
                                    setMod3Open(!isMod3Open); 
                                    setMod4Open(false); 
                                    setMod5Open(false); 
                                    setMod6Open(false); 
                                    setMod7Open(false); 
                                    }} src={UserData.modulesCompleted[2] ? FaceToFaceIconGreen : FaceToFaceIcon} alt="Face To Face Interview" data-for="toolLeft" data-tip="Face To Face Interview!" />
                            </div>
                            <div className="ModuleTree__Tree_item Mod4">
                            <img onClick={() => { 
                                    setMod1Open(false); 
                                    setMod2Open(false); 
                                    setMod3Open(false); 
                                    setMod4Open(!isMod4Open); 
                                    setMod5Open(false); 
                                    setMod6Open(false); 
                                    setMod7Open(false); 
                                    }} src={UserData.modulesCompleted[3] ? VirtualIconGreen : VirtualIcon} alt="Virtual Interview" data-for="toolRight" data-tip="Virtual Interview" />
                            </div>
                            <span className="ModuleTree__Line M45"></span>
                            <span className="ModuleTree__Line P45"></span>
                        </div>
                        <div className="ModuleTree__Tree__row">
                            <div className="ModuleTree__Tree_item Mod5">
                            <img onClick={() => { 
                                    setMod1Open(false); 
                                    setMod2Open(false); 
                                    setMod3Open(false); 
                                    setMod4Open(false); 
                                    setMod5Open(!isMod5Open);  
                                    setMod6Open(false); 
                                    setMod7Open(false); 
                                    }} src={UserData.modulesCompleted[4] ? GroupIconGreen : GroupIcon} alt="Group Exercises" data-for="toolRight" data-tip="Group Exercises" />
                            </div>
                            <span className="ModuleTree__Line"></span>
                        </div>
                        <div className="ModuleTree__Tree__row">
                            <div className="ModuleTree__Tree_item Mod6">
                            <img onClick={() => { 
                                    setMod1Open(false); 
                                    setMod2Open(false); 
                                    setMod3Open(false); 
                                    setMod4Open(false); 
                                    setMod5Open(false); 
                                    setMod6Open(!isMod6Open); 
                                    setMod7Open(false); 
                                    }} src={UserData.modulesCompleted[5] ? RolePlayIconGreen : RolePlayIcon} alt="Written Exercises" data-for="toolRight" data-tip="Role Play Exercises" />
                            </div>
                            <span className="ModuleTree__Line"></span>
                        </div>
                        <div className="ModuleTree__Tree__row">
                            <div className="ModuleTree__Tree_item Mod7">
                            <img onClick={() => { 
                                    setMod1Open(false); 
                                    setMod2Open(false); 
                                    setMod3Open(false); 
                                    setMod4Open(false); 
                                    setMod5Open(false); 
                                    setMod6Open(false); 
                                    setMod7Open(!isMod7Open); 
                                    }} src={UserData.modulesCompleted[6] ? WrittenIconGreen : WrittenIcon} alt="Role Play Exercises" data-for="toolRight" data-tip="Written Exercises" />
                            </div>
                        </div>
                        {isMod1Open ? <ModuleModal number={1} modalOpen={setMod1Open} /> : ''}
                        {isMod2Open ? <ModuleModal number={2} modalOpen={setMod2Open} /> : ''}
                        {isMod3Open ? <ModuleModal number={3} modalOpen={setMod3Open} /> : ''}
                        {isMod4Open ? <ModuleModal number={4} modalOpen={setMod4Open} /> : ''}
                        {isMod5Open ? <ModuleModal number={5} modalOpen={setMod5Open} /> : ''}
                        {isMod6Open ? <ModuleModal number={6} modalOpen={setMod6Open} /> : ''}
                        {isMod7Open ? <ModuleModal number={7} modalOpen={setMod7Open} /> : ''}
                        <ReactTooltip place="right" type="info" effect="solid" id="toolRight" />
                        <ReactTooltip place="left" type="info" effect="solid" id="toolLeft" />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default ModuleTree;