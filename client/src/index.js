/**
 * Created by dongqiangqiang on 2017/6/16.
 */
import React from 'react'
import {Provider}from 'react-redux';
// import {Router, Route} from 'react-router'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory();
import Login from './js/com/Login'
import Register from './js/com/Register'
import store from './js/store/store';
import ReactDOM from 'react-dom'
import Home from './js/com/Home'
import Restaurant  from './js/com/Restaurant'
import NotFound from './js/com/NotFound'
import Map from './js/com/page/PassengerFlowMapProv'
import MapCity from './js/com/page/PassengerFlowMapCity'

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/restaurant' component={Restaurant}/>
                <Route path='/login' component={Login}/>
                <Route path='/register' component={Register}/>
                <Route component={NotFound}/>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('app'));

 

