/**
 * Created by dongqiangqiang on 2017/6/16.
 */
import React from 'react'
import {Provider}from 'react-redux';
// import {Router, Route} from 'react-router'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory();
import Login from './js/com/my/login/Login'
import Register from './js/com/my/register/Register'
import store from './js/store/store';
import ReactDOM from 'react-dom'
import Home from './js/com/common/Home'
import Restaurant  from './js/com/product/res/Restaurant'
import NotFound from './js/com/ui/NotFound'
import SearchLoc from './js/com/loc/search/SearchLoc'

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/restaurant' component={Restaurant}/>
                <Route path='/login' component={Login}/>
                <Route path='/register' component={Register}/>
                <Route path='/location' component={SearchLoc}/>
                <Route component={NotFound}/>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('app'));

 

