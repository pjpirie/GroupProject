import React from 'react';
import Logo from '../../assets/v2/NewLogoHeaderBackend.svg';

function ModuleLogo() {
    return(
        <div className="module__logo" style={{display: 'flex', width: '100%'}}>
            <img src={Logo} alt="RSDP" style={{margin: '2em auto -1em auto'}} />
        </div>
    )
}
export default ModuleLogo;