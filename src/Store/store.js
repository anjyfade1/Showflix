import {createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import rootReducer from './reducers';
import search from '../Reducers/search';


const middleWare = [thunk];

const initialState = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    movies: search
});

const store = createStore(
     rootReducer, initialState, composeEnhancers(applyMiddleware(...middleWare))
);

export default store;