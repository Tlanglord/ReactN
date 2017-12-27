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

    constructor(props) {
        super(props);
        this.state = {
            // short for "module" but that's a keyword in js, so "mod"
            mod: null
        }
    }

    componentWillMount() {
        console.log("props.load componentWillMount");
        this.load(this.props)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.load !== this.props.load) {
            this.load(nextProps)
        }
    }

    load(props) {
        debugger
        this.setState({
            mod: null
        })
        props.load((mod) => {
            debugger
            console.log("props.load"+ mod);
            this.setState({
                // handle both es imports and cjs
                mod: mod.default ? mod.default : mod
            })
        })
    }
    render() {
        debugger
        console.log("props.load render");
        return this.state.mod ? this.props.children(this.state.mod) : null
    }
}


const Dashboard = (props) => (
    <Bundle load={loadDashboard}>
        {(Dashboard) => <Dashboard {...props}/>}
    </Bundle>
)

const Dash = function (props) {
    return <Bundle load={LazyLogin}>
        {
            function (Com) {
                return <Com {...props}/>
            }
        }
    </Bundle>
}

const LoginA = (props) => (
    <Bundle load={LazyLogin}>
        {(B) => <B {...props}/>}
    </Bundle>
)

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <switch>
                <Route exact path='/' component={Home}/>
                <Route path='/restaurant' component={Restaurant}/>
                <Route path='/login' component={Dash} />
                <Route path='/register' component={Register}/>
                <Route path='/location' component={SearchLoc}/>
                <Route component={NotFound}/>
            </switch>
        </Router>
    </Provider>,
    document.getElementById('app'));

 

