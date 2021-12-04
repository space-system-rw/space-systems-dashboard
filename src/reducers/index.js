import { combineReducers } from 'redux';
import {
    universitiesListReducer,
    universityCreateReducer,
    universityDeleteReducer,
    universityDetailsReducer,
    universityUpdateReducer
} from './universities/universitiesReducer';

export default combineReducers({
    universitiesList: universitiesListReducer,
    universityDetails: universityDetailsReducer,
    universityCreate: universityCreateReducer,
    universityDelete: universityDeleteReducer,
    universityUpdate: universityUpdateReducer
});