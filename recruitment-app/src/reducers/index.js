import isLogged from './isLogged';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    isLogged: isLogged
});

export default allReducers;