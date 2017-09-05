/**
 * Created by dongqiangqiang on 2017/6/16.
 */
import React from 'react'
import {Provider}from 'react-redux';
// import {Router, Route} from 'react-router'
import {Router, Route, Switch} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory()
import Login from './js/com/Login'
import store from './js/store/store';
import ReactDOM from 'react-dom'
import Home from './js/com/Home'

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route exact  path='/' component={Home}/>
                <Route path='/login' component={Login}/>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('app'));

 

