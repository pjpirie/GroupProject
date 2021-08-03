import React from 'react';
import './RSDPModuleLogo.scss';
import RSDPModuleLogoImage from '../../assets/SVG/RSDPModuleLogo.svg';


const RSDPModuleLogo = (props) => {

    
    return (
        <div className="RSDPModuleLogo">
            <img src={RSDPModuleLogoImage} alt="RSDP Primary Logo"/>
        </div>
    );
}

export default RSDPModuleLogo;
