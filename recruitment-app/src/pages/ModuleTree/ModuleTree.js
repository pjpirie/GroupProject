import ModulesCompleted from '../../components/ModulesCompleted/ModulesCompleted';
import './ModuleTree.css';
import GuideIcon from '../../assets/GuideIcon.png';
import PrepIcon from '../../assets/PrepIcon.png';
import FaceToFaceIcon from '../../assets/FaceToFaceIcon.png';
import VirtualIcon from '../../assets/VirtualIcon.png';
import GroupIcon from '../../assets/GroupIcon.png';
import WrittenIcon from '../../assets/WrittenIcon.png';
import RolePlayIcon from '../../assets/RolePlayIcon.png';
import { useEffect, useLayoutEffect } from 'react';
import LineTo from 'react-lineto';
import {Fragment} from 'react';

// const drawLine = (ele1, ele2, parentin) => {
//     if(ele1 == null || ele1 == undefined) return;
//     // console.log(ele1, ele2, parentin, strokeWidth, strokeColor);
//     const point1 = {x: ele1.getBoundingClientRect().top, y: ele1.getBoundingClientRect().left};
//     const point2 = {x: ele2.getBoundingClientRect().top, y: ele2.getBoundingClientRect().left};
//     const parent = {x: parentin.getBoundingClientRect().top, y: parentin.getBoundingClientRect().left}
//     const x1 = point1.x - parent.x;
//     const y1 = point1.y - parent.y;
//     const x2 = point2.x - parent.x;
//     const y2 = point2.y - parent.y;
//     // let SvgEle = document.createElement('svg');
//     // SvgEle.setAttribute('style', "position: absolute;")
//     // let LineEle = document.createElement('line');
//     // LineEle.setAttribute('stroke-width', strokeWidth)
//     // LineEle.setAttribute('stroke', strokeColor)
//     // LineEle.setAttribute('x1', x1)
//     // LineEle.setAttribute('y1', y1)
//     // LineEle.setAttribute('x2', x2)
//     // LineEle.setAttribute('y2', y2)
//     // LineEle.setAttribute('id', "mySVG")
//     // SvgEle.appendChild(LineEle);
//     // parentin.appendChild(SvgEle);
//     console.log(parentin)
//     // return (
//     //     <svg style={{position: 'absolute'}}>
//     //         <line stroke-width={strokeWidth} stroke={strokeColor}  x1={x1} y1={y1} x2={x2} y2={y2} id="mySVG"/>
//     //     </svg>
//     //     );
//     return {
//         x1: x1,
//         x2: x2,
//         y1: y1,
//         y2: y2
//     }
// }



function ModuleTree() {
    
    
    return (
        <Fragment>
            <LineTo borderColor="#213142" borderWidth="11px" from="Mod1" to="Mod2"/>
            <LineTo borderColor="#213142" borderWidth="11px" from="Mod2" to="Mod3"/>
            <LineTo borderColor="#213142" borderWidth="11px" from="Mod2" to="Mod4"/>
            <LineTo borderColor="#213142" borderWidth="11px" from="Mod3" to="Mod5"/>
            <LineTo borderColor="#213142" borderWidth="11px" from="Mod4" to="Mod5"/>
            <LineTo borderColor="#213142" borderWidth="11px" from="Mod5" to="Mod6"/>
            <LineTo borderColor="#213142" borderWidth="11px" from="Mod6" to="Mod7"/>
            <div className="ModuleTree">
                <div className="ModuleTree__container">
                    <div className="ModuleTree__header">
                        <h1>Modules</h1>
                        <ModulesCompleted form="pie" theme="dark" />
                    </div>
                    <div className="ModuleTree__Tree">
                        <div className="ModuleTree__Tree__row">
                            <div className="ModuleTree__Tree_item Mod1">
                                <img src={GuideIcon} alt="Course Guide"/>
                            </div>
                        </div>
                        <div className="ModuleTree__Tree__row">
                            <div className="ModuleTree__Tree_item Mod2">
                                <img src={PrepIcon} alt="Interview Preperation"/>
                            </div>
                        </div>
                        <div className="ModuleTree__Tree__row ModuleTree__Tree__row--duo">
                            <div className="ModuleTree__Tree_item Mod3">
                                <img src={FaceToFaceIcon} alt="Face To Face Interview"/>
                            </div>
                            <div className="ModuleTree__Tree_item Mod4">
                                <img src={VirtualIcon} alt="Virtual Interview"/>
                            </div>
                        </div>
                        <div className="ModuleTree__Tree__row">
                            <div className="ModuleTree__Tree_item Mod5">
                                <img src={GroupIcon} alt="Group Exercises"/>
                            </div>
                        </div>
                        <div className="ModuleTree__Tree__row">
                            <div className="ModuleTree__Tree_item Mod6">
                                <img src={WrittenIcon} alt="Written Exercises"/>
                            </div>
                        </div>
                        <div className="ModuleTree__Tree__row">
                            <div className="ModuleTree__Tree_item Mod7">
                                <img src={RolePlayIcon} alt="Role Play Exercises"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default ModuleTree;