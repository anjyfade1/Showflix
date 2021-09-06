import * as actionTypes from '../Actions/actionTypes';

const initialState = {
    text : '',
    movies : [],
    loading : false,
    movie : []

};


const reducer = (state= initialState, action) => {
    switch (action.type) {
      case  actionTypes.SEARCH_MOVIE:
        return{
            ...state,
            text: action.payload,
            loading:false
        };

       case actionTypes.FETCH_MOVIE:
           return{
               ...state,
               movies: action.payload,
               loading:false
        };

        case actionTypes.FETCH_MOVI:
            return{
                ...state,
                movie: action.payload,
                loading: false
        };

        case actionTypes.LOADING:
            return{
                ...state,
                loading: true
            }
    
        default:
            return state;
    }
};

export default reducer;