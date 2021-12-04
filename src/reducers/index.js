import { combineReducers } from 'redux';
import {
    universitiesListReducer,
    universityCreateReducer,
    universityDeleteReducer,
    universityDetailsReducer
} from './universities/universitiesReducer';

export default combineReducers({
    universitiesList: universitiesListReducer,
    universityDetails: universityDetailsReducer,
    universityCreate: universityCreateReducer,
    universityDelete: universityDeleteReducer
});