/**
 * Created by dongqiangqiang on 2017/9/4.
 */
import {createStore, applyMiddleware} from 'redux';
import  createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import poilist from '../reducer/ResItemReducer';

var store = createStore(
    poilist,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(
        createLogger,
        thunkMiddleware
    ));

export default store;