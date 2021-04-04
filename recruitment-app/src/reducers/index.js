import isLogged from './isLogged';
import isLightNav from './IsLightNav';
import isSideNavOpen from './isSideNavOpen';
import toRedirect from './toRedirect';
import getAccount from './getAccount';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    isLogged: isLogged,
    isLightNav : isLightNav,
    isSideNavOpen : isSideNavOpen,
    toRedirect: toRedirect,
    getAccount : getAccount
});

export default allReducers;