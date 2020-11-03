import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import HomePage from './HomePage'
import LoginPage from './LoginPage'
import UserPage from './UserPage'

export default class ReactRouterPage extends Component {
    render() {
        return (
            <div>
                <h3>React Router Page</h3>
                <Router>
                    <Link to="/">首页</Link>
                    <Link to="/user">用户中心</Link>
                    <Link to="/login">登录</Link>
                    <Link to="/search/123">搜索</Link>

                    {/* {route 要包裹在router内部， route要使用history location, which is from router} */}
                    {/* {path不写则全匹配} */}
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/user" component={UserPage} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/search/:id" component={SearchComponent} />
                        {/* 404页面 */}
                        <Route render={() => <div>404</div>}></Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}
function DetailComponent(props) {
    return <div>detail</div>
}

function SearchComponent(props) {
    console.log(props)
    const { id } = props.match.params
    return (<div>
        SearchComponent - {id}
        <Link to={`/search/${id}/detail`}>详情</Link>
        <Route path={`/search/:${id}/detail`} component={DetailComponent}></Route>
    </div>)
}