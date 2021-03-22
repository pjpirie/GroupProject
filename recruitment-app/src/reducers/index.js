import isLogged from './isLogged';
import isLightNav from './IsLightNav';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    isLogged: isLogged,
    isLightNav : isLightNav
});

export default allReducers;