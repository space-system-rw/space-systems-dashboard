import { combineReducers } from 'redux';
import {
    universitiesListReducer,
    universityDetailsReducer
} from './universities/universitiesReducer';

export default combineReducers({
    universitiesList: universitiesListReducer,
    universityDetails: universityDetailsReducer
});