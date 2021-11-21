import { combineReducers } from 'redux';
import { universitiesListReducer } from './universities/universitiesReducer';

export default combineReducers({
    universitiesList: universitiesListReducer
});