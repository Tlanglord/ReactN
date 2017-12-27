/**
 * Created by dongqiangqiang on 2017/6/16.
 */
import React from 'react'
import {Provider}from 'react-redux';
// import {Router, Route} from 'react-router'
import {BrowserRouter as Router, Route, Switch, hashHistory} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory();
// import Login from './js/com/my/login/Login'
import Register from './js/com/my/register/Register'
import store from './js/store/store';
import ReactDOM from 'react-dom'
import Home from './js/com/common/Home'
import Restaurant  from './js/com/product/res/Restaurant'
import NotFound from './js/com/ui/NotFound'
import SearchLoc from './js/com/loc/search/SearchLoc'
import LazyLogin  from "bundle-loader?lazy&name=[name]!./js/com/my/login/Login";

class Bundle extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            // short for "module" but that's a keyword in js, so "mod"
            mod: null
        }
    }
    componentWillMount() {
        this.load(this.props)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.load !== this.props.load) {
            this.load(nextProps)
        }
    }

    load(props) {
        this.setState({
            mod: null
        })
        props.load((mod) => {
            this.setState({
                // handle both es imports and cjs
                mod: mod.default ? mod.default : mod
            })
        })
    }

    render() {
        return this.state.mod ? this.props.children(this.state.mod) : null
    }
};


const Login = (props) => (
    <Bundle load={LazyLogin}>
        {(Login) => <Login {...props}/>}
    </Bundle>
)

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <switch>
                <Route exact path='/' component={Home}/>
                <Route path='/restaurant' component={Restaurant}/>
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register}/>
                <Route path='/location' component={SearchLoc}/>
                <Route component={NotFound}/>
            </switch>
        </Router>
    </Provider>,
    document.getElementById('app'));

 

