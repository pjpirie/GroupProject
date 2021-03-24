import isLogged from './isLogged';
import isLightNav from './IsLightNav';
import isSideNavOpen from './isSideNavOpen';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    isLogged: isLogged,
    isLightNav : isLightNav,
    isSideNavOpen : isSideNavOpen
});

export default allReducers;