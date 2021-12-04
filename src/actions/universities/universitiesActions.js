import api from '../../api';
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

export const detailsUniversity = (id) => async (dispatch) => {
    try {
        dispatch({ type: UNIVERSITY_DETAILS_REQUEST });

        const { data } = await api.get(`/${id}`);

        dispatch({
            type: UNIVERSITY_DETAILS_SUCCESS, payload: data
        });
    } catch (error) {
        dispatch({
            type: UNIVERSITY_DETAILS_FAIL,
            payload: error.response && error.response.message
            ? error.response.data.message
            : error.message
        });
    }
};

export const createUniversity = (universityData) => async (dispatch) => {
    try {
        dispatch({ type: UNIVERSITY_CREATE_REQUEST });

        const config = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const { data } = await api.post('/', universityData, config);

        dispatch({
            type: UNIVERSITY_CREATE_SUCCESS, payload: data
        });
    } catch (error) {
        dispatch({
            type: UNIVERSITY_CREATE_FAIL,
            payload: error.response && error.response.message
            ? error.response.message
            : error.message
        });
    }
};

export const deleteUniversity = (id) => async (dispatch) => {
    try {
        dispatch({ type: UNIVERSITY_DELETE_REQUEST });
        const config = {
            method: 'delete',
            headers: {
                'Content-Type': 'Application/json'
            }
        };

        const { data } = await api.delete(`/${id}`, config);

        dispatch({
            type: UNIVERSITY_DELETE_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: UNIVERSITY_DELETE_FAIL,
            payload: error.response && error.response.message
            ? error.response.message
            : error.message
        });
    }
};

export const updateUniversity = (id, universityData) => async (dispatch) => {
    try {
        dispatch({ type:UNIVERSITY_UPDATE_REQUEST });

        const config = {
            method: 'put',
            headers: {
                'Content-Type': 'Application/json'
            }
        };

        const { data } = await api.put(`/${id}`, universityData, config);

        dispatch({
            type: UNIVERSITY_UPDATE_SUCCESS,
            payload: data
        });
    } catch (error) {
        console.log(universityData);

        dispatch({
            type: UNIVERSITY_UPDATE_FAIL,
            payload: error.response && error.response.message
            ? error.response.message
            : error.message
        });
    }
};