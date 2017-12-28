/**
 * Created by dongqiangqiang on 2017/9/4.
 */
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

import poilist from '../reducer/ResItemReducer';

var middlewares =[];

if (process.env.NODE_ENV === `development`) {
    const { logger } = require(`redux-logger`);
    middlewares.push(logger);
}

middlewares.push(thunkMiddleware);

var store = createStore(
    poilist,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middlewares));

export default store;