import * as actionTypes from './actionTypes';
import axios from 'axios';
import {APIKey} from '../APIKey';

export const searchMovie = text => dispatch => {
    dispatch(
        {
            type: actionTypes.SEARCH_MOVIE,
            payload: text
        }
    ); 
};

export const fetchMovie = text => dispatch =>{
    axios.get( `http://www.omdbapi.com/?apikey=${APIKey}&s=${text}`)
        .then(response => dispatch({
            type: actionTypes.FETCH_MOVIE,
            payload: response.data
    })) 
        .catch(err => console.log(err));
};

export const fetchMovi = id => dispatch => {
    axios.get( `https://www.omdbapi.com/?apikey=${APIKey}&i=${id}`)
    .then(response => dispatch({
        type:actionTypes.FETCH_MOVI,
        payload: response.data 
    }))
    .catch(err => console.log(err));
};

export const setLoading = () => {
    return{
        type: actionTypes.LOADING
    }
}


