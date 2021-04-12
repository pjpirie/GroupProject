import { combineReducers } from 'redux';
import getAccount from './getAccount';
import getAlert from './getAlert';
import isLightNav from './IsLightNav';
import isLogged from './isLogged';
import isSideNavOpen from './isSideNavOpen';
import toRedirect from './toRedirect';

const allReducers = combineReducers({
    isLogged: isLogged,
    isLightNav : isLightNav,
    isSideNavOpen : isSideNavOpen,
    toRedirect: toRedirect,
    getAccount : getAccount,
    getAlert : getAlert
});

export default allReducers;