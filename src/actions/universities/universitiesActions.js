import api from '../../api';
import {
    UNIVERSITY_LIST_REQUEST,
    UNIVERSITY_LIST_SUCCESS,
    UNIVERSITY_LIST_FAIL
} from './types';

export const listUniversities = () => async (dispatch) => {
    try {
        dispatch({ type: UNIVERSITY_LIST_REQUEST });

        const { data } = await api.get('/');

        dispatch({
            type: UNIVERSITY_LIST_SUCCESS, payload: data
        });
    } catch (error) {
        dispatch({
            type: UNIVERSITY_LIST_FAIL,
            payload: error.response && error.response.message
            ? error.response.data.message
            : error.message
        });
    }
};