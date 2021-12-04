import {
    UNIVERSITY_LIST_REQUEST,
    UNIVERSITY_LIST_SUCCESS,
    UNIVERSITY_LIST_FAIL,
    UNIVERSITY_DETAILS_REQUEST,
    UNIVERSITY_DETAILS_SUCCESS,
    UNIVERSITY_DETAILS_FAIL,
    UNIVERSITY_CREATE_REQUEST,
    UNIVERSITY_CREATE_SUCCESS,
    UNIVERSITY_CREATE_FAIL,
    UNIVERSITY_DELETE_REQUEST,
    UNIVERSITY_DELETE_SUCCESS,
    UNIVERSITY_DELETE_FAIL,
    UNIVERSITY_UPDATE_REQUEST,
    UNIVERSITY_UPDATE_SUCCESS,
    UNIVERSITY_UPDATE_FAIL
} from '../../actions/universities/types';

export const universitiesListReducer = (state = { universities: [] }, action) => {
    switch (action.type) {
        case UNIVERSITY_LIST_REQUEST:
            return { loading: true, ...state };

        case UNIVERSITY_LIST_SUCCESS:
            return { loading: false, message: action.payload.message, universities: action.payload.allUniversities };

        case UNIVERSITY_LIST_FAIL:
            return { loading: false, error: action.payload };
        
        default:
            return state;
    }
};

export const universityDetailsReducer = (state = { university: {} }, action) => {
    switch (action.type) {
        case UNIVERSITY_DETAILS_REQUEST:
            return { loading: true, ...state };

        case UNIVERSITY_DETAILS_SUCCESS:
            return { loading: false, message: action.payload.message, university: action.payload.existingUniversity };

        case UNIVERSITY_DETAILS_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};

export const universityCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case UNIVERSITY_CREATE_REQUEST:
            return { loading: true };

        case UNIVERSITY_CREATE_SUCCESS:
            return { loading: false, success: true, message: action.payload.message, university: action.payload.addedUniversity };

        case UNIVERSITY_CREATE_FAIL:
            return { loading: false, error: action.payload };
            
        default:
            return state;
    }
};

export const universityDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case UNIVERSITY_DELETE_REQUEST:
            return { loading: true };

        case UNIVERSITY_DELETE_SUCCESS:
            return { loading: false, success: true, message: action.payload.message };

        case UNIVERSITY_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
};

export const universityUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case UNIVERSITY_UPDATE_REQUEST:
            return { loading: true };

        case UNIVERSITY_UPDATE_SUCCESS:
            return { loading: false,  success: true, message: action.payload.message, university: action.payload.updatedUniversity };

        case UNIVERSITY_UPDATE_FAIL:
                return { loading: false, error: action.payload };
    
        default:
            return state;
    }
};
