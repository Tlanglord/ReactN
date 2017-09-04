/**
 * Created by dongqiangqiang on 2017/6/16.
 */
import React from 'react'
import {Provider}from 'react-redux';
import store from './js/store/store';
import ReactDOM from 'react-dom'
import Home from './js/com/Home'


ReactDOM.render(
    <Provider store={store}>
        <Home />
    </Provider>,
    document.getElementById('app'));

 

