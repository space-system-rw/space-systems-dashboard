import {
    UNIVERSITY_LIST_REQUEST,
    UNIVERSITY_LIST_SUCCESS,
    UNIVERSITY_LIST_FAIL
} from '../../actions/universities/types';

export const universitiesListReducer = (state = { universities: [] }, action) => {
    switch (action.type) {
        case UNIVERSITY_LIST_REQUEST:
            return { loading: true, ...state };

        case UNIVERSITY_LIST_SUCCESS:
            return { loading: false, message: action.payload.message, universities: action.payload.allUniversities };

        case UNIVERSITY_LIST_FAIL:
            return {loading: false, error: action.payload };
        
        default:
            return state;
    }
};