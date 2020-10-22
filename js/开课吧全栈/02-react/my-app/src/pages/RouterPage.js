import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export default class RouterPage extends Component {
  render() {
    return (
      <div>
        <h3>Router Page</h3>
        <Router>
          <Link to="/">首页</Link>
          <div></div>
          <Link to="/user">用户中心</Link>
          <div></div>
          <Link to="/asd">命中最后一个路由</Link>

          {/* {根路由添加exact} */}
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/user" component={UsersPage}></Route>
          <Route component={EmptyPage}></Route>
        </Router>
      </div>
    )
  }
}

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
      </div>
    )
  }
}

class UsersPage extends Component {
  render() {
    return (
      <div>
        <h1>User Page</h1>
      </div>
    )
  }
}

class EmptyPage extends Component {
  render() {
    return (
      <div>
        <h1>Empty Page</h1>
      </div>
    )
  }
}